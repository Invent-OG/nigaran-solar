"use client";

import { useState } from "react";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import RippleBackground from "@/components/RippleBackground";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function SolarCalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState<number>(0);
  const [roofArea, setRoofArea] = useState<number>(0);
  const [location, setLocation] = useState<string>("tamil-nadu");
  const [showResults, setShowResults] = useState(false);

  const calculateSolarSystem = () => {
    // Average electricity rate in Tamil Nadu (Rs/kWh)
    const electricityRate = 8;

    // Monthly consumption in kWh
    const monthlyConsumption = monthlyBill / electricityRate;

    // Daily consumption
    const dailyConsumption = monthlyConsumption / 30;

    // Solar system size needed (kW)
    // Assuming 4 peak sun hours per day and 80% system efficiency
    const systemSize = dailyConsumption / (4 * 0.8);

    // Area needed (assuming 100 sq ft per kW)
    const areaNeeded = systemSize * 100;

    // System cost (assuming Rs. 45,000 per kW)
    const systemCost = systemSize * 45000;

    // Annual savings
    const annualSavings = monthlyBill * 12;

    // Payback period
    const paybackPeriod = systemCost / annualSavings;

    return {
      systemSize: Math.round(systemSize * 100) / 100,
      areaNeeded: Math.round(areaNeeded),
      systemCost: Math.round(systemCost),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Reduction: Math.round(monthlyConsumption * 12 * 0.82), // kg of CO2 per year
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = calculateSolarSystem();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <RippleBackground />
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
            className="w-full lg:w-[40%] bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/30"
          >
            <h3 className="mb-4 text-xl font-semibold text-white">
              Solar Calculator
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Monthly Electricity Bill (₹)
                </label>
                <Input
                  type="number"
                  placeholder="Enter your monthly bill"
                  value={monthlyBill || ""}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Available Roof Area (sq ft)
                </label>
                <Input
                  type="number"
                  placeholder="Enter roof area"
                  value={roofArea || ""}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Location
                </label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="text-white border bg-white/20 backdrop-blur-sm border-white/30">
                    <SelectValue placeholder="Select your location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="andhra-pradesh">
                      Andhra Pradesh
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full text-black bg-white hover:bg-white/90"
                onClick={handleCalculate}
                disabled={!monthlyBill || !roofArea}
              >
                Calculate Solar Requirements
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-16 bg-background">
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
                          {results.systemSize} kW
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
                          ₹{results.systemCost.toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Before subsidies and incentives
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
                          ₹{results.annualSavings.toLocaleString()}
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
                          {results.paybackPeriod} years
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Time to recover your investment
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Zap className="w-5 h-5 text-primary" />
                          CO₂ Reduction
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">
                          {results.co2Reduction} kg/year
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Estimated carbon footprint reduction
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
                          {results.areaNeeded} sq ft
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Estimated space required for installation
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section className="py-16 pb-52 bg-background">
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Input Your Details",
                description:
                  "Enter basic details such as your monthly electricity usage, location, and roof size.",
                icon: <Calculator className="w-10 h-10 text-primary" />,
              },
              {
                step: "02",
                title: "Solar System Size",
                description:
                  "Based on your energy consumption, the calculator will recommend an ideal solar system size to meet your needs.",
                icon: <Sun className="w-10 h-10 text-primary" />,
              },
              {
                step: "03",
                title: "Estimate Costs and Savings",
                description:
                  "The tool will provide an estimate of the installation cost, savings on electricity bills, and the payback period.",
                icon: <IndianRupee className="w-10 h-10 text-primary" />,
              },
              {
                step: "04",
                title: "Account for Incentives",
                description:
                  "It factors in available government incentives and rebates to give you an accurate idea of the final price.",
                icon: <Lightbulb className="w-10 h-10 text-primary" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-md hover:bg-primary hover:text-white hover:shadow-xl group"
              >
                <div className="mb-4 text-3xl font-bold text-primary/20 group-hover:text-white/20">
                  {step.step}
                </div>
                <div className="mb-4 text-primary group-hover:text-white">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold group-hover:text-white">
                  {step.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white">
                  {step.description}
                </p>
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[url('/bg-pattern.png')] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
