import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { leads } from "@/lib/db/schema";
import { eq, count, like, and, sql } from "drizzle-orm";
import { sendLeadThankYouEmail } from "@/lib/email";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  whatsappNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
  electricityBill: z
    .string()
    .min(1, "Please enter your electricity bill amount"),
  city: z.string().min(2, "Please enter your city"),
  companyName: z.string().optional(),
  type: z.enum(["residential", "housing_society", "commercial"]),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = leadSchema.parse(body);

    const [lead] = await db.insert(leads).values(data).returning();

    // Send thank you email
    // await sendLeadThankYouEmail(
    //   data.whatsappNumber + "@whatsapp.com",
    //   data.name
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
             ${leads.city} ILIKE ${`%${search}%`})`
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
    const whereClause = whereConditions.length > 0 
      ? and(...whereConditions) 
      : undefined;
    
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
      .orderBy(leads.createdAt)
      .limit(limit)
      .offset(offset);
    
    const totalPages = Math.ceil(totalCount / limit);
    
    return NextResponse.json({ 
      success: true, 
      leads: allLeads,
      totalCount,
      totalPages,
      currentPage: page
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