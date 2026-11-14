import { getZohoAccessToken } from "./getAccessToken";

export interface ZohoLeadPayload {
  name: string;
  email?: string;
  whatsappNumber: string;
  district: string;
  companyName?: string;
  electricityBill: string;
  type: string;
}

interface ZohoRecordResult {
  code?: string;
  status?: string;
  message?: string;
  action?: string;
  details?: {
    id?: string;
    api_name?: string;
    [key: string]: any;
  };
}

async function handleZohoResponse(
  zohoRes: Response,
  accessToken: string,
  lead: ZohoLeadPayload
) {
  let zohoData: any = null;
  try {
    zohoData = await zohoRes.json();
  } catch {
    return null;
  }

  const record: ZohoRecordResult | undefined = zohoData?.data?.[0];

  // 1. Successful creation or update
  if (
    zohoRes.ok &&
    (record?.code === "SUCCESS" || record?.status === "success")
  ) {
    return {
      success: true,
      message:
        record?.action === "update"
          ? "Contact updated in Zoho Bigin"
          : "Contact created in Zoho Bigin",
      data: zohoData,
    };
  }

  // 2. Duplicate contact detected
  if (record?.code === "DUPLICATE_DATA") {
    const existingId = record.details?.id;

    if (existingId) {
      try {
        const updatePayload = {
          data: [
            {
              Description: `[Latest Inquiry: ${new Date().toLocaleDateString("en-IN")}] Bill: ${lead.electricityBill} | District: ${lead.district} | Type: ${lead.type}${lead.email ? ` | Email: ${lead.email}` : ""}${lead.companyName ? ` | Company: ${lead.companyName}` : ""}`,
              ...(lead.email ? { Email: lead.email } : {}),
            },
          ],
          trigger: ["workflow"],
        };

        const updateRes = await fetch(
          `https://www.zohoapis.in/bigin/v1/Contacts/${existingId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Zoho-oauthtoken ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatePayload),
          }
        );

        const updateData = await updateRes.json().catch(() => ({}));
        return {
          success: true,
          message:
            "Contact already exists in Zoho Bigin; record updated with latest inquiry",
          isDuplicate: true,
          existingId,
          data: updateData,
        };
      } catch (updateErr) {
        console.warn("Failed to update existing Zoho Bigin contact:", updateErr);
      }
    }

    // Return success even if PUT fails since contact is already present in Zoho Bigin
    return {
      success: true,
      message: "Contact already exists in Zoho Bigin",
      isDuplicate: true,
      existingId,
      data: zohoData,
    };
  }

  return null;
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

  // Try first with custom fields and duplicate check
  const customPayload = {
    data: [
      {
        Last_Name: lead.name,
        Mobile: lead.whatsappNumber,
        Email: lead.email || undefined,
        District: lead.district,
        Company_Name: lead.companyName || "N/A",
        Monthly_Electricity_Bill: lead.electricityBill,
        Looking_For: lead.type,
        Description: `Electricity Bill: ${lead.electricityBill} | District: ${lead.district} | Type: ${lead.type}${lead.email ? ` | Email: ${lead.email}` : ""}${lead.companyName ? ` | Company: ${lead.companyName}` : ""}`,
      },
    ],
    duplicate_check_fields: ["Mobile"],
    trigger: ["workflow"],
  };

  const zohoRes = await fetch("https://www.zohoapis.in/bigin/v1/Contacts", {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customPayload),
  });

  const customResult = await handleZohoResponse(zohoRes, accessToken, lead);
  if (customResult) {
    return customResult;
  }

  // If custom fields submission failed (e.g. invalid custom field name), retry with standard Bigin fields
  const standardPayload = {
    data: [
      {
        Last_Name: lead.name,
        Mobile: lead.whatsappNumber,
        Email: lead.email || undefined,
        Mailing_City: lead.district,
        Description: `Electricity Bill: ${lead.electricityBill} | District: ${lead.district} | Type: ${lead.type}${lead.email ? ` | Email: ${lead.email}` : ""}${lead.companyName ? ` | Company: ${lead.companyName}` : ""}`,
        Lead_Source: "Website - Landing Page",
      },
    ],
    duplicate_check_fields: ["Mobile"],
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

  const retryResult = await handleZohoResponse(retryRes, accessToken, lead);
  if (retryResult) {
    return retryResult;
  }

  const retryData = await retryRes.json().catch(() => ({}));
  console.error("Zoho Bigin submission failed:", retryData);
  return {
    success: false,
    error: "Zoho API Error",
    details: retryData,
  };
}
