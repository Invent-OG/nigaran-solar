"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calculator,
  Sun,
  Battery,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  BarChart,
  Lightbulb,
  IndianRupee,
  Home,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import Head from "next/head";

// Default calculator values - memoized to avoid recreating on each render
const defaultCalculatorValues = [
  {
    minBill: 0,
    maxBill: 2880,
    kW: 2,
    area: 128,
    costBefore: 160000,
    costAfter: 100000,
  },
  {
    minBill: 2881,
    maxBill: 5820,
    kW: 3,
    area: 192,
    costBefore: 210000,
    costAfter: 132000,
  },
  {
    minBill: 5821,
    maxBill: 9180,
    kW: 4,
    area: 256,
    costBefore: 270000,
    costAfter: 192000,
  },
  {
    minBill: 9181,
    maxBill: 12645,
    kW: 5,
    area: 320,
    costBefore: 350000,
    costAfter: 272000,
  },
  {
    minBill: 12646,
    maxBill: 16110,
    kW: 6,
    area: 384,
    costBefore: 405000,
    costAfter: 327000,
  },
  {
    minBill: 16111,
    maxBill: 19575,
    kW: 7,
    area: 448,
    costBefore: 455000,
    costAfter: 377000,
  },
  {
    minBill: 19576,
    maxBill: 23040,
    kW: 8,
    area: 480,
    costBefore: 482000,
    costAfter: 404000,
  },
  {
    minBill: 23041,
    maxBill: 26505,
    kW: 9,
    area: 544,
    costBefore: 530000,
    costAfter: 452000,
  },
  {
    minBill: 26506,
    maxBill: 29970,
    kW: 10,
    area: 576,
    costBefore: 560000,
    costAfter: 482000,
  },
];

const formSchema = z.object({
  monthlyBill: z.coerce
    .number()
    .min(1000, "Monthly bill must be at least ₹1000"),
  roofArea: z.coerce.number().min(1, "Please enter your roof area"),
  location: z.string().min(1, "Please select your location"),
});

// Hero background image - static instead of slider for better performance
const heroImage = "/Solar calculator/solar calculator (2).webp";

