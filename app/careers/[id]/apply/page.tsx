"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useQuery, useMutation } from "@tanstack/react-query";
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
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner"; // ✅ Sonner toast
import { supabase } from "@/lib/supabase/client";

const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  resumeUrl: z.string().url("Please provide a valid resume URL"),
  coverLetter: z.string().optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function CareerApplicationPage() {
  const params = useParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const { data: careerData, isLoading: careerLoading } = useQuery({
    queryKey: ["career", params.id],
    queryFn: async () => {
      const res = await fetch(`/api/careers/${params.id}`);
      if (!res.ok) throw new Error("Failed to fetch career details");
      return res.json();
    },
  });

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      resumeUrl: "",
      coverLetter: "",
    },
  });

  const submitApplication = useMutation({
    mutationFn: async (data: ApplicationFormData) => {
      const response = await fetch(`/api/job-applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error("Failed to submit application");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Application Submitted", {
        description: "We'll review your application and get back to you soon.",
      });
      router.push("/careers");
    },
    onError: () => {
      toast.error("Failed to submit application. Please try again.");
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    if (!fileUrl) {
      toast.error("Please upload your resume.");
      return;
    }

    setIsSubmitting(true);
    try {
      const finalData = {
        ...data,
        resumeUrl: fileUrl,
        careerId: params.id,
      };
      await submitApplication.mutateAsync(finalData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      return;
    }

    const sanitizedFileName = file.name
      .replace(/[^a-z0-9.\-_]/gi, "_")
      .toLowerCase();
    const filePath = `${Date.now()}_${sanitizedFileName}`;

    const { data, error } = await supabase.storage
      .from("resumes")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
        contentType: file.type,
      });

    if (error) {
      console.error("Upload error:", error.message);
      toast.error("Upload Failed: " + error.message);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("resumes")
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData?.publicUrl;

    if (!publicUrl) {
      toast.error("Failed to retrieve uploaded file URL.");
      return;
    }

    setFileUrl(publicUrl);
    form.setValue("resumeUrl", publicUrl, { shouldValidate: true });

    toast.success("Resume uploaded successfully.");
  };

  if (careerLoading) {
    return <div className="container min-h-screen pt-20">Loading...</div>;
  }

  const career = careerData?.career;

  if (!career) {
    return (
      <div className="container min-h-screen pt-20">Position not found</div>
    );
  }

  return (
    <div className="min-h-screen pt-20 py-[80%] lg:py-32">
      <div className="container py-8">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold">
              Apply for {career.title}
            </h1>
            <p className="text-muted-foreground">
              Complete the form below to apply for this position. Make sure to
              provide accurate contact information.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-card">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="resumeUrl"
                  render={() => (
                    <FormItem>
                      <FormLabel>Resume Upload (PDF only)</FormLabel>
                      <FormControl>
                        <>
                          <Input
                            type="file"
                            accept=".pdf"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) await handleFileUpload(file);
                            }}
                          />
                          {/* {fileUrl && (
                            <p className="mt-2 text-sm text-green-600">
                              Uploaded:{" "}
                              <a
                                href={fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                              >
                                {fileUrl}
                              </a>
                            </p>
                          )} */}
                        </>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Letter (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us why you're interested in this position..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
