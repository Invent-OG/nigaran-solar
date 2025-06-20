"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Home,
  Users,
  Leaf,
  PiggyBank,
  Bolt,
  Shield,
  TrendingUp,
} from "lucide-react";
import LeadForm from "@/components/forms/lead-form";
import { Badge } from "@/components/ui/badge";
import { Feature } from "@/components/ui/feature";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";

const images = [
  "/Housing society page/housing society.webp",
  "/Housing society page/housing (2).webp",
  "/Housing society page/housing (3).webp",
];

export default function HousingSocietyPage() {
  return (
    <div className="min-h-screen pt-20">
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
                  alt={`Housing society solar installation by Nigaran Solar - Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
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
              Solar Solutions for
              <span className="text-primary"> Housing </span>Societies
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Transform your housing society with sustainable energy solutions.
              Reduce maintenance costs and create a greener community.
            </p>
          </motion.div>

          {/* Lead Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-[40%] w-full"
          >
            <LeadForm
              type="housing_society"
              title={"Get Your Free Quote"}
              description={""}
            />
          </motion.div>
        </div>
      </section>

      {/* Detailed Housing Society Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto space-y-8 text-lg">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="">
              Housing{" "}
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Housing Society
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <p className="text-muted-foreground">
            Housing societies can drastically cut shared electricity costs by
            installing a community solar system. Nigaran Solar specializes in
            providing customized solar for housing societies, helping
            communities generate clean energy for common utilities like lifts,
            pumps, and corridor lighting. Our high-efficiency society solar
            panels are designed for collective use, ensuring fair distribution
            and reliable power. By adopting solar energy, your society not only
            saves money but also leads the way in sustainable living.
          </p>
        </div>
      </section>

      <div className="bg-muted">
        <section className="container py-16 mx-auto space-y-8 text-lg ">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="">
              Why
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Why Solar for Your Housing Society?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>

            <p className="text-muted-foreground">
              Nigaran Solar specializes in providing cost-effective and
              eco-friendly solar solutions for housing societies. By investing
              in community solar systems, entire communities can share the
              benefits of solar energy, reducing electricity costs for all
              residents while contributing to environmental sustainability.
            </p>

            <h3 className="py-5 text-2xl font-bold text-foreground">
              Benefits of Solar for Housing Societies:
            </h3>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {/* Card 1 - Lower Collective Bills */}
              <div className="relative flex flex-col overflow-hidden text-center bg-white rounded-lg shadow-lg transition-shadow duration-300 group hover:shadow-xl h-[600px] md:h-[700px]">
                <div className="h-1/2 w-full">
                  <Image
                    src="/Housing society page/Lower bills.webp"
                    alt="Reduced electricity bills for housing society"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg p-4 md:p-6 rounded-full bg-primary">
                  <PiggyBank className="w-6 h-6 text-white md:w-8 md:h-8" />
                </div>
                <div className="h-1/2 flex flex-col justify-center items-center px-4 py-6 md:px-10 text-center z-0">
                  <h4 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                    Lower Collective Bills
                  </h4>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Reduce the energy costs for shared spaces like lifts,
                    corridors, and parking areas.
                  </p>
                </div>
              </div>

              {/* Card 2 - Increased Property Value */}
              <div className="relative flex flex-col overflow-hidden text-center bg-white rounded-lg shadow-lg transition-shadow duration-300 group hover:shadow-xl h-[600px] md:h-[700px]">
                <div className="h-1/2 w-full">
                  <Image
                    src="/Housing society page/increased property value.webp"
                    alt="Housing society with increased property value due to solar installation"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg p-4 md:p-6 rounded-full bg-primary">
                  <Home className="w-6 h-6 text-white md:w-8 md:h-8" />
                </div>
                <div className="h-1/2 flex flex-col justify-center items-center px-4 py-6 md:px-10 text-center z-0">
                  <h4 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                    Increased Property Value
                  </h4>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Enhance the value of properties within the society with an
                    eco-friendly reputation.
                  </p>
                </div>
              </div>

              {/* Card 3 - Community Engagement */}
              <div className="relative flex flex-col overflow-hidden text-center bg-white rounded-lg shadow-lg transition-shadow duration-300 group hover:shadow-xl h-[600px] md:h-[700px]">
                <div className="h-1/2 w-full">
                  <Image
                    src="/Housing society page/community engagement.webp"
                    alt="Community members engaged in solar energy project"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg p-4 md:p-6 rounded-full bg-primary">
                  <Users className="w-6 h-6 text-white md:w-8 md:h-8" />
                </div>
                <div className="h-1/2 flex flex-col justify-center items-center px-4 py-6 md:px-10 text-center z-0">
                  <h4 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                    Community Engagement
                  </h4>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Solar adoption fosters a sense of collective responsibility
                    towards sustainability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <section
        className="relative py-16 text-lg bg-background"
        style={{
          backgroundImage: "url('/Housing society page/housing (2).webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="container p-10 mx-auto space-y-8 text-center text-white rounded-lg backdrop-blur-md">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Need
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>

            <ul className="pl-6 space-y-2 ">
              <li>
                Many housing societies experience high electricity consumption
                due to common area lighting, elevators, water pumps, and shared
                cooling systems.
              </li>
              <li>
                Residents face high monthly electricity bills due to the shared
                load in communal areas.
              </li>
              <li>
                Housing societies often seek solutions to reduce maintenance and
                electricity costs while supporting green energy.
              </li>
            </ul>
          </motion.div>{" "}
        </div>
      </section>

      <section className="container py-16 mx-auto space-y-8 text-lg bg-background">
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
            Uses
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative p-6 overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-md hover:bg-primary hover:text-white hover:shadow-xl group">
              <div className="mb-4">
                <Leaf className="w-10 h-10 transition-colors duration-300 text-primary group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold group-hover:text-white">
                Common Area Lighting
              </h3>
              <p className="text-muted-foreground group-hover:text-white">
                Solar energy can power lights in hallways, parking areas, and
                gardens.
              </p>
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[url('/bg-pattern.png')] pointer-events-none" />
            </div>
            <div className="relative p-6 overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-md hover:bg-primary hover:text-white hover:shadow-xl group">
              <div className="mb-4">
                <ArrowRight className="w-10 h-10 transition-colors duration-300 text-primary group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold group-hover:text-white">
                Water Pumps
              </h3>
              <p className="text-muted-foreground group-hover:text-white">
                Solar can be used to run water pumps that supply water to the
                building or society.
              </p>
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[url('/bg-pattern.png')] pointer-events-none" />
            </div>
            <div className="relative p-6 overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-md hover:bg-primary hover:text-white hover:shadow-xl group">
              <div className="mb-4">
                <Home className="w-10 h-10 transition-colors duration-300 text-primary group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold group-hover:text-white">
                Elevators
              </h3>
              <p className="text-muted-foreground group-hover:text-white">
                Solar energy can power the elevators and other common equipment.
              </p>
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[url('/bg-pattern.png')] pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative bg-black/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pattern-bg.png"
            alt="Decorative pattern background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container relative z-10 py-16 mx-auto space-y-8 text-lg text-white ">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Key Features
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-4 ">
            <div className="flex flex-col items-center gap-4 p-5 text-center rounded-xl">
              <div className="p-5 rounded-full shadow-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary via-primary/10 to-primary">
                <Bolt className="w-16 h-16 text-white" />
              </div>
              <span className="text-muted-foreground">
                System designed for elevators, lights, pumps, security systems
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 p-5 text-center rounded-xl">
              <div className="p-5 rounded-full shadow-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary via-primary/10 to-primary">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <span className="text-muted-foreground">
                Bifurcation of electricity savings per flat possible
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 p-5 text-center rounded-xl">
              <div className="p-5 rounded-full shadow-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary via-primary/10 to-primary">
                <Leaf className="w-16 h-16 text-white" />
              </div>
              <span className="text-muted-foreground">
                Online billing and usage monitoring for residents
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 p-5 text-center rounded-xl">
              <div className="p-5 rounded-full shadow-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary via-primary/10 to-primary">
                <TrendingUp className="w-16 h-16 text-white" />
              </div>
              <span className="text-muted-foreground">
                Power backup integration available
              </span>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Feature />
      </motion.div>
    </div>
  );
}