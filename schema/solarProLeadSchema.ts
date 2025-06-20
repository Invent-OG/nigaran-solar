import { z } from "zod";

export const solarProLeadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone is required"),
  location: z.string().optional(),
  profession: z.string().optional(),
  whyJoin: z.string().optional(),
});

export type SolarProLeadSchema = z.infer<typeof solarProLeadSchema>;