export default function SolarCalculatorPage() {
  const [showResults, setShowResults] = useState(false);
  const [calculationResults, setCalculationResults] = useState<any>(null);
  const targetRef = useRef<HTMLElement | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monthlyBill: 0,
      roofArea: 0,
      location: "tamil-nadu",
    },
  });

  const calculateSolarSystem = (values: z.infer<typeof formSchema>) => {
    const { monthlyBill, roofArea } = values;

    const biMonthlyBill = monthlyBill * 2;

    const matchingSystem =
      defaultCalculatorValues.find(
        (system) =>
          monthlyBill >= system.minBill && monthlyBill <= system.maxBill
      ) || defaultCalculatorValues[defaultCalculatorValues.length - 1];

    const annualSavings = monthlyBill * 6;
    const paybackPeriod = matchingSystem.costAfter / annualSavings;

    const monthlyConsumption = monthlyBill / 8;
    const co2Reduction = Math.round(monthlyConsumption * 12 * 0.82);

    return {
      systemSize: matchingSystem.kW,
      areaNeeded: matchingSystem.area,
      systemCost: matchingSystem.costBefore,
      subsidizedCost: matchingSystem.costAfter,
      annualSavings,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Reduction,
      roofAreaSufficient: roofArea >= matchingSystem.area,
    };
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const results = calculateSolarSystem(values);
    setCalculationResults(results);
    setShowResults(true);

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (showResults && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showResults]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative lg:h-[80vh]  flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src={heroImage}
              alt="Solar panels"
              fill
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          </div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-between w-full gap-10 py-10 lg:flex-row lg:p-0">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-[60%] text-white"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Calculate Your Solar Savings Instantly
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Try our free solar calculator to estimate your monthly savings,
              return on investment, and energy output based on your specific
              needs and location.
            </p>
          </motion.div>

          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[40%] bg-white p-6 rounded-lg border border-white/30"
          >
            <h3 className="mb-4 text-xl font-semibold ">Solar Calculator</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="monthlyBill"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Bi-Monthly (₹)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter your monthly bill"
                          className="border "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="roofArea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">
                        Available Roof Area (sq ft)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter roof area"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Location</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="kerala">Kerala</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="andhra-pradesh">
                            Andhra Pradesh
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <Button size={"lg"} className="w-full" type="submit">
                  Calculate Solar Requirements
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && calculationResults && (
        <section ref={targetRef} className="py-16 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Sun className="w-6 h-6 text-primary" />
                    Your Solar System Estimate
                  </CardTitle>
                  <CardDescription>
                    Based on your inputs, here&apos;s what your solar system
                    could look like
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Sun className="w-5 h-5 text-primary" />
                          System Size
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-primary">
                          {calculationResults.systemSize} kW
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Recommended capacity for your consumption
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <IndianRupee className="w-5 h-5 text-primary" />
                          Estimated Cost
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">
                          ₹{calculationResults.systemCost.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Before subsidies
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <IndianRupee className="w-5 h-5 text-primary" />
                          Cost After Subsidy
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-green-600">
                          ₹{calculationResults.subsidizedCost.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          With government subsidies
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Battery className="w-5 h-5 text-primary" />
                          Annual Savings
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-green-600">
                          ₹{calculationResults.annualSavings.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Estimated yearly electricity savings
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Clock className="w-5 h-5 text-primary" />
                          Payback Period
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">
                          {calculationResults.paybackPeriod} years
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Time to recover your investment
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <BarChart className="w-5 h-5 text-primary" />
                          Roof Area Needed
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">
                          {calculationResults.areaNeeded} sq ft
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {calculationResults.roofAreaSufficient
                            ? "Your roof area is sufficient"
                            : "Your roof area may be insufficient"}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="p-4 mt-6 text-center rounded-lg bg-primary/10">
                    <p className="text-lg font-medium">
                      Ready to start saving? Get a detailed consultation from
                      our experts.
                    </p>
                    <Button
                      className="mt-4"
                      onClick={() => (window.location.href = "/consultation")}
                    >
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* About Solar Calculator Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">About</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Solar Calculator
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Curious about how much you could save with solar? Try the Nigaran
              Solar savings calculator—a free tool that estimates your monthly
              savings, return on investment, and energy output.
            </p>
          </motion.div>

          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"
                  alt="Solar Calculator"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-4 text-2xl font-bold">
                Calculate Your Solar Savings
              </h3>
              <p className="mb-6 text-muted-foreground">
                Before making the decision to go solar, use our solar savings
                calculator to get a detailed estimate of how much you can save
                on your electricity bills. By inputting your energy usage, roof
                size, and location, our tool helps you understand the potential
                savings, ROI, and payback period for your solar installation.
              </p>

              <h4 className="mb-2 text-xl font-semibold">
                Features of the Solar Calculator:
              </h4>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>
                    Instant Results: Get an estimate instantly based on your
                    energy data.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>
                    Customized Estimates: Tailored to your specific energy
                    consumption and geographical location.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>
                    Easy to Use: Simple interface that requires just a few
                    details to calculate your potential savings.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why You Need a Solar Calculator */}
      <section className="relative py-16 bg-black/90">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center text-white"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="text-white">
              Why You Need
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Why Do You Need a Solar Calculator?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 text-white rounded-lg bg-white/10"
            >
              <Calculator className="w-10 h-10 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">
                Understand Costs & Savings
              </h3>
              <p className="text-white/80">
                People are often unsure of the exact costs and savings they
                would get from installing solar power systems, especially when
                trying to estimate their energy needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 text-white rounded-lg bg-white/10"
            >
              <Zap className="w-10 h-10 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">
                Make Informed Decisions
              </h3>
              <p className="text-white/80">
                Without a clear understanding of how much energy they use and
                how solar can offset their costs, customers may be hesitant to
                invest in solar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 text-white rounded-lg bg-white/10"
            >
              <Sun className="w-10 h-10 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">
                Simplify Decision-Making
              </h3>
              <p className="text-white/80">
                The Solar Calculator helps prospective solar customers quickly
                calculate their potential savings, costs, and system size
                requirements before they make a decision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Uses and Benefits Combined Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Uses & Benefits</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              How Our Solar Calculator Helps You
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Uses</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <IndianRupee className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Estimate Savings</p>
                    <p className="text-muted-foreground">
                      You can use the Solar Calculator to estimate how much
                      money you could save on your electricity bill by
                      installing solar panels.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <Sun className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Determine System Size</p>
                    <p className="text-muted-foreground">
                      The calculator helps you figure out the right size of
                      solar system needed based on your home or business&apos;s
                      energy consumption.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <BarChart className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Cost Projection</p>
                    <p className="text-muted-foreground">
                      It provides a clear cost breakdown, helping users
                      understand installation costs, payback period, and
                      long-term savings.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Quick and Accurate Estimates</p>
                    <p className="text-muted-foreground">
                      Get an instant understanding of how much you can save and
                      what system size is right for you.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <Home className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Customizable</p>
                    <p className="text-muted-foreground">
                      Input your monthly electricity usage, roof size, and
                      location, and get a personalized solar plan.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Saves Time</p>
                    <p className="text-muted-foreground">
                      Instead of waiting for a consultant, you can quickly
                      evaluate if solar is the right choice for your home or
                      business.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Simplified */}
      <section className="py-16 px-5 lg:pb-52 pb-[80%] bg-muted/30">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Process</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              How Our Solar Calculator Works
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-primary/30">
              {[
                {
                  title: "Input Your Details",
                  description:
                    "Enter basic details such as your monthly electricity usage, location, and roof size.",
                  icon: <Calculator className="w-6 h-6 text-white" />,
                },
                {
                  title: "Solar System Size",
                  description:
                    "Based on your energy consumption, the calculator will recommend an ideal solar system size to meet your needs.",
                  icon: <Sun className="w-6 h-6 text-white" />,
                },
                {
                  title: "Estimate Costs and Savings",
                  description:
                    "The tool will provide an estimate of the installation cost, savings on electricity bills, and the payback period.",
                  icon: <IndianRupee className="w-6 h-6 text-white" />,
                },
                {
                  title: "Account for Incentives",
                  description:
                    "It factors in available government incentives and rebates to give you an accurate idea of the final price.",
                  icon: <Lightbulb className="w-6 h-6 text-white" />,
                },
              ].map((step, index) => (
                <li key={index} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-5 bg-primary">
                    {step.icon}
                  </span>
                  <h3 className="flex items-center mb-2 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
