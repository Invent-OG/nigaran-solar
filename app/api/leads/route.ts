import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { eq, count, like, and, sql } from "drizzle-orm";
import { sendLeadThankYouEmail } from "@/lib/email";

const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;

const ipCache = new Map<string, { count: number; firstRequestTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  whatsappNumber: z
    .string()
    .regex(phoneRegex, "Please enter a valid Indian mobile number"),
  electricityBill: z
    .string()
    .min(1, "Please enter your electricity bill amount"),
  district: z.string().min(2, "Please enter your district"),
  companyName: z.string().optional(),
  type: z.enum(["residential", "housing_society", "commercial"]),
  honeypot: z.string().optional(),
  turnstileToken: z.string().min(1, "Turnstile token is required"),
});

export async function POST(req: Request) {
  try {
    // 1. IP-based Rate Limiting
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const now = Date.now();
    const clientData = ipCache.get(ip);
    if (!clientData) {
      ipCache.set(ip, { count: 1, firstRequestTime: now });
    } else {
      if (now - clientData.firstRequestTime < RATE_LIMIT_WINDOW_MS) {
        if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            { success: false, error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        clientData.count++;
      } else {
        // Reset window
        ipCache.set(ip, { count: 1, firstRequestTime: now });
      }
    }

    const body = await req.json();
    const { honeypot, turnstileToken, ...validData } = leadSchema.parse(body);

    // 2. Honeypot Validation
    if (honeypot) {
      return NextResponse.json(
        { success: false, error: "Bot detected" },
        { status: 400 }
      );
    }

    // 3. Turnstile token Verification
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      console.warn("Cloudflare Turnstile secret key is not set");
    }

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey || "",
          response: turnstileToken,
          remoteip: ip,
        }),
      }
    );

    const verifyData = await verifyResponse.json();
    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, error: "Turnstile verification failed" },
        { status: 400 }
      );
    }

    const [lead] = await db.insert(leads).values(validData).returning();

    // Send thank you email
    // await sendLeadThankYouEmail(
    //   validData.whatsappNumber + "@whatsapp.com",
    //   validData.name
    // );

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const date = searchParams.get("date");
    const type = searchParams.get("type");

    const offset = (page - 1) * limit;

    // Build where conditions
    let whereConditions = [];

    if (search) {
      whereConditions.push(
        sql`(${leads.name} ILIKE ${`%${search}%`} OR 
             ${leads.whatsappNumber} ILIKE ${`%${search}%`} OR 
             ${leads.district} ILIKE ${`%${search}%`})`
      );
    }

    if (date) {
      const dateObj = new Date(date);
      const nextDay = new Date(dateObj);
      nextDay.setDate(nextDay.getDate() + 1);

      whereConditions.push(
        sql`${leads.createdAt} >= ${dateObj.toISOString()} AND 
            ${leads.createdAt} < ${nextDay.toISOString()}`
      );
    }

    if (type) {
      whereConditions.push(eq(leads.type, type as any));
    }

    // Combine conditions
    const whereClause =
      whereConditions.length > 0 ? and(...whereConditions) : undefined;

    // Get total count
    const [{ value: totalCount }] = await db
      .select({ value: count() })
      .from(leads)
      .where(whereClause || sql`1=1`);

    // Get paginated leads
    const allLeads = await db
      .select()
      .from(leads)
      .where(whereClause || sql`1=1`)
      .orderBy(sql`${leads.createdAt} DESC`)
      .limit(limit)
      .offset(offset);

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      success: true,
      leads: allLeads,
      totalCount,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Lead ID is required" },
        { status: 400 }
      );
    }

    await db.delete(leads).where(eq(leads.id, id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
