// app/api/zoho/callback/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const params = new URLSearchParams({
    code,
    redirect_uri: "http://localhost:3000/api/zoho/callback",
    client_id: process.env.ZB_CLIENT_ID!,
    client_secret: process.env.ZB_CLIENT_SECRET!,
    grant_type: "authorization_code",
  });

  const res = await fetch("https://accounts.zoho.in/oauth/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  const data = await res.json();

  console.log("Zoho token response:", data);

  return NextResponse.json(data);
}