"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateCareer, useUpdateCareer } from "@/lib/queries/careers";
import { toast } from "sonner";
import RichTextEditor from "./RichTextEditor";

const careerSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  type: z.enum(["Full-Time", "Part-Time", "Internship"]),
  location: z.string().min(2, "Location must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  requirements: z
    .string()
    .min(10, "Requirements must be at least 10 characters"),
  salary: z.string().optional(),
  applyUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
});

type CareerFormData = z.infer<typeof careerSchema>;

interface CareerFormProps {
  initialData?: CareerFormData & { id: string };
  onClose?: () => void;
}

export default function CareerForm({ initialData, onClose }: CareerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createCareerMutation = useCreateCareer();
  const updateCareerMutation = useUpdateCareer();

  const form = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
    defaultValues: initialData || {
      title: "",
      type: "Full-Time",
      location: "",
      description: "",
      requirements: "",
      salary: "",
      applyUrl: "",
    },
  });

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);
    try {
      if (initialData?.id && initialData.id !== "new") {
        await updateCareerMutation.mutateAsync({ id: initialData.id, data });
        toast.success("Career updated successfully");
      } else {
        await createCareerMutation.mutateAsync(data);
        toast.success("Career created successfully");
      }

      form.reset();
      onClose?.();
    } catch (error) {
      toast.error(
        initialData ? "Failed to update career" : "Failed to create career"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {initialData && initialData.id !== "new" ? "Edit Job Listing" : "Add New Job Listing"}
        </h2>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter job title" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Full-Time">Full-Time</SelectItem>
                    <SelectItem value="Part-Time">Part-Time</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter job location" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary Range (Optional)</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., ₹5-8 LPA" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <RichTextEditor
                    content={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Requirements</FormLabel>
                <FormControl>
                  <RichTextEditor
                    content={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="applyUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Application URL (Optional)</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter application URL" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                createCareerMutation.isPending ||
                updateCareerMutation.isPending
              }
            >
              {isSubmitting ? "Saving..." : initialData && initialData.id !== "new" ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}