"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateLead } from "@/lib/queries/leads";
import { useRouter } from "next/navigation";
import {
  User,
  Phone,
  Zap,
  MapPin,
  Building2,
  Loader2,
  ChevronDown,
} from "lucide-react";

const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;

const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  whatsappNumber: z
    .string()
    .regex(phoneRegex, "Please enter a valid Indian mobile number"),
  electricityBill: z
    .string()
    .min(1, "Please select your electricity bill range"),
  district: z.string().min(2, "Please select your district"),
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

const DISTRICTS = [
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
];

const RESIDENTIAL_BILLS = [
  "Less than ₹3,000",
  "₹3,000 – ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 and above",
];
const COMMERCIAL_BILLS = [
  "Less than ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 and above",
];

export default function LeadForm({ type, description, title }: LeadFormProps) {
  const router = useRouter();
  const createLeadMutation = useCreateLead();

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      whatsappNumber: "",
      electricityBill: "",
      district: "",
      companyName: "",
      type,
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    try {
      await createLeadMutation.mutateAsync(data);
      form.reset();
      router.push("/consultation/thank-you");
    } catch (error) {
      console.error("Failed to submit lead:", error);
    }
  };

  const inputBase =
    "w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200";

  const selectBase =
    "w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 appearance-none cursor-pointer";

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-primary to-green-800 px-6 pt-6 pb-8">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-green-50/80 text-sm mt-1">{description}</p>
      </div>

      {/* Overlap card body */}
      <div className="px-6 pb-6 -mt-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {createLeadMutation.isError && (
                <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl">
                  <span className="w-5 h-5 text-red-500">⚠</span>
                  An error occurred. Please try again.
                </div>
              )}

              {/* Company Name (commercial only) */}
              {type === "commercial" && (
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-green-600" />
                        Company Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your company name"
                          className={inputBase}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              )}

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-green-600" />
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your full name"
                        className={inputBase}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* WhatsApp */}
              <FormField
                control={form.control}
                name="whatsappNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-green-600" />
                      WhatsApp Number
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center h-12 rounded-xl border border-slate-200 bg-slate-50 focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-amber-400 transition-all duration-200 overflow-hidden">
                        <div className="flex items-center gap-1.5 px-3 border-r border-slate-200 h-full bg-green-50 flex-shrink-0">
                          <span className="text-sm font-semibold text-green-700">
                            🇮🇳
                          </span>
                          <span className="text-sm font-semibold text-slate-600">
                            +91
                          </span>
                        </div>
                        <input
                          type="tel"
                          value={field.value.replace("+91", "")}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9]/g, "");
                            if (val.length <= 10) {
                              field.onChange(`+91${val}`);
                            }
                          }}
                          placeholder="Enter 10-digit number"
                          className="flex-1 bg-transparent border-0 px-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none h-full"
                          maxLength={10}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Two-column grid for bill and district */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Electricity Bill */}
                <FormField
                  control={form.control}
                  name="electricityBill"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-green-600" />
                        {type === "commercial" ? "Monthly" : "Bi-Monthly"} Bill
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <select
                            value={field.value}
                            onChange={field.onChange}
                            className={selectBase}
                          >
                            <option value="">Select bill range</option>
                            {(type === "residential"
                              ? RESIDENTIAL_BILLS
                              : COMMERCIAL_BILLS
                            ).map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* District */}
                <FormField
                  control={form.control}
                  name="district"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-green-600" />
                        District
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <select
                            value={field.value}
                            onChange={field.onChange}
                            className={selectBase}
                          >
                            <option value="">Select district</option>
                            {DISTRICTS.map((district) => (
                              <option key={district} value={district}>
                                {district}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={createLeadMutation.isPending}
                className="w-full h-12 bg-gradient-to-r from-primary to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold rounded-xl text-sm shadow-lg shadow-green-500/30 hover:shadow-green-600/50 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {createLeadMutation.isPending ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Get My Free Quote
                    <span className="text-base">→</span>
                  </span>
                )}
              </Button>

              <p className="text-center text-xs text-slate-400">
                🔒 Your information is 100% secure and never shared.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
