import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { careers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

const careerSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  type: z.enum(["Full-Time", "Part-Time", "Internship"]),
  location: z.string().min(2, "Location must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  requirements: z
    .string()
    .min(10, "Requirements must be at least 10 characters"),
  salary: z.string().optional(),
  applyUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
});

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const [career] = await db
      .select()
      .from(careers)
      .where(eq(careers.id, params.id));
    console.log("Fetching career with ID:", params.id);
    if (!career) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, career });
  } catch (error) {
    console.error("GET /api/careers/[id] error:", error);
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
    console.log("Deleting career with ID:", params.id);
    
    // Check if career exists
    const [career] = await db
      .select()
      .from(careers)
      .where(eq(careers.id, params.id));
    
    if (!career) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }
    
    // Delete the career
    await db.delete(careers).where(eq(careers.id, params.id));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/careers/[id] error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await req.json();
    console.log("Patching career with ID:", id, "Data:", body);

    // Validate the data
    const validatedData = careerSchema.parse(body);

    // Check if career exists
    const [existingCareer] = await db
      .select()
      .from(careers)
      .where(eq(careers.id, id));
    
    if (!existingCareer) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }

    // Update the career
    const updated = await db
      .update(careers)
      .set({
        title: validatedData.title,
        type: validatedData.type,
        location: validatedData.location,
        description: validatedData.description,
        requirements: validatedData.requirements,
        salary: validatedData.salary || null,
        applyUrl: validatedData.applyUrl || null,
      })
      .where(eq(careers.id, id))
      .returning();

    return NextResponse.json({ success: true, career: updated[0] });
  } catch (error) {
    console.error("Error updating career:", error);
    
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