// app/api/careers/route.ts
export const dynamic = "force-dynamic";

import { db } from '@/lib/db';
import { careers } from '@/lib/db/schema';
import { NextResponse } from 'next/server';

export async function GET() {
  const allCareers = await db.select().from(careers).orderBy(careers.createdAt);
  return NextResponse.json(allCareers);
}
