"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Rocket, ShieldCheck, BadgeCheck } from "lucide-react";
import {
  FlipCard,
  FlipCardBack,
  FlipCardFront,
} from "@/components/ui/flip-card";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/blocks/cta-with-rectangle";
import { RiCustomerService2Line } from "react-icons/ri";

export default function AboutPage() {
  const TeamsData = [
    {
      name: "Felix Bernard",
      position: "Business Head",
      image: "/about/teams/1.png",
    },
    {
      name: "Cathelene",
      position: "Operations Head",
      image: "/about/teams/2.png",
    },
    {
      name: "Lourduraj",
      position: "Technical Head",
      image: "/about/teams/9.webp",
    },
    {
      name: "Boobala Krishnan",
      position: "Business Development Manager",
      image: "/about/teams/6.png",
    },
    {
      name: "Jerome",
      position: "Operations Manager",
      image: "/about/teams/7.png",
    },
    {
      name: "Srimathi",
      position: "Client Relationship Manager",
      image: "/about/teams/3.png",
    },
    // {
    //   name: "Vindhiya",
    //   position: "Accounts and Operations.",
    //   image: "/about/teams/4.png",
    // },
    {
      name: "Akashveer",
      position: "Site Survey Engineer",
      image: "/about/teams/Empty.png",
    },
    // {
    //   name: "Aushinraj",
    //   position: "Project Manager",
    //   image: "/about/teams/5.png",
    // },
  ];
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg"
            alt="Solar panels on a rooftop with blue sky background - About Nigaran Solar"
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
                src="/about/vision (2).webp"
                alt="Vision illustration - A person looking towards a bright future with solar panels"
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
                src="/about/mission (2).webp"
                alt="Mission illustration - Solar panels with a clear goal and purpose"
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
          technology and installations, we&apos;re your trusted solar partner in
          Tamilnadu, providing unmatched service and consultation. We offer a
          full range of solar services, including solar power systems for homes,
          commercial establishments, and industries. Whether you&apos;re looking
          for a residential solar installation or a large-scale solar rooftop
          installation, we&apos;ve got you covered.
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

            <div className="relative flex flex-col overflow-hidden text-center bg-white rounded-lg shadow-lg transition-shadow duration-300 group hover:shadow-xl h-[600px] md:h-[700px]">
              {/* Top Image */}
              <div className="h-1/2 w-full">
                <Image
                  src="/about/expert team.webp"
                  alt="Expert team of solar professionals at Nigaran Solar"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Center Icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg p-4 md:p-6 rounded-full bg-primary">
                <Users className="w-6 h-6 text-white md:w-8 md:h-8" />
              </div>

              {/* Bottom Content */}
              <div className="h-1/2 flex flex-col justify-center items-center px-4 py-6 md:px-10 text-center z-0">
                <h4 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                  Expert Team with Years of Experience
                </h4>
                <p className="text-sm text-muted-foreground md:text-base">
                  Our team brings extensive experience in the solar power
                  industry, combining technical expertise with deep knowledge of
                  the latest renewable energy technologies. From consultation to
                  installation, you&apos;ll work with seasoned professionals who
                  ensure every project is completed to the highest standards.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative flex flex-col overflow-hidden text-center bg-white rounded-lg shadow-lg transition-shadow duration-300 group hover:shadow-xl h-[600px] md:h-[700px]">
              {/* Image Section */}
              <div className="h-1/2 w-full">
                <Image
                  src="/about/high quality.webp"
                  alt="High quality solar panels and equipment from Nigaran Solar"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Centered Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg p-4 md:p-6 rounded-full bg-primary">
                <ShieldCheck className="w-6 h-6 text-white md:w-8 md:h-8" />
              </div>

              {/* Text Content */}
              <div className="h-1/2 flex flex-col justify-center items-center px-4 py-6 md:px-10 text-center z-0">
                <h4 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                  High-Quality & Durable Solar Products
                </h4>
                <p className="text-sm text-muted-foreground md:text-base">
                  We use only premium-grade solar panels, inverters, and
                  components from trusted global manufacturers. Our systems are
                  built to withstand harsh weather conditions while delivering
                  long-term, reliable performance.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col overflow-hidden text-center bg-white rounded-lg shadow-lg transition-shadow duration-300 group hover:shadow-xl h-[600px] md:h-[700px]">
              {/* Top Image */}
              <div className="h-1/2 w-full">
                <Image
                  src="/about/customer support-16.webp"
                  alt="Customer support team at Nigaran Solar providing excellent service"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg p-4 md:p-6 rounded-full bg-primary">
                <RiCustomerService2Line className="w-6 h-6 text-white md:w-8 md:h-8" />
              </div>

              {/* Bottom Content */}
              <div className="h-1/2 flex flex-col justify-center items-center px-4 py-6 md:px-10 text-center z-0">
                <h4 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                  Excellent Customer Support
                </h4>
                <p className="text-sm text-muted-foreground md:text-base">
                  We believe that great service doesn&apos;t end after
                  installation. Our friendly and responsive support team is
                  always available to assist you — whether you have questions,
                  need maintenance, or want to expand your solar system in the
                  future.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative flex flex-col overflow-hidden text-center bg-white rounded-lg shadow-lg transition-shadow duration-300 group hover:shadow-xl h-[600px] md:h-[700px]">
              {/* Top Image */}
              <div className="h-1/2 w-full">
                <Image
                  src="/about/guarenteed performence.webp"
                  alt="Guaranteed performance metrics for Nigaran Solar systems"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Center Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg p-4 md:p-6 rounded-full bg-primary">
                <BadgeCheck className="w-6 h-6 text-white md:w-8 md:h-8" />
              </div>

              {/* Bottom Content */}
              <div className="h-1/2 flex flex-col justify-center items-center px-4 py-6 md:px-10 text-center z-0">
                <h4 className="mb-2 text-lg font-semibold text-foreground md:text-xl">
                  Guaranteed Performance & Comprehensive Warranty
                </h4>
                <p className="text-sm text-muted-foreground md:text-base">
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

        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 container">
          {TeamsData.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center pb-10 bg-white  transition-shadow duration-300 "
            >
              <Image
                src={member.image}
                alt={`${member.name} - ${member.position} at Nigaran Solar`}
                width={300}
                height={300}
                className="object-cover   "
              />
              <h3 className="text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.position}</p>
            </div>
          ))}
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
        </div>
      </section>
    </div>
  );
}
