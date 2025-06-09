import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Types
export interface Lead {
  id: string;
  name: string;
  whatsappNumber: string;
  electricityBill: string; // Assuming this is a string representing the bill amount
  city: string;
  companyName?: string;
  type: 'residential' | 'housing_society' | 'commercial';
  createdAt: string;
}

// API Functions
const fetchLeads = async (): Promise<{ leads: Lead[] }> => {
  const response = await fetch('/api/leads');
  if (!response.ok) throw new Error('Failed to fetch leads');
  return response.json();
};

// const createLead = async (data: Omit<Lead, 'id' | 'createdAt'>): Promise<Lead> => {
//   const response = await fetch('/api/leads', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   if (!response.ok) throw new Error('Failed to create lead');
//   return response.json();
// };

const createLead = async (data: Omit<Lead, 'id' | 'createdAt'>): Promise<Lead> => {
  // 1. Save to Supabase (your existing API)
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Failed to create lead in Supabase');

  const savedLead = await response.json();

  // 2. Also send to Zoho Bigin
  try {
    await fetch('/api/zoho/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error('Zoho submission failed', error);
    // Optional: log this somewhere or notify admin
  }

  return savedLead;
};

const deleteLead = async (id: string): Promise<void> => {
  const response = await fetch(`/api/leads?id=${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete lead');
};

// Hooks
export function useLeads() {
  return useQuery({
    queryKey: ['leads'],
    queryFn: fetchLeads,
  });
}

export function useCreateLead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}

export function useDeleteLead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}