import { NextRequest, NextResponse } from "next/server";
import { sendLeadToBigin } from "@/lib/zoho/sendLeadToBigin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await sendLeadToBigin({
      name: body.name,
      whatsappNumber: body.whatsappNumber,
      district: body.district,
      companyName: body.companyName,
      electricityBill: body.electricityBill,
      type: body.type,
    });

    if (!result.success) {
      return NextResponse.json(result, { status: 500 });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Zoho Route Exception:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
