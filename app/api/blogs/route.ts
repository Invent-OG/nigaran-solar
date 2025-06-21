// File: app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { blogs } from '@/lib/db/schema';
import { eq, count, like, and, sql } from 'drizzle-orm';

const blogSchema = z.object({
  title: z.string().min(2),
  excerpt: z.string().min(10),
  content: z.string().min(50),
  imageUrl: z.string().url(),
  category: z.string().min(2)
});

export async function POST(req: Request) {
  try {
    const data = blogSchema.parse(await req.json());
    const [blog] = await db.insert(blogs).values(data).returning();
    return NextResponse.json({ success: true, blog });
  } catch (error) {
    if (error instanceof z.ZodError)
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category");
    
    const offset = (page - 1) * limit;
    
    // Build where conditions
    let whereConditions = [];
    
    if (search) {
      whereConditions.push(
        sql`(${blogs.title} ILIKE ${`%${search}%`} OR 
             ${blogs.excerpt} ILIKE ${`%${search}%`} OR 
             ${blogs.category} ILIKE ${`%${search}%`})`
      );
    }
    
    if (category) {
      whereConditions.push(eq(blogs.category, category));
    }
    
    // Combine conditions
    const whereClause = whereConditions.length > 0 
      ? and(...whereConditions) 
      : undefined;
    
    // Get total count
    const [{ value: totalCount }] = await db
      .select({ value: count() })
      .from(blogs)
      .where(whereClause || sql`1=1`);
    
    // Get paginated blogs
    const allBlogs = await db
      .select()
      .from(blogs)
      .where(whereClause || sql`1=1`)
      .orderBy(blogs.createdAt)
      .limit(limit)
      .offset(offset);
    
    const totalPages = Math.ceil(totalCount / limit);
    
    return NextResponse.json({ 
      success: true, 
      blogs: allBlogs,
      totalCount,
      totalPages,
      currentPage: page
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}