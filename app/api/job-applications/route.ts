import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { jobApplications, careers } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { sendJobApplicationConfirmation } from '@/lib/email';

// GET - Fetch all job applications
export async function GET() {
  const data = await db
    .select({
      id: jobApplications.id,
      name: jobApplications.name,
      email: jobApplications.email,
      phone: jobApplications.phone,
      resumeUrl: jobApplications.resumeUrl,
      coverLetter: jobApplications.coverLetter,
      createdAt: jobApplications.createdAt,
      careerTitle: careers.title,
    })
    .from(jobApplications)
    .leftJoin(careers, eq(jobApplications.careerId, careers.id))
    .orderBy(jobApplications.createdAt);

  return NextResponse.json(data);
}

// POST - Submit job application
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, resumeUrl, coverLetter, careerId } = body;

    // Validation
    if (!name || !email || !phone || !resumeUrl || !careerId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get career title for email
    const [career] = await db.select().from(careers).where(eq(careers.id, careerId));
    
    // Insert job application
    const [application] = await db.insert(jobApplications).values({
      name,
      email,
      phone,
      resumeUrl,
      coverLetter,
      careerId,
    }).returning();

    // Send confirmation email
    if (career) {
      await sendJobApplicationConfirmation(email, name, career.title);
    }

    return NextResponse.json({ 
      message: 'Application submitted successfully', 
      data: application 
    });
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Something went wrong while submitting the application.' }, 
      { status: 500 }
    );
  }
}