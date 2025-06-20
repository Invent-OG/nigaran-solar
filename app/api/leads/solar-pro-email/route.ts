import { NextResponse } from "next/server";
import { sendSolarProLeadEmails } from "@/lib/email";
import { solarProLeadSchema } from "@/schema/solarProLeadSchema";

export async function POST(req: Request) {
  const body = await req.json();

  const result = solarProLeadSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed",
        issues: result.error.format(),
      },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, phone, location, profession, whyJoin } =
    result.data;

  await sendSolarProLeadEmails(email, "felix@nigaran.in", {
    firstName,
    lastName: lastName ?? "",
    phone,
    location: location ?? "",
    profession: profession ?? "",
    whyJoin: whyJoin ?? "",
  });

  return NextResponse.json({ success: true });
}
