"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Users, Leaf, PiggyBank } from "lucide-react";
import LeadForm from "@/components/forms/lead-form";

export default function HousingSocietyPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg"
            alt="Housing Society Solar Installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Solutions for Housing Societies
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Transform your housing society with sustainable energy solutions.
              Reduce maintenance costs and create a greener community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-card rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Get Your Free Quote
            </h2>
            <LeadForm type="housing_society" title={""} description={""} />
          </motion.div>
        </div>
      </section>

      {/* Detailed Housing Society Info Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto space-y-8 text-muted-foreground text-lg">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Housing Society
          </h2>

          <p>
            Housing societies can drastically cut shared electricity costs by
            installing a community solar system. Nigaran Solar specializes in
            providing customized solar for housing societies, helping
            communities generate clean energy for common utilities like lifts,
            pumps, and corridor lighting. Our high-efficiency society solar
            panels are designed for collective use, ensuring fair distribution
            and reliable power. By adopting solar energy, your society not only
            saves money but also leads the way in sustainable living.
          </p>

          <h3 className="text-2xl font-bold text-foreground">
            Why Solar for Your Housing Society?
          </h3>
          <p>
            Nigaran Solar specializes in providing cost-effective and
            eco-friendly solar solutions for housing societies. By investing in
            community solar systems, entire communities can share the benefits
            of solar energy, reducing electricity costs for all residents while
            contributing to environmental sustainability.
          </p>

          <h3 className="text-2xl font-bold text-foreground">
            Benefits of Solar for Housing Societies:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Lower Collective Bills:</strong> Reduce the energy costs
              for shared spaces like lifts, corridors, and parking areas.
            </li>
            <li>
              <strong>Increased Property Value:</strong> Enhance the value of
              properties within the society with an eco-friendly reputation.
            </li>
            <li>
              <strong>Community Engagement:</strong> Solar adoption fosters a
              sense of collective responsibility towards sustainability.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground">Need</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Many housing societies experience high electricity consumption due
              to common area lighting, elevators, water pumps, and shared
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

          <h3 className="text-2xl font-bold text-foreground">Uses</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Common Area Lighting:</strong> Solar energy can power
              lights in hallways, parking areas, and gardens.
            </li>
            <li>
              <strong>Water Pumps:</strong> Solar can be used to run water pumps
              that supply water to the building or society.
            </li>
            <li>
              <strong>Elevators:</strong> Solar energy can power the elevators
              and other common equipment.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground">Key Features:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              System designed for elevators, lights, pumps, security systems
            </li>
            <li>Bifurcation of electricity savings per flat possible</li>
            <li>Online billing and usage monitoring for residents</li>
            <li>Power backup integration available</li>
          </ul>

          <h3 className="text-2xl font-bold text-foreground">
            Society Solar Types:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Centralized System:</strong> One large plant for entire
              society
            </li>
            <li>
              <strong>Rooftop for Individual Blocks:</strong> Smaller systems
              installed per block
            </li>
          </ul>
        </div>
      </section>

      {/* Benefits Summary Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits for Your Society
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how solar energy can benefit your entire housing
              community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Home className="h-8 w-8" />,
                title: "Common Area Savings",
                description:
                  "Reduce electricity costs for lifts, lighting, and other common facilities",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Benefits",
                description:
                  "Lower maintenance charges for all society members",
              },
              {
                icon: <PiggyBank className="h-8 w-8" />,
                title: "Government Incentives",
                description:
                  "Take advantage of special subsidies for housing societies",
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Green Society",
                description:
                  "Contribute to environmental sustainability as a community",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 text-center"
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
    </div>
  );
}
