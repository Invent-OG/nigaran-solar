import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { jobApplications, careers } from '@/lib/db/schema';
import { eq, like, and, sql, desc } from 'drizzle-orm';
import { sendJobApplicationConfirmation } from '@/lib/email';
import { z } from 'zod';

const jobApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  resumeUrl: z.string().url("Please provide a valid resume URL"),
  coverLetter: z.string().optional(),
  careerId: z.string().uuid("Invalid career ID"),
});

// GET - Fetch all job applications
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
        sql`(${jobApplications.name} ILIKE ${`%${search}%`} OR 
             ${jobApplications.email} ILIKE ${`%${search}%`} OR 
             ${jobApplications.phone} ILIKE ${`%${search}%`})`
      );
    }
    
    // Combine conditions
    const whereClause = whereConditions.length > 0 
      ? and(...whereConditions) 
      : undefined;
    
    // Get total count
    const [{ value: totalCount }] = await db
      .select({ value: sql`count(*)` })
      .from(jobApplications)
      .where(whereClause || sql`1=1`);
    
    // Get paginated applications with career title
    const applications = await db
      .select({
        id: jobApplications.id,
        name: jobApplications.name,
        email: jobApplications.email,
        phone: jobApplications.phone,
        resumeUrl: jobApplications.resumeUrl,
        coverLetter: jobApplications.coverLetter,
        careerId: jobApplications.careerId,
        createdAt: jobApplications.createdAt,
        careerTitle: careers.title,
      })
      .from(jobApplications)
      .leftJoin(careers, eq(jobApplications.careerId, careers.id))
      .where(whereClause || sql`1=1`)
      .orderBy(desc(jobApplications.createdAt))
      .limit(limit)
      .offset(offset);

    const totalPages = Math.ceil(Number(totalCount) / limit);
    
    return NextResponse.json({
      success: true,
      applications,
      totalCount,
      totalPages,
      currentPage: page
    });
  } catch (error) {
    console.error('Error fetching job applications:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}

// POST - Submit job application
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = jobApplicationSchema.parse(body);
    
    // Get career title for email
    const [career] = await db.select().from(careers).where(eq(careers.id, validatedData.careerId));
    
    if (!career) {
      return NextResponse.json({ 
        success: false, 
        error: 'Career not found' 
      }, { status: 404 });
    }
    
    // Insert job application
    const [application] = await db.insert(jobApplications).values(validatedData).returning();

    // Send confirmation email
    try {
      await sendJobApplicationConfirmation(validatedData.email, validatedData.name, career.title);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Continue with the process even if email fails
    }

    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully', 
      data: application 
    });
  } catch (error) {
    console.error('Application submission error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        error: 'Validation failed', 
        issues: error.format() 
      }, { status: 400 });
    }
    
    return NextResponse.json(
      { success: false, error: 'Something went wrong while submitting the application.' }, 
      { status: 500 }
    );
  }
}

// DELETE - Delete a job application
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'Application ID is required' 
      }, { status: 400 });
    }

    await db.delete(jobApplications).where(eq(jobApplications.id, id));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting job application:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}