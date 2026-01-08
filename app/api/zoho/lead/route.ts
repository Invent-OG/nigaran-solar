import { getZohoAccessToken } from "@/lib/zoho/getAccessToken";

export async function POST(req: Request) {
  const body = await req.json();

  const accessToken = await getZohoAccessToken();

  const zohoRes = await fetch("https://www.zohoapis.in/bigin/v1/Contacts", {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          Last_Name: body.name,
          Mobile: body.whatsappNumber,
          District: body.district,
          Company_Name: body.companyName || "N/A",
          Monthly_Electricity_Bill: body.electricityBill,
          Looking_For: body.type,
        },
      ],
      trigger: ["workflow"],
    }),
  });

  const zohoData = await zohoRes.json();

  if (!zohoRes.ok || zohoData.data?.[0]?.code !== "SUCCESS") {
    console.error("Zoho Error:", zohoData);
    return new Response("Zoho API Error", { status: 500 });
  }

  return Response.json({ message: "Contact created in Zoho Bigin" });
}
