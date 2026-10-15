import { getZohoAccessToken } from "./getAccessToken";

export interface ZohoLeadPayload {
  name: string;
  whatsappNumber: string;
  district: string;
  companyName?: string;
  electricityBill: string;
  type: string;
}

export async function sendLeadToBigin(lead: ZohoLeadPayload) {
  const envStatus = {
    hasRefreshToken: Boolean(process.env.ZB_REFRESH_TOKEN),
    hasClientId: Boolean(process.env.ZB_CLIENT_ID),
    hasClientSecret: Boolean(process.env.ZB_CLIENT_SECRET),
  };

  if (!envStatus.hasRefreshToken || !envStatus.hasClientId || !envStatus.hasClientSecret) {
    const errorMsg =
      "Missing Zoho Bigin credentials: ZB_REFRESH_TOKEN, ZB_CLIENT_ID, or ZB_CLIENT_SECRET are not set in environment variables.";
    console.error(errorMsg, envStatus);
    return {
      success: false,
      error: errorMsg,
      envStatus,
    };
  }

  const accessToken = await getZohoAccessToken();

  // Try first with custom fields
  const customPayload = {
    data: [
      {
        Last_Name: lead.name,
        Mobile: lead.whatsappNumber,
        District: lead.district,
        Company_Name: lead.companyName || "N/A",
        Monthly_Electricity_Bill: lead.electricityBill,
        Looking_For: lead.type,
        Description: `Electricity Bill: ${lead.electricityBill} | District: ${lead.district} | Type: ${lead.type}${lead.companyName ? ` | Company: ${lead.companyName}` : ""}`,
      },
    ],
    trigger: ["workflow"],
  };

  let zohoRes = await fetch("https://www.zohoapis.in/bigin/v1/Contacts", {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customPayload),
  });

  let zohoData = await zohoRes.json();

  // If Bigin rejected due to custom fields not existing, retry with standard Bigin fields
  if (
    !zohoRes.ok ||
    zohoData.data?.[0]?.code !== "SUCCESS"
  ) {
    console.warn(
      "Zoho custom fields submission failed, retrying with standard Bigin fields:",
      zohoData
    );

    const standardPayload = {
      data: [
        {
          Last_Name: lead.name,
          Mobile: lead.whatsappNumber,
          Mailing_City: lead.district,
          Description: `Electricity Bill: ${lead.electricityBill} | District: ${lead.district} | Type: ${lead.type}${lead.companyName ? ` | Company: ${lead.companyName}` : ""}`,
          Lead_Source: "Website - Landing Page",
        },
      ],
      trigger: ["workflow"],
    };

    const retryRes = await fetch("https://www.zohoapis.in/bigin/v1/Contacts", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(standardPayload),
    });

    const retryData = await retryRes.json();

    if (retryRes.ok && retryData.data?.[0]?.code === "SUCCESS") {
      return {
        success: true,
        message: "Contact created in Zoho Bigin using standard fields",
        data: retryData,
      };
    }

    console.error("Zoho Bigin retry failed:", retryData);
    return {
      success: false,
      error: "Zoho API Error",
      details: retryData,
    };
  }

  return {
    success: true,
    message: "Contact created in Zoho Bigin",
    data: zohoData,
  };
}
