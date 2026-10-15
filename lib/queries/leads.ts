import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Types
export interface Lead {
  id: string;
  name: string;
  whatsappNumber: string;
  electricityBill: string; // Assuming this is a string representing the bill amount
  district: string;
  companyName?: string;
  type: "residential" | "housing_society" | "commercial";
  createdAt: string;
}

// API Functions
const fetchLeads = async (
  page: number = 1,
  limit: number = 10,
  search: string = "",
  date?: string,
  type?: string,
): Promise<{ leads: Lead[]; totalCount: number; totalPages: number }> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (search) params.append("search", search);
  if (date) params.append("date", date);
  if (type) params.append("type", type);

  const response = await fetch(`/api/leads?${params.toString()}`);
  if (!response.ok) throw new Error("Failed to fetch leads");
  return response.json();
};

const createLead = async (
  data: Omit<Lead, "id" | "createdAt"> & {
    honeypot?: string;
    turnstileToken?: string;
  },
): Promise<Lead> => {
  // 1. Save to Supabase (your existing API)
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to create lead");
  }

  const savedLead = await response.json();

  // 2. Also send to Zoho Bigin (fallback client call)
  try {
    const zohoRes = await fetch("/api/zoho/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!zohoRes.ok) {
      const err = await zohoRes.json().catch(() => ({}));
      console.warn("Zoho submission returned non-OK status:", err);
    }
  } catch (error) {
    console.error("Zoho submission failed", error);
  }

  return savedLead;
};

const deleteLead = async (id: string): Promise<void> => {
  const response = await fetch(`/api/leads?id=${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete lead");
};

// Hooks
export function useLeads(
  page: number = 1,
  limit: number = 10,
  search: string = "",
  date?: string,
  type?: string,
) {
  return useQuery({
    queryKey: ["leads", page, limit, search, date, type],
    queryFn: () => fetchLeads(page, limit, search, date, type),
    refetchInterval: 60000, // Refetch every minute
  });
}

export function useCreateLead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}

export function useDeleteLead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}
