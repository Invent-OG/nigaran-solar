"use client";

import { useState, useCallback, useMemo } from "react";
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
  Clock,
  BarChart,
  Lightbulb,
  IndianRupee,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// Define the solar calculator data structure
const solarCalculatorData = [
  { minBill: 0, maxBill: 2880, kW: 2, area: 128, costBefore: 160000, costAfter: 100000 },
  { minBill: 2881, maxBill: 5820, kW: 3, area: 192, costBefore: 210000, costAfter: 132000 },
  { minBill: 5821, maxBill: 9180, kW: 4, area: 256, costBefore: 270000, costAfter: 192000 },
  { minBill: 9181, maxBill: 12645, kW: 5, area: 320, costBefore: 350000, costAfter: 272000 },
  { minBill: 12646, maxBill: 16110, kW: 6, area: 384, costBefore: 405000, costAfter: 327000 },
  { minBill: 16111, maxBill: 19575, kW: 7, area: 448, costBefore: 455000, costAfter: 377000 },
  { minBill: 19576, maxBill: 23040, kW: 8, area: 480, costBefore: 482000, costAfter: 404000 },
  { minBill: 23041, maxBill: 26505, kW: 9, area: 544, costBefore: 530000, costAfter: 452000 },
  { minBill: 26506, maxBill: 29970, kW: 10, area: 576, costBefore: 560000, costAfter: 482000 },
];

const images = [
  "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
  "https://images.pexels.com/photos/3560366/pexels-photo-3560366.jpeg",
  "https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg",
];

export default function SolarCalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState<number>(0);
  const [roofArea, setRoofArea] = useState<number>(0);
  const [location, setLocation] = useState<string>("tamil-nadu");
  const [showResults, setShowResults] = useState(false);

  // Memoize the calculation to avoid unnecessary recalculations
  const results = useMemo(() => {
    // Find the appropriate solar system based on the monthly bill
    const solarSystem = solarCalculatorData.find(
      (data) => monthlyBill >= data.minBill && monthlyBill <= data.maxBill
    ) || solarCalculatorData[0];

    // Calculate annual savings (bi-monthly bill * 6)
    const annualSavings = monthlyBill * 6;
    
    // Calculate payback period (cost after subsidy / (bi-monthly bill / 2))
    const paybackPeriod = solarSystem.costAfter / (monthlyBill / 2);
    
    // Calculate CO2 reduction (rough estimate: 0.82 kg CO2 per kWh)
    const monthlyConsumption = monthlyBill / 8; // Assuming Rs. 8 per kWh
    const co2Reduction = Math.round(monthlyConsumption * 12 * 0.82);

    return {
      systemSize: solarSystem.kW,
      areaNeeded: solarSystem.area,
      systemCost: solarSystem.costBefore,
      subsidizedCost: solarSystem.costAfter,
      annualSavings,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Reduction,
    };
  }, [monthlyBill]);

  const handleCalculate = useCallback(() => {
    setShowResults(true);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <Head>
        <title>Solar Savings Calculator | Nigaran Solar</title>
        <meta
          name="description"
          content="Calculate your potential solar savings with Nigaran Solar's free calculator. Get estimates on system size, costs, and ROI for your home or business."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative lg:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

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
            className="lg:w-[40%]"
          >
            <Card className="relative overflow-hidden border shadow-2xl bg-white/10 backdrop-blur-md border-white/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-white">Solar Calculator</CardTitle>
                <CardDescription className="text-white/70">
                  Get a quick estimate of your solar potential
                </CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
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
              <motion.div
                className="flex flex-col items-center gap-4 text-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="outline">Results</Badge>
                <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
                  Your Solar System Estimate
                </h2>
                <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-all duration-300 hover:shadow-lg">
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

                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <IndianRupee className="w-5 h-5 text-primary" />
                      Estimated Cost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      ₹{results.subsidizedCost.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      After subsidies and incentives
                    </p>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg">
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

                <Card className="transition-all duration-300 hover:shadow-lg">
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

                <Card className="transition-all duration-300 hover:shadow-lg">
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

                <Card className="transition-all duration-300 hover:shadow-lg">
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
            </motion.div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
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
                <div className="mb-4">{step.icon}</div>
                <div className="mb-4 text-4xl font-bold text-primary group-hover:text-white">
                  {step.step}
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

      {/* Need Section */}
      <section className="relative flex flex-col items-center lg:flex-row ">
        {/* Left Side Image */}
        <div className="w-full h-full lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Calculator"
            height={100}
            width={100}
            className="shadow-lg object-cover w-full h-[70vh]"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full flex flex-col p-[5%] lg:w-1/2 items-center bg-black/90 justify-center lg:h-[70vh]">
          {/* Background with stars */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
            <div className="absolute inset-0 stars" />
          </div>

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

          <style jsx>{`
            .stars {
              background-image: radial-gradient(
                  2px 2px at 20px 30px,
                  #eee,
                  rgba(0, 0, 0, 0)
                ),
                radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
                radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
                radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
                radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
                radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
              background-repeat: repeat;
              background-size: 200px 200px;
              animation: twinkle 5s ease-in-out infinite;
              opacity: 0.5;
            }

            @keyframes twinkle {
              0% {
                opacity: 0.5;
              }
              50% {
                opacity: 0.8;
              }
              100% {
                opacity: 0.5;
              }
            }
          `}</style>
          
          <motion.div
            className="flex flex-col items-center gap-4 text-center text-white"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="text-white">
              Why Use Our Calculator
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Why Do You Need a Solar Calculator?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <ul className="mt-6 space-y-6 text-lg text-white/80">
            <li className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-primary mt-1" />
              <span>
                People are often unsure of the exact costs and savings they would get from installing solar power systems
              </span>
            </li>
            <li className="flex items-start gap-4">
              <IndianRupee className="w-6 h-6 text-primary mt-1" />
              <span>
                Without a clear understanding of energy usage, customers may be hesitant to invest in solar
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Calculator className="w-6 h-6 text-primary mt-1" />
              <span>
                The Solar Calculator helps prospective customers quickly calculate potential savings, costs, and system requirements
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className="relative py-16 text-lg bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="text-white">Benefits</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold text-white md:text-5xl">
              Benefits of Our Solar Calculator
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-white"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Quick and Accurate Estimates",
                description: "Get an instant understanding of how much you can save with solar energy",
              },
              {
                icon: <Sun className="h-10 w-10" />,
                title: "Customizable",
                description: "Input your monthly electricity usage, roof size, and location for a personalized solar plan",
              },
              {
                icon: <Battery className="h-10 w-10" />,
                title: "No Obligation",
                description: "It's a free tool that requires no commitment",
              },
              {
                icon: <IndianRupee className="h-10 w-10" />,
                title: "Financial Clarity",
                description: "Provides a detailed financial overview, helping you understand long-term savings and ROI",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 pb-32 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">FAQ</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How accurate is the solar calculator?",
                answer: "Our calculator provides estimates based on industry standards and regional data. While the results are generally accurate, a professional assessment will provide the most precise figures for your specific situation."
              },
              {
                question: "Does the calculator account for government subsidies?",
                answer: "Yes, our calculator factors in current government subsidies available in your selected region to give you a more accurate estimate of your final costs."
              },
              {
                question: "What information do I need to use the calculator?",
                answer: "You'll need your monthly electricity bill amount, approximate roof area available for installation, and your location. The more accurate this information is, the better your estimate will be."
              },
              {
                question: "Can I use the calculator for commercial properties?",
                answer: "Yes, the calculator works for both residential and commercial properties. For larger commercial installations, we recommend contacting us for a more detailed assessment."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}