// import { Description } from "@radix-ui/react-dialog";
// import { NextRequest, NextResponse } from "next/server";

import { getZohoAccessToken } from "@/lib/zoho/getAccessToken";

// async function getZohoAccessToken() {
//   const params = new URLSearchParams({
//     refresh_token: process.env.ZB_REFRESH_TOKEN!,
//     client_id: process.env.ZB_CLIENT_ID!,
//     client_secret: process.env.ZB_CLIENT_SECRET!,
//     grant_type: "refresh_token",
//   });

//   const res = await fetch("https://accounts.zoho.in/oauth/v2/token", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: params,
//   });

//   const data = await res.json();
//   return data.access_token;
// }

// export async function POST(req: NextRequest) {
//   const body = await req.json();

//   const accessToken = await getZohoAccessToken();

//   const zohoRes = await fetch("https://www.zohoapis.com/bigin/v2/Contacts", {
//     method: "POST",
//     headers: {
//       Authorization: `Zoho-oauthtoken ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       data: [
//         {
//           Last_Name: body.name,
//           Mobile: body.whatsappNumber,
//           Mailing_City: body.city,
//           Company_Name: body.companyName || "N/A",
//           Description: body.electricityBill,
//           Lead_Source: body.type,
//         },
//       ],
//     }),
//   });

//   const responseData = await zohoRes.json();
//   return NextResponse.json(responseData);
// }

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
      //   data: [
      //     {
      //       Last_Name: body.name || 'No Name',
      //       Mobile: body.whatsappNumber,
      //       City: body.city,
      //       Description: `Electricity Bill: ${body.electricityBill}, Type: ${body.type}, Company: ${body.companyName}`,
      //     },
      //   ],

      data: [
        {
          Last_Name: body.name,
          Mobile: body.whatsappNumber,
          Mailing_City: body.city,
          Company_Name: body.companyName || "N/A",
          Description: `Electricity Bill: ${body.electricityBill}`,
          Lead_Source: body.type,
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
