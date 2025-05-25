"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Target,
  Shield,
  Award,
  Rocket,
  Leaf,
  Zap,
} from "lucide-react";
import Head from "next/head";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Meta Information */}
      <Head>
        <title>
          About Nigaran Solar | Leading Solar Company in Coimbatore, Tamil Nadu
        </title>
        <meta
          name="description"
          content="Nigaran Solar is a trusted solar company in Coimbatore..."
        />
        <meta
          name="keywords"
          content="solar company Coimbatore, solar power systems..."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg"
            alt="About Nigaran Solar"
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
              Your Leading Solar Company in TamilNadu
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              At Nigaran Solar, we are committed to providing sustainable,
              eco-friendly, and affordable solar power solutions. As one of the
              leading solar companies in TamilNadu, we focus on delivering
              high-quality, customized solar systems for both residential and
              commercial clients. Our goal is to help our customers reduce
              energy costs and contribute to environmental conservation by
              offering renewable energy solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Vision</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We strive to make solar energy accessible to everyone, driving
              positive change towards a sustainable future for generations to
              come.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Customer Satisfaction</li>
              <li>Hands-on free</li>
              <li>High Quality</li>
              <li>Professional Standards</li>
              <li>Continuous Innovation</li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Mission</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              To empower individuals and businesses to embrace solar energy as
              an alternative to traditional energy sources.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Empower individuals</li>
              <li>Embrace solar</li>
              <li>Clean energy</li>
              <li>Cost-effective solution</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            Why Choose Us?
          </motion.h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                Expert Team with Years of Experience
              </h3>
              <p className="text-muted-foreground">
                Our team brings extensive experience in the solar power
                industry, combining technical expertise with deep knowledge of
                the latest renewable energy technologies. From consultation to
                installation, you’ll work with seasoned professionals who ensure
                every project is completed to the highest standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                High-Quality & Durable Solar Products
              </h3>
              <p className="text-muted-foreground">
                We use only premium-grade solar panels, inverters, and
                components from trusted global manufacturers. Our systems are
                built to withstand harsh weather conditions while delivering
                long-term, reliable performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Excellent Customer Support
              </h3>
              <p className="text-muted-foreground">
                We believe that great service doesn’t end after installation.
                Our friendly and responsive support team is always available to
                assist you — whether you have questions, need maintenance, or
                want to expand your solar system in the future.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Guaranteed Performance & Comprehensive Warranty
              </h3>
              <p className="text-muted-foreground">
                With Nigaran Solar, your investment is protected. Our systems
                come with a performance guarantee and comprehensive manufacturer
                warranties, giving you peace of mind and confidence in your
                energy solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Call to Action */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Commitment to Sustainability
            </h2>
            <p className="text-muted-foreground">
              We believe that investing in solar energy is an investment in the
              future. Nigaran Solar is dedicated to helping communities
              transition to clean energy by making solar accessible and
              affordable. We work closely with local governments, businesses,
              and homeowners to promote solar power adoption and reduce
              dependence on fossil fuels.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Service Areas
            </h2>
            <p className="text-muted-foreground">
              Nigaran Solar proudly serves [insert cities or regions], offering
              reliable and affordable solar installation services for
              residential, commercial, and industrial clients.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join the Solar Revolution
            </h2>
            <p className="text-muted-foreground mb-6">
              Thousands have already made the switch to solar with Nigaran
              Solar. Join the movement and discover how you can save money,
              increase your property value, and help protect the environment.
            </p>
            <Button size="lg">
              Learn more about our solar solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
