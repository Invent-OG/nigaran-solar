// app/api/careers/route.ts
export const dynamic = "force-dynamic";

import { db } from '@/lib/db';
import { careers } from '@/lib/db/schema';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { eq, like, and, sql, desc } from 'drizzle-orm';

const careerSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  type: z.enum(["Full-Time", "Part-Time", "Internship"]),
  location: z.string().min(2, "Location must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  requirements: z.string().min(10, "Requirements must be at least 10 characters"),
  salary: z.string().optional(),
  applyUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    
    const offset = (page - 1) * limit;
    
    // Build where conditions
    let whereConditions = [];
    
    if (search) {
      whereConditions.push(
        sql`(${careers.title} ILIKE ${`%${search}%`} OR 
             ${careers.location} ILIKE ${`%${search}%`} OR 
             ${careers.type} ILIKE ${`%${search}%`})`
      );
    }
    
    // Combine conditions
    const whereClause = whereConditions.length > 0 
      ? and(...whereConditions) 
      : undefined;
    
    // Get total count
    const [{ value: totalCount }] = await db
      .select({ value: sql`count(*)` })
      .from(careers)
      .where(whereClause || sql`1=1`);
    
    // Get paginated careers
    const allCareers = await db
      .select()
      .from(careers)
      .where(whereClause || sql`1=1`)
      .orderBy(desc(careers.createdAt))
      .limit(limit)
      .offset(offset);
    
    const totalPages = Math.ceil(Number(totalCount) / limit);
    
    return NextResponse.json({ 
      success: true, 
      careers: allCareers,
      totalCount,
      totalPages,
      currentPage: page
    });
  } catch (error) {
    console.error("Error fetching careers:", error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = careerSchema.parse(body);
    
    const [career] = await db.insert(careers).values(data).returning();
    
    return NextResponse.json({ success: true, career });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    
    console.error("Error creating career:", error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'Career ID is required' }, { status: 400 });
    }
    
    await db.delete(careers).where(eq(careers.id, id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting career:", error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}