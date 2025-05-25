"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Award,
  Shield,
  MonitorSmartphone,
  Factory,
  Fan,
  Leaf,
  Coins,
  CheckCircle,
  Bolt,
} from "lucide-react";
import LeadForm from "@/components/forms/lead-form";

export default function CommercialPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg"
            alt="Commercial Solar Installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Power Your Business with Commercial Solar
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Nigaran Solar offers scalable solar solutions that turn sunlight
              into long-term savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Get a Free Commercial Solar Quote
            </h2>
            <LeadForm type="commercial" title={""} description={""} />
          </motion.div>
        </div>
      </section>

      {/* Intro Content Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto space-y-6 text-muted-foreground text-lg">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Commercial Solar for Smarter Businesses
          </h2>
          <p>
            Energy costs are a major expense for many organizations, but Nigaran
            Solar offers scalable commercial solar panels that transform
            sunlight into long-term savings. Whether it’s a warehouse, factory,
            or office complex, our solar for business solutions are engineered
            for performance and durability.
          </p>
          <p>
            We provide end-to-end services including industrial solar
            installation, system design, and energy audits. Reduce operational
            costs and boost your environmental impact—choose Nigaran Solar to
            power your business with clean, renewable energy.
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-muted/10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
            Advantages of Commercial Solar
          </h2>
          <ul className="list-disc space-y-4 text-muted-foreground text-lg pl-6">
            <li>
              <strong>Lower Energy Bills:</strong> Reduce your monthly
              electricity costs significantly.
            </li>
            <li>
              <strong>Tax Advantages:</strong> Utilize government incentives and
              rebates available for solar panel installation.
            </li>
            <li>
              <strong>Sustainability:</strong> Improve your corporate image by
              adopting green energy.
            </li>
            <li>
              <strong>Long-Term Savings:</strong> Make a one-time investment
              that brings long-term financial benefits.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose Nigaran Solar */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
            Why Choose Nigaran Solar?
          </h2>
          <ul className="list-disc space-y-4 text-muted-foreground text-lg pl-6">
            <li>
              <strong>Cost Savings:</strong> Reduce electricity bills and
              achieve long-term savings with efficient solar solutions.
            </li>
            <li>
              <strong>Expert Installation & Support:</strong> Certified
              technicians ensure professional installation and ongoing support.
            </li>
            <li>
              <strong>Sustainability & Brand Image:</strong> Adopt sustainable
              energy to boost eco-friendly branding.
            </li>
            <li>
              <strong>Government Incentives:</strong> Maximize rebates and tax
              savings to reduce your initial investment.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Commercial Solar is Needed */}
      <section className="py-16 bg-muted/10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
            Why Do We Need Commercial Solar?
          </h2>
          <ul className="list-disc space-y-4 text-muted-foreground text-lg pl-6">
            <li>
              High electricity consumption in commercial buildings results in
              high operating costs.
            </li>
            <li>
              Energy price fluctuations and unreliable grid supply make
              businesses vulnerable to unpredictable costs and disruptions.
            </li>
            <li>
              Corporate sustainability goals are pushing businesses to adopt
              green energy solutions.
            </li>
            <li>
              Solar offers businesses the chance to lower energy costs while
              enhancing their green credentials.
            </li>
          </ul>
        </div>
      </section>

      {/* Uses Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
            Uses of Commercial Solar
          </h2>
          <ul className="list-disc space-y-4 text-muted-foreground text-lg pl-6">
            <li>
              <strong>Powering Office Equipment:</strong> Solar can power
              everything from lights, air conditioning, computers, to machinery.
            </li>
            <li>
              <strong>Large-scale Manufacturing Operations:</strong> Replace
              grid electricity, reducing operational costs.
            </li>
            <li>
              <strong>Cooling Systems:</strong> Run industrial cooling and
              ventilation systems on solar to cut major energy drain.
            </li>
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
            Business Benefits of Solar
          </h2>
          <ul className="list-disc space-y-4 text-muted-foreground text-lg pl-6">
            <li>
              <strong>Cost Reduction:</strong> Solar reduces monthly electricity
              bills, offering substantial savings.
            </li>
            <li>
              <strong>Eco-Friendly:</strong> Solar energy reduces your carbon
              footprint, enhancing your corporate image.
            </li>
            <li>
              <strong>Energy Independence:</strong> Reduce reliance on the grid,
              protect against price hikes and outages.
            </li>
            <li>
              <strong>Tax Benefits:</strong> Leverage government rebates, tax
              credits, and accelerated depreciation.
            </li>
            <li>
              <strong>Increased Property Value:</strong> Solar can increase the
              market value of your property.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
