"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
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

function DistrictDropdown({
  field,
  textColor,
}: {
  field: any;
  textColor: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredDistricts = DISTRICTS.filter((d) =>
    d.toLowerCase().includes((field.value || "").toLowerCase()),
  );

  return (
    <div ref={wrapperRef} className="relative w-full space-y-2">
      <FormLabel className={`${textColor} text-base md:text-lg`}>
        District
      </FormLabel>
      <div
        className={`flex border rounded-md transition-all ${open ? "border-green-700 ring-1 ring-green-700" : "border-input"} bg-white cursor-text px-3 h-12`}
        onClick={() => {
          setOpen(true);
          inputRef.current?.focus();
        }}
      >
        <div className="flex justify-between items-center w-full h-full">
          <input
            {...field}
            ref={inputRef}
            className="w-full text-base md:text-lg border-none outline-none bg-transparent p-0 focus:ring-0 text-black placeholder-gray-500 transition-all h-full"
            placeholder="Select or enter your district"
            onFocus={() => setOpen(true)}
            onBlur={() => {
              // Delay closing so that onClick on the dropdown items can fire first
              setTimeout(() => {
                // Only close if focus didn't move elsewhere within the wrapper
                if (!wrapperRef.current?.contains(document.activeElement)) {
                  setOpen(false);
                }
              }, 150);
            }}
            autoComplete="off"
          />
          <ChevronDown
            className={`h-4 w-4 text-gray-400 cursor-pointer pointer-events-none transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {open && (
        <div
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg"
          onWheel={(e) => e.stopPropagation()}
        >
          {filteredDistricts.length > 0 ? (
            <ul className="py-1 max-h-40 overflow-y-auto overscroll-contain touch-pan-y [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
              {filteredDistricts.map((district) => (
                <li
                  key={district}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-base md:text-lg ${field.value === district ? "bg-gray-50 text-black font-medium" : "text-black"}`}
                  onMouseDown={(e) => {
                    // Use onMouseDown so clicking fires before onBlur
                    e.preventDefault();
                    field.onChange(district);
                    setOpen(false);
                  }}
                >
                  {district}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              Press enter to use "{field.value}"
            </div>
          )}
        </div>
      )}
    </div>
  );
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
    <Card className="relative  bg-white border shadow-2xl border-white/30">
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
                    <FormLabel className={`${textColor} text-base md:text-lg`}>
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter company name"
                        className="border placeholder-white/60 h-12 text-base md:text-lg"
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
                  <FormLabel className={`${textColor} text-base md:text-lg`}>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your name"
                      className="border placeholder-white/60 h-12 text-base md:text-lg"
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
                  <FormLabel className={`${textColor} text-base md:text-lg`}>
                    WhatsApp Number
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring h-12">
                      <div className="pl-3 pr-2 py-3 text-muted-foreground bg-muted/50 border-r text-base md:text-lg">
                        +91
                      </div>
                      <Input
                        value={field.value.replace("+91", "")}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, "");
                          if (val.length <= 10) {
                            field.onChange(`+91${val}`);
                          }
                        }}
                        placeholder="Enter your WhatsApp number"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-3 min-w-0 h-full text-base md:text-lg"
                        maxLength={10}
                        type="tel"
                      />
                    </div>
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
                  <FormLabel className={`${textColor} text-base md:text-lg`}>
                    {type === "commercial" ? "Monthly" : "Bi-Monthly"}{" "}
                    Electricity Bill (₹)
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="border h-12 text-base md:text-lg">
                        <SelectValue placeholder="Select your electricity bill range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="text-black text-base md:text-lg">
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
                        <SelectItem
                          key={option}
                          value={option}
                          className="text-base md:text-lg"
                        >
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
                  <FormControl>
                    <DistrictDropdown field={field} textColor={textColor} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold"
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
