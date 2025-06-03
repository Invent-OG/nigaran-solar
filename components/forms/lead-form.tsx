"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateLead } from "@/lib/queries/leads";
import { BorderBeam } from "../magicui/border-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const phoneRegex = /^[6-9]\d{9}$/;

const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  whatsappNumber: z
    .string()
    .regex(phoneRegex, "Please enter a valid Indian mobile number"),
  // electricityBill is validated as a string, as required.
  electricityBill: z
    .string()
    .min(1, "Please select your electricity bill range"),
  city: z.string().min(2, "Please enter your city"),
  companyName: z.string().optional(),
  type: z.enum(["residential", "housing_society", "commercial"]),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface LeadFormProps {
  title: string;
  description: string;
  type: "residential" | "housing_society" | "commercial";
}

export default function LeadForm({ type, description, title }: LeadFormProps) {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const createLeadMutation = useCreateLead();

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      whatsappNumber: "",
      // electricityBill is initialized as an empty string, as required.
      electricityBill: "",
      city: "",
      companyName: "",
      type,
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    try {
      await createLeadMutation.mutateAsync(data);
      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Failed to submit lead:", error);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We&apos;ve received your information and will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <Card className="relative overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/30">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl text-white font-bold">{title}</CardTitle>
        <CardDescription className="text-white/70">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {createLeadMutation.isError && (
              <div className="p-3 text-sm text-red-500 bg-red-100/60 rounded-md">
                An error occurred. Please try again.
              </div>
            )}

            {type === "commercial" && (
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black/ text-white">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter company name"
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-black/ text-white placeholder-white/60"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black/ text-white">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your name"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-black/ text-white placeholder-white/60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsappNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black/ text-white">
                    WhatsApp Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your WhatsApp number"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-black/ text-white placeholder-white/60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="electricityBill"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black/ text-white">
                    {type === "commercial" ? "Monthly" : "Bi-Monthly"}{" "}
                    Electricity Bill (₹)
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                        <SelectValue placeholder="Select your electricity bill range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-black">
                      {(type === "residential"
                        ? [
                            "Less than 3,000/-",
                            "3,000/- to 5,000/-",
                            "5,000/- to 10,000/-",
                            "10,000/- and above",
                          ]
                        : [
                            "Less than 10,000/-",
                            "10,000/- to 25,000/-",
                            "25,000/- to 50,000/-",
                            "50,000/- to 1,00,000/-",
                            "1,00,000/- and above",
                          ]
                      ).map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black/ text-white">City</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your city"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-black/ text-white placeholder-white/60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-white/90"
              disabled={createLeadMutation.isPending}
            >
              {createLeadMutation.isPending
                ? "Submitting..."
                : "Get Free Quote"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
