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

const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;

const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  whatsappNumber: z
    .string()
    .regex(phoneRegex, "Please enter a valid Indian mobile number"),
  // electricityBill is validated as a string, as required.
  electricityBill: z
    .string()
    .min(1, "Please select your electricity bill range"),

  district: z.string().min(2, "Please enter your district"),
  companyName: z.string().optional(),
  type: z.enum(["residential", "housing_society", "commercial"]),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface LeadFormProps {
  title: string;
  description: string;
  textColor?: string;
  type: "residential" | "housing_society" | "commercial";
}

export default function LeadForm({
  type,
  description,
  title,
  textColor = "text-gray-700",
}: LeadFormProps) {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const createLeadMutation = useCreateLead();

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      whatsappNumber: "",
      // electricityBill is initialized as an empty string, as required.
      electricityBill: "",

      district: "",
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
      <div className="p-6 text-center rounded-lg bg-green-50">
        <h3 className="mb-2 text-xl font-semibold text-green-800">
          Thank You!
        </h3>
        <p className="text-green-700">
          We&apos;ve received your information and will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <Card className="relative overflow-hidden bg-white border shadow-2xl border-white/30">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold ">{title}</CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {createLeadMutation.isError && (
              <div className="p-3 text-sm text-red-500 rounded-md bg-red-100/60">
                An error occurred. Please try again.
              </div>
            )}

            {type === "commercial" && (
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={textColor}>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter company name"
                        className="border placeholder-white/60"
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
                  <FormLabel className={textColor}>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your name"
                      className="border placeholder-white/60"
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
                  <FormLabel className={textColor}>WhatsApp Number</FormLabel>
                  <FormControl>
                    <Input
                      value={field.value || "+91"}
                      onChange={field.onChange}
                      placeholder="Enter your WhatsApp number"
                      className="border placeholder-white/60"
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
                  <FormLabel className={textColor}>
                    {type === "commercial" ? "Monthly" : "Bi-Monthly"}{" "}
                    Electricity Bill (₹)
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="border ">
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
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={textColor}>District</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="border">
                        <SelectValue placeholder="Select your district" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="h-56">
                      {[
                        "Ariyalur",
                        "Chengalpattu",
                        "Chennai",
                        "Coimbatore",
                        "Cuddalore",
                        "Dharmapuri",
                        "Dindigul",
                        "Erode",
                        "Kallakurichi",
                        "Kanchipuram",
                        "Kanniyakumari",
                        "Karur",
                        "Krishnagiri",
                        "Madurai",
                        "Mayiladuthurai",
                        "Nagapattinam",
                        "Namakkal",
                        "Nilgiris",
                        "Perambalur",
                        "Pudukkottai",
                        "Ramanathapuram",
                        "Ranipet",
                        "Salem",
                        "Sivagangai",
                        "Tenkasi",
                        "Thanjavur",
                        "Theni",
                        "Thiruvarur",
                        "Thoothukudi",
                        "Tiruchirappalli",
                        "Tirunelveli",
                        "Tirupathur",
                        "Tiruppur",
                        "Tiruvallur",
                        "Tiruvannamalai",
                        "Vellore",
                        "Villupuram",
                        "Virudhunagar",
                        "Pondicherry",
                        "Others",
                      ].map((option) => (
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

            <Button
              type="submit"
              className="w-full"
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
