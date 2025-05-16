import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { blogs } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(2),
  excerpt: z.string().min(10),
  content: z.string().min(50),
  imageUrl: z.string().url(),
  category: z.string().min(2),
});


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const pathname = new URL(request.url).pathname;
  const segments = pathname.split("/");
  const id = segments[segments.length - 1];

  try {
    const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));
    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, blog });
  } catch {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  const segments = pathname.split("/");
  const id = segments[segments.length - 1];

  try {
    const body = await request.json();
    const data = blogSchema.parse(body);

    const [existing] = await db.select().from(blogs).where(eq(blogs.id, id));
    if (!existing) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }

    const [updatedBlog] = await db.update(blogs).set(data).where(eq(blogs.id, id)).returning();

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  const segments = pathname.split("/");
  const id = segments[segments.length - 1];

  try {
    const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));
    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }

    await db.delete(blogs).where(eq(blogs.id, id));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
