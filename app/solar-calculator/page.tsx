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
  FileText,
  IndianRupee,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ShootingStars } from "@/components/ui/shooting-stars";
import RippleBackground from "@/components/RippleBackground";

const images = [
  "https://images.pexels.com/photos/9875364/pexels-photo-9875364.jpeg",
  "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
  "https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg",
];

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
              Calculate Your <span className="text-primary">Solar Savings</span> Instantly
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Try our free solar calculator to estimate your monthly savings, return on investment, and energy output based on your specific needs and location.
            </p>
          </motion.div>

          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[40%] bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/30"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Solar Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-white">
                  Monthly Electricity Bill (₹)
                </label>
                <Input
                  type="number"
                  placeholder="Enter your monthly bill"
                  value={monthlyBill || ""}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-white">
                  Available Roof Area (sq ft)
                </label>
                <Input
                  type="number"
                  placeholder="Enter roof area"
                  value={roofArea || ""}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-white">
                  Location
                </label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="bg-white/20 backdrop-blur-sm border border-white/30 text-white">
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
                className="w-full bg-white text-black hover:bg-white/90"
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
                    <Sun className="h-6 w-6 text-primary" />
                    Your Solar System Estimate
                  </CardTitle>
                  <CardDescription>
                    Based on your inputs, here&apos;s what your solar system could look like
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Sun className="h-5 w-5 text-primary" />
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
                        <CardTitle className="text-lg flex items-center gap-2">
                          <IndianRupee className="h-5 w-5 text-primary" />
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
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Battery className="h-5 w-5 text-primary" />
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
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
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
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Zap className="h-5 w-5 text-primary" />
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
                        <CardTitle className="text-lg flex items-center gap-2">
                          <BarChart className="h-5 w-5 text-primary" />
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

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">About Our Calculator</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Calculate Your Solar Savings
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Before making the decision to go solar, use our solar savings
              calculator to get a detailed estimate of how much you can save on
              your electricity bills. By inputting your energy usage, roof size, and
              location, our tool helps you understand the potential savings, ROI, and
              payback period for your solar installation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Features of the Solar Calculator</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p><span className="font-semibold">Instant Results:</span> Get an estimate instantly based on your energy data.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p><span className="font-semibold">Customized Estimates:</span> Tailored to your specific energy consumption and geographical location.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p><span className="font-semibold">Easy to Use:</span> Simple interface that requires just a few details to calculate your potential savings.</p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8">Why Do You Need a Solar Calculator?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p>People are often unsure of the exact costs and savings they would get from installing solar power systems, especially when trying to estimate their energy needs.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p>Without a clear understanding of how much energy they use and how solar can offset their costs, customers may be hesitant to invest in solar.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p>The Solar Calculator helps prospective solar customers quickly calculate their potential savings, costs, and system size requirements before they make a decision.</p>
                </li>
              </ul>
            </motion.div>

            {/* Uses and Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Uses</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p><span className="font-semibold">Estimate Savings:</span> You can use the Solar Calculator to estimate how much money you could save on your electricity bill by installing solar panels.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p><span className="font-semibold">Determine System Size:</span> The calculator helps you figure out the right size of solar system needed based on your home or business&apos;s energy consumption.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p><span className="font-semibold">Cost Projection:</span> It provides a clear cost breakdown, helping users understand installation costs, payback period, and long-term savings.</p>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p><span className="font-semibold">Quick and Accurate Estimates:</span> Get an instant understanding of how much you can save and what system size is right for you.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p><span className="font-semibold">Customizable:</span> Input your monthly electricity usage, roof size, and location, and get a personalized solar plan.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p><span className="font-semibold">Financial Clarity:</span> Provides a detailed financial overview, helping you plan for solar installation and understand your long-term savings and ROI.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Input Your Details",
                description: "Enter basic details such as your monthly electricity usage, location, and roof size.",
                icon: <FileText className="h-10 w-10 text-primary" />
              },
              {
                step: "02",
                title: "Solar System Size",
                description: "Based on your energy consumption, the calculator will recommend an ideal solar system size to meet your needs.",
                icon: <Sun className="h-10 w-10 text-primary" />
              },
              {
                step: "03",
                title: "Estimate Costs and Savings",
                description: "The tool will provide an estimate of the installation cost, savings on electricity bills, and the payback period.",
                icon: <Calculator className="h-10 w-10 text-primary" />
              },
              {
                step: "04",
                title: "Account for Incentives",
                description: "It factors in available government incentives and rebates to give you an accurate idea of the final price.",
                icon: <IndianRupee className="h-10 w-10 text-primary" />
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-md hover:bg-primary hover:text-white hover:shadow-xl group"
              >
                <div className="text-3xl font-bold text-primary/20 mb-4 group-hover:text-white/20">{step.step}</div>
                <div className="mb-4 text-primary group-hover:text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{step.title}</h3>
                <p className="text-muted-foreground group-hover:text-white">{step.description}</p>
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[url('/bg-pattern.png')] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary"></div>
          {/* Multiple shooting star layers with different colors and speeds */}
          <ShootingStars
            starColor="#9E00FF"
            trailColor="#2EB9DF"
            minSpeed={15}
            maxSpeed={35}
            minDelay={1000}
            maxDelay={3000}
          />
          <ShootingStars
            starColor="#FF0099"
            trailColor="#FFB800"
            minSpeed={10}
            maxSpeed={25}
            minDelay={2000}
            maxDelay={4000}
          />
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-2/3 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Solar Journey?
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Get a free consultation with our solar experts to discuss your specific needs and requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button size="lg" variant="secondary" className="group">
                Contact Us Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}