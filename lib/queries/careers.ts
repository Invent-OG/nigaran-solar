import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Types
export interface Career {
  id: string;
  title: string;
  type: 'Full-Time' | 'Part-Time' | 'Internship';
  location: string;
  description: string;
  requirements: string;
  salary?: string;
  applyUrl?: string;
  createdAt: string;
}

export interface JobApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetter?: string;
  careerId: string;
  createdAt: string;
}

// API Functions
const fetchCareers = async (): Promise<Career[]> => {
  const response = await fetch('/api/careers');
  if (!response.ok) throw new Error('Failed to fetch careers');
  return response.json();
};

const fetchCareerById = async (id: string): Promise<{ career: Career }> => {
  const response = await fetch(`/api/careers/${id}`);
  if (!response.ok) throw new Error('Failed to fetch career');
  return response.json();
};

const createCareer = async (data: Omit<Career, 'id' | 'createdAt'>): Promise<Career> => {
  const response = await fetch('/api/careers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create career');
  return response.json();
};

const updateCareer = async ({ id, data }: { id: string; data: Omit<Career, 'id' | 'createdAt'> }): Promise<Career> => {
  const response = await fetch(`/api/careers/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update career');
  return response.json();
};

const deleteCareer = async (id: string): Promise<void> => {
  const response = await fetch(`/api/careers/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete career');
};

const fetchJobApplications = async (): Promise<JobApplication[]> => {
  const response = await fetch('/api/job-applications');
  if (!response.ok) throw new Error('Failed to fetch job applications');
  return response.json();
};

const createJobApplication = async (data: Omit<JobApplication, 'id' | 'createdAt'>): Promise<JobApplication> => {
  const response = await fetch('/api/job-applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit job application');
  return response.json();
};

// Hooks
export function useCareers() {
  return useQuery({
    queryKey: ['careers'],
    queryFn: fetchCareers,
  });
}

export function useCareer(id: string) {
  return useQuery({
    queryKey: ['career', id],
    queryFn: () => fetchCareerById(id),
  });
}

export function useCreateCareer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCareer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['careers'] });
    },
  });
}

export function useUpdateCareer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCareer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['careers'] });
    },
  });
}

export function useDeleteCareer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCareer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['careers'] });
    },
  });
}

export function useJobApplications() {
  return useQuery({
    queryKey: ['jobApplications'],
    queryFn: fetchJobApplications,
  });
}

export function useCreateJobApplication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createJobApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobApplications'] });
    },
  });
}