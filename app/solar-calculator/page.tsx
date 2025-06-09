"use client";

import { useState, useEffect } from "react";
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
  Coins,
  LineChart,
  AreaChart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import RippleBackground from "@/components/RippleBackground";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Head from "next/head";

// Default calculator values
const defaultCalculatorValues = [
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

const formSchema = z.object({
  monthlyBill: z.string().min(1, "Please enter your monthly bill"),
  roofArea: z.string().min(1, "Please enter your roof area"),
  location: z.string().min(1, "Please select your location"),
});

const images = [
  "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
  "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg",
  "https://images.pexels.com/photos/9875364/pexels-photo-9875364.jpeg",
];

export default function SolarCalculatorPage() {
  const [showResults, setShowResults] = useState(false);
  const [calculationResults, setCalculationResults] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monthlyBill: "",
      roofArea: "",
      location: "tamil-nadu",
    },
  });

  const calculateSolarSystem = (values: z.infer<typeof formSchema>) => {
    const monthlyBill = parseInt(values.monthlyBill);
    const roofArea = parseInt(values.roofArea);
    
    // Find the appropriate system size based on monthly bill
    const biMonthlyBill = monthlyBill * 2;
    const matchingSystem = defaultCalculatorValues.find(
      system => biMonthlyBill >= system.minBill && biMonthlyBill <= system.maxBill
    ) || defaultCalculatorValues[defaultCalculatorValues.length - 1];
    
    // Calculate annual savings and payback period
    const annualSavings = monthlyBill * 12;
    const paybackPeriod = matchingSystem.costAfter / (biMonthlyBill / 2);
    
    // Calculate CO2 reduction (rough estimate: 0.82 kg CO2 per kWh)
    const monthlyConsumption = monthlyBill / 8; // Assuming 8 Rs/kWh
    const co2Reduction = Math.round(monthlyConsumption * 12 * 0.82);
    
    return {
      systemSize: matchingSystem.kW,
      areaNeeded: matchingSystem.area,
      systemCost: matchingSystem.costBefore,
      subsidizedCost: matchingSystem.costAfter,
      annualSavings: annualSavings,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Reduction: co2Reduction,
      roofAreaSufficient: roofArea >= matchingSystem.area,
    };
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const results = calculateSolarSystem(values);
    setCalculationResults(results);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Meta Information */}
      <Head>
        <title>
          Solar Savings Calculator | Estimate Your Solar ROI | Nigaran Solar
        </title>
        <meta
          name="description"
          content="Calculate your potential solar savings with Nigaran Solar's free calculator. Get instant estimates on system size, costs, ROI, and payback period based on your energy usage in Tamil Nadu."
        />
        <meta
          name="keywords"
          content="solar calculator, solar savings calculator, solar ROI calculator, solar panel cost calculator, solar energy savings Tamil Nadu, solar investment calculator"
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
                  alt={`Solar panels ${index + 1}`}
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="monthlyBill"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Monthly Electricity Bill (₹)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter your monthly bill"
                          className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
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
                      <FormLabel className="text-white">Available Roof Area (sq ft)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter roof area"
                          className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
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
                      <FormLabel className="text-white">Location</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="text-white border bg-white/20 backdrop-blur-sm border-white/30">
                            <SelectValue placeholder="Select your location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="kerala">Kerala</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <Button
                  className="w-full text-black bg-white hover:bg-white/90"
                  type="submit"
                >
                  Calculate Solar Requirements
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && calculationResults && (
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
                    Based on your inputs, here&apos;s what your solar system could look like
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
                          <Coins className="w-5 h-5 text-primary" />
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

                  <div className="p-4 mt-6 text-center bg-primary/10 rounded-lg">
                    <p className="text-lg font-medium">
                      Ready to start saving? Get a detailed consultation from our experts.
                    </p>
                    <Button 
                      className="mt-4"
                      onClick={() => window.location.href = '/consultation'}
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
            className="flex flex-col items-center gap-4 text-center mb-12"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              <h3 className="text-2xl font-bold mb-4">Calculate Your Solar Savings</h3>
              <p className="text-muted-foreground mb-6">
                Before making the decision to go solar, use our solar savings
                calculator to get a detailed estimate of how much you can save on
                your electricity bills. By inputting your energy usage, roof size, and
                location, our tool helps you understand the potential savings, ROI, and
                payback period for your solar installation.
              </p>
              
              <h4 className="text-xl font-semibold mb-2">Features of the Solar Calculator:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>Instant Results: Get an estimate instantly based on your energy data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>Customized Estimates: Tailored to your specific energy consumption and geographical location.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>Easy to Use: Simple interface that requires just a few details to calculate your potential savings.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why You Need a Solar Calculator */}
      <section className="relative flex flex-col items-center lg:flex-row">
        {/* Left Side Image */}
        <div className="w-full h-full lg:w-1/2">
          <Image
            src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"
            alt="Solar Calculator Benefits"
            width={800}
            height={600}
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
              Why You Need
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Why Do You Need a Solar Calculator?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <ul className="mt-6 space-y-6 text-lg text-white/80">
            <li className="flex items-start gap-4">
              <Calculator className="w-6 h-6 mt-1 text-primary" />
              <span>
                People are often unsure of the exact costs and savings they would get from installing solar power systems, especially when trying to estimate their energy needs.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <LineChart className="w-6 h-6 mt-1 text-primary" />
              <span>
                Without a clear understanding of how much energy they use and how solar can offset their costs, customers may be hesitant to invest in solar.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <AreaChart className="w-6 h-6 mt-1 text-primary" />
              <span>
                The Solar Calculator helps prospective solar customers quickly calculate their potential savings, costs, and system size requirements before they make a decision.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Uses Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Uses</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Uses of Solar Calculator
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <IndianRupee className="h-6 w-6 text-primary" />
                Estimate Savings
              </h3>
              <p className="text-muted-foreground">
                You can use the Solar Calculator to estimate how much money you could save on your electricity bill by installing solar panels.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Sun className="h-6 w-6 text-primary" />
                Determine System Size
              </h3>
              <p className="text-muted-foreground">
                The calculator helps you figure out the right size of solar system needed based on your home or business's energy consumption.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <BarChart className="h-6 w-6 text-primary" />
                Cost Projection
              </h3>
              <p className="text-muted-foreground">
                It provides a clear cost breakdown, helping users understand installation costs, payback period, and long-term savings.
              </p>
            </motion.div>
          </div>
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
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="text-white">Benefits</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold text-white md:text-5xl">
              Benefits of Solar Calculator
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-white"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Quick and Accurate Estimates",
                description: "Get an instant understanding of how much you can save and what system size is right for you."
              },
              {
                icon: <Home className="h-10 w-10" />,
                title: "Customizable",
                description: "Input your monthly electricity usage, roof size, and location, and get a personalized solar plan."
              },
              {
                icon: <Lightbulb className="h-10 w-10" />,
                title: "No Obligation",
                description: "It's a free tool that requires no commitment, giving you the information you need to make an informed decision."
              },
              {
                icon: <Clock className="h-10 w-10" />,
                title: "Saves Time",
                description: "Instead of waiting for a consultant, you can quickly evaluate if solar is the right choice for your home or business."
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

      {/* How It Works Section */}
      <section className="py-16 pb-32 bg-background">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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