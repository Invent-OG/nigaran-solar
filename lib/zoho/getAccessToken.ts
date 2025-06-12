let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

export const getZohoAccessToken = async (): Promise<string> => {
  const now = Date.now();

  if (cachedToken && tokenExpiry && now < tokenExpiry) {
    return cachedToken;
  }

  const params = new URLSearchParams({
    refresh_token: process.env.ZB_REFRESH_TOKEN!,
    client_id: process.env.ZB_CLIENT_ID!,
    client_secret: process.env.ZB_CLIENT_SECRET!,
    grant_type: "refresh_token",
  });

  const response = await fetch(
    `https://accounts.zoho.in/oauth/v2/token?${params}`,
    {
      method: "POST",
    }
  );

  const data = await response.json();

  if (!response.ok || !data.access_token) {
    console.error("Zoho Token Error:", data);
    throw new Error("Failed to fetch Zoho access token");
  }
  console.log("Zoho token response:", data);
  cachedToken = data.access_token;
  // Token expires in 3600s = 1 hour
  tokenExpiry = now + (data.expires_in || 3600) * 1000 - 60 * 1000; // refresh 1 min early

  return cachedToken!;
};
