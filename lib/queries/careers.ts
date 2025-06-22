import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Types
export interface Career {
  id: string;
  title: string;
  type: "Full-Time" | "Part-Time" | "Internship";
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
  careerTitle?: string;
  createdAt: string;
}

// API Functions
const fetchCareers = async (
  page: number = 1,
  limit: number = 10,
  search: string = ""
): Promise<{
  careers: Career[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (search) params.append("search", search);

  const response = await fetch(`/api/careers?${params.toString()}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch careers");
  }
  return response.json();
};

const fetchCareerById = async (id: string): Promise<{ career: Career }> => {
  const response = await fetch(`/api/careers/${id}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch career");
  }
  return response.json();
};

const createCareer = async (
  data: Omit<Career, "id" | "createdAt">
): Promise<Career> => {
  const response = await fetch("/api/careers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to create career");
  }
  return response.json();
};

const updateCareer = async ({
  id,
  data,
}: {
  id: string;
  data: Omit<Career, "id" | "createdAt">;
}): Promise<Career> => {
  const response = await fetch(`/api/careers/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to update career");
  }
  return response.json();
};

const deleteCareer = async (id: string): Promise<void> => {
  const response = await fetch(`/api/careers/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to delete career");
  }
};

const fetchJobApplications = async (
  page: number = 1,
  limit: number = 10,
  search: string = ""
): Promise<{
  applications: JobApplication[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (search) params.append("search", search);

  const response = await fetch(`/api/job-applications?${params.toString()}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch job applications");
  }
  return response.json();
};

const createJobApplication = async (
  data: Omit<JobApplication, "id" | "createdAt" | "careerTitle">
): Promise<JobApplication> => {
  const response = await fetch("/api/job-applications", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to submit job application");
  }
  return response.json();
};

const deleteJobApplication = async (id: string): Promise<void> => {
  const response = await fetch(`/api/job-applications/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to delete job application");
  }
};

// Hooks
export function useCareers(
  page: number = 1,
  limit: number = 10,
  search: string = ""
) {
  return useQuery({
    queryKey: ["careers", page, limit, search],
    queryFn: () => fetchCareers(page, limit, search),
  });
}

export function useCareer(id: string) {
  return useQuery({
    queryKey: ["career", id],
    queryFn: () => fetchCareerById(id),
    enabled: !!id && id !== "new",
  });
}

export function useCreateCareer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCareer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
    },
  });
}

export function useUpdateCareer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCareer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
    },
  });
}

export function useDeleteCareer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCareer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
    },
  });
}

export function useJobApplications(
  page: number = 1,
  limit: number = 10,
  search: string = ""
) {
  return useQuery({
    queryKey: ["jobApplications", page, limit, search],
    queryFn: () => fetchJobApplications(page, limit, search),
  });
}

export function useCreateJobApplication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createJobApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobApplications"] });
    },
  });
}

export function useDeleteJobApplication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteJobApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobApplications"] });
    },
  });
}
