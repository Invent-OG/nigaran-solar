import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { jobApplications } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const [application] = await db
      .select()
      .from(jobApplications)
      .where(eq(jobApplications.id, params.id));

    if (!application) {
      return NextResponse.json(
        { success: false, error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error("Error fetching job application:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log("Deleting job application with ID:", params.id);

    // Check if application exists
    const [application] = await db
      .select()
      .from(jobApplications)
      .where(eq(jobApplications.id, params.id));

    if (!application) {
      return NextResponse.json(
        { success: false, error: "Application not found" },
        { status: 404 }
      );
    }

    // Delete the application
    await db.delete(jobApplications).where(eq(jobApplications.id, params.id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting job application:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
