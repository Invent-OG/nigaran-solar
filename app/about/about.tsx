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
  ShieldCheck,
  BadgeCheck,
  Home,
  PiggyBank,
} from "lucide-react";
import Head from "next/head";
import { Spotlight } from "@/components/ui/spotlight";
import {
  FlipCard,
  FlipCardBack,
  FlipCardFront,
} from "@/components/ui/flip-card";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/blocks/cta-with-rectangle";
import { RiCustomerService2Line } from "react-icons/ri";
import { Testimonials } from "@/components/ui/testimonials";

export default function AboutPage() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="min-h-screen pt-20">
      {/* Meta Information */}
      {/* <Head>
        <title>About Nigaran Solar | Leading Solar Company in Tamilnadu</title>
        <meta
          name="description"
          content="Nigaran Solar offers affordable, efficient solar systems for
homes and businesses across Tamil Nadu. Trusted provider of sustainable
energy in Coimbatore."
        />
        <meta
          name="keywords"
          content="solar company Coimbatore, solar power systems, trusted solar
partner, solar solutions Tamil Nadu, solar energy provider, solar panel installation
Coimbatore"
        />
      </Head> */}

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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Your Leading Solar Company in TamilNadu
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="flex container relative flex-col p-[5%] justify-center gap-10">
        <div className="absolute inset-0 z-0 bg-[url('/bg-pattern.png')] bg-cover bg-center opacity-30"></div>

        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="max-w-2xl text-4xl font-extrabold md:text-6xl text-black/80 ">
            Mission and
            <br />
            Vision
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
        </motion.div>
        <div className="flex flex-col justify-center w-full gap-5 lg:flex-row lg:gap-24">
          <FlipCard className="h-96 lg:w-2/6">
            <FlipCardFront className="rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1674056982333-5a2f304e4906?q=80&w=2813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="nike air jordan"
                fill
                className="object-cover size-full"
                priority
              />
            </FlipCardFront>
            <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100 via-primary to-amber-50 px-4 py-6 text-center text-white">
              <div className="p-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
                    <Rocket className="w-6 h-6 " />
                  </div>
                  <h2 className="text-2xl font-bold">Vision</h2>
                </div>
                <p className="mb-4 ">
                  We strive to make solar energy accessible to everyone, driving
                  positive change towards a sustainable future for generations
                  to come.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Customer Satisfaction</li>
                  <li>Hands-on free</li>
                  <li>High Quality</li>
                  <li>Professional Standards</li>
                  <li>Continuous Innovation</li>
                </ul>
              </div>
            </FlipCardBack>
          </FlipCard>

          <FlipCard flipDirection="vertical" className="h-96 lg:w-2/6">
            <FlipCardFront className="rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1618558287205-05960522136a?q=80&w=3904&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="nike air jordan"
                fill
                className="object-cover size-full"
                priority
              />
            </FlipCardFront>
            <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100 via-[#048BCF] to-amber-50 px-4 py-6 text-center text-white">
              <div className="p-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
                    <Target className="w-6 h-6 " />
                  </div>
                  <h2 className="text-2xl font-bold">Mission</h2>
                </div>
                <p className="mb-4 ">
                  To empower individuals and businesses to embrace solar energy
                  as an alternative to traditional energy sources.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Empower individuals</li>
                  <li>Embrace solar</li>
                  <li>Clean energy</li>
                  <li>Cost-effective solution</li>
                </ul>
              </div>
            </FlipCardBack>
          </FlipCard>
        </div>

        <p className="text-lg md:text-xl p-[5%]  text-gray-500 container text-justify">
          At Nigaran Solar, we are committed to providing sustainable,
          eco-friendly, and affordable solar power solutions. As one of the
          leading solar companies in TamilNadu, we focus on delivering
          high-quality, customized solar systems for both residential and
          commercial clients. Our goal is to help our customers reduce energy
          costs and contribute to environmental conservation by offering
          renewable energy solutions. With years of expertise in solar panel
          technology and installations, we’re your trusted solar partner in
          Tamilnadu, providing unmatched service and consultation. We offer a
          full range of solar services, including solar power systems for homes,
          commercial establishments, and industries. Whether you&apos;re looking
          for a residential solar installation or a large-scale solar rooftop
          installation, we’ve got you covered.
        </p>
      </div>

      {/* Why Choose Us */}
      <section className="py-[5%] bg-muted-foreground/10">
        <div className="container space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <Badge variant="outline">Our Features</Badge>
            <h2 className="text-4xl font-extrabold text-center md:text-5xl text-black/80">
              Why choose us?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="relative flex flex-col justify-between overflow-hidden text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg group hover:shadow-xl">
              <Image
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                alt="Lower Bills"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute right-[40%]  top-[35%] shadow-lg p-6 rounded-full bg-primary">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full p-10 text-center border ">
                <h4 className="mb-2 text-xl font-semibold text-foreground">
                  Expert Team with Years of Experience
                </h4>
                <p className="text-muted-foreground">
                  Our team brings extensive experience in the solar power
                  industry, combining technical expertise with deep knowledge of
                  the latest renewable energy technologies. From consultation to
                  installation, you’ll work with seasoned professionals who
                  ensure every project is completed to the highest standards.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative flex flex-col justify-between overflow-hidden text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg group hover:shadow-xl">
              <Image
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                alt="Property Value"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute right-[40%]  top-[35%] shadow-lg p-6 rounded-full bg-primary">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full p-10 text-center border ">
                <h4 className="text-xl font-semibold text-foreground">
                  High-Quality & Durable Solar Products{" "}
                </h4>
                <p className="text-muted-foreground">
                  We use only premium-grade solar panels, inverters, and
                  components from trusted global manufacturers. Our systems are
                  built to withstand harsh weather conditions while delivering
                  long-term, reliable performance.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col justify-between overflow-hidden text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg group hover:shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Community Engagement"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority
              />

              <div className="absolute right-[40%]  top-[35%] shadow-lg p-6 rounded-full bg-primary">
                <RiCustomerService2Line className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full p-10 text-center border ">
                <h4 className="mb-2 text-xl font-semibold text-foreground">
                  Excellent Customer Support
                </h4>
                <p className="text-muted-foreground">
                  We believe that great service doesn’t end after installation.
                  Our friendly and responsive support team is always available
                  to assist you — whether you have questions, need maintenance,
                  or want to expand your solar system in the future.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative flex flex-col justify-between overflow-hidden text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg group hover:shadow-xl">
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Community Engagement"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority
              />

              <div className="absolute right-[40%]  top-[35%] shadow-lg p-6 rounded-full bg-primary">
                <BadgeCheck className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full p-10 text-center border ">
                <h4 className="mb-2 text-xl font-semibold text-foreground">
                  Guaranteed Performance & Comprehensive Warranty{" "}
                </h4>
                <p className="text-muted-foreground">
                  With Nigaran Solar, your investment is protected. Our systems
                  come with a performance guarantee and comprehensive
                  manufacturer warranties, giving you peace of mind and
                  confidence in your energy solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="p-[5%] ">
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="">
            Our Team
          </Badge>
          <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl ">
            The Team Behind Our
            <br />
            Services
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
        </motion.div>

        <div className="block">
          <Testimonials />
        </div>
      </div>

      {/* Sustainability & Call to Action */}
      <section className="p-[5%] md:pb-[10%] pb-[80%] bg-background">
        <div className="container space-y-12">
          <div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
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
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Service Areas{" "}
            </h2>
            <p className="text-muted-foreground">
              Nigaran Solar proudly serves across tamilnadu, offering reliable
              and affordable solar installation services for residential,
              commercial, and industrial clients.
            </p>
          </div>
          <CTASection
            badge={{
              text: "Get started",
            }}
            title="Join the Solar Revolution"
            description="Thousands have already made the switch to solar with Nigaran Solar. Join
the movement and discover how you can save money, increase your
property value, and help protect the environment."
            action={{
              text: "Learn more about our solar solutions",
              href: "/residential",
              variant: "default",
            }}
          />
        </div>
      </section>
    </div>
  );
}
