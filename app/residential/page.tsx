"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sun,
  Battery,
  PiggyBank,
  Leaf,
  Home,
  Zap,
  Wrench,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import LeadForm from "@/components/forms/lead-form";
import { Feature } from "@/components/ui/feature";
import { Features } from "@/components/blocks/features-8";
import { Timeline } from "@/components/ui/timeline";
import { TimelineDemo } from "@/components/blocks/timeline";
import { FeaturesSectionWithCardGradient } from "@/components/blocks/feature-section-with-card-gradient";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Carousel, TestimonialCard } from "@/components/ui/retro-testimonial";
import { iTestimonial } from "@/components/ui/retro-testimonial";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GlowEffect } from "@/components/ui/glow-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import {
  HiCurrencyDollar,
  HiSupport,
  HiFastForward,
  HiBadgeCheck,
} from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";

const images = [
  "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
  "https://images.pexels.com/photos/3560366/pexels-photo-3560366.jpeg",
  "https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg",
];

type TestimonialDetails = {
  [key: string]: iTestimonial & { id: string };
};

const testimonialData = {
  ids: [
    "e60aa346-f6da-11ed-b67e-0242ac120002",
    "e60aa346-f6da-11ed-b67e-0242ac120003",
    "e60aa346-f6da-11ed-b67e-0242ac120004",
    "e60aa346-f6da-11ed-b67e-0242ac120005",
    "e60aa346-f6da-11ed-b67e-0242ac120006",
    "e60aa346-f6da-11ed-b67e-0242ac120007",
  ],
  details: {
    "e60aa346-f6da-11ed-b67e-0242ac120002": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120002",
      description:
        "The component library has revolutionized our development workflow. The pre-built components are not only beautiful but also highly customizable. It's saved us countless hours of development time.",
      profileImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "Sarah Chen",
      designation: "Senior Frontend Developer",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120003": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120003",
      description:
        "As a startup founder, I needed a quick way to build a professional-looking product. This component library was exactly what I needed. The documentation is clear, and the components are production-ready.",
      profileImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "Michael Rodriguez",
      designation: "Founder, TechStart",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120004": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120004",
      description:
        "The attention to detail in these components is impressive. From accessibility features to responsive design, everything is well thought out. It's become an essential part of our tech stack.",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "David Kim",
      designation: "UI/UX Lead",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120005": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120005",
      description:
        "What sets this component library apart is its flexibility. We've been able to maintain consistency across our applications while still customizing components to match our brand identity perfectly.",
      profileImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Emily Thompson",
      designation: "Product Designer",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120006": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120006",
      description:
        "The performance optimization in these components is outstanding. We've seen significant improvements in our application's load times and overall user experience since implementing them.",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      name: "James Wilson",
      designation: "Performance Engineer",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120007": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120007",
      description:
        "The community support and regular updates make this component library a reliable choice for our projects. It's clear that the team behind it is committed to maintaining high quality and adding new features.",
      profileImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      name: "Sophia Martinez",
      designation: "Full Stack Developer",
    },
  },
};
export default function ResidentialPage() {
  const data = [
    {
      title: "Site Survey & Proposal",
      content: (
        <div>
          <div className="mb-4 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-xl">
            We conduct a thorough site evaluation to create a customized solar
            proposal that aligns with your energy needs.
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Design & Development",
      content: (
        <div>
          <div className="mb-4 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-xl">
            Our team designs a personalized solar system to optimize energy
            efficiency and fit your specific requirements.
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Procurement & Installation",
      content: (
        <div>
          <div className="mb-4 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-xl">
            We source high-quality materials and efficiently install your solar
            system with expert care and precision.
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Commissioning & Connect to Grid",
      content: (
        <div>
          <div className="mb-4 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-xl">
            We perform detailed system checks and connect your solar setup to
            the grid, ensuring smooth and reliable operation.
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  const uses = [
    {
      title: "Powering Home Appliances",
      description:
        "Solar can power everything from lights to refrigerators, air conditioners, and even home heating.",
    },
    {
      title: "Energy for Cooling and Heating",
      description:
        "Solar energy can be used to run air conditioners and water heaters, which are usually some of the highest energy consumers in a household.",
    },
    {
      title: "Backup Power",
      description:
        "Solar can be paired with battery storage to provide backup electricity during power cuts.",
    },
  ];

  return (
    <div className="pt-20 ">
      {/* Meta Information */}
      <Head>
        <title>
          Affordable Residential Solar Panels in Coimbatore & Tamil Nadu |
          Nigaran Solar
        </title>
        <meta
          name="description"
          content="Switch to affordable residential solar panels from Nigaran Solar. We offer efficient solar power systems for homes in Tamil Nadu with government subsidies and expert installation. Save on your electricity bills today!"
        />
        <meta
          name="keywords"
          content="residential solar panels, solar for home in Tamil Nadu, residential solar installation, solar rooftop installation Tamil Nadu, solar panel prices India, solar panels for homes"
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
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
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
              Switch to Affordable,{" "}
              <span className="text-primary">Eco-Friendly </span>Solar Energy
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Enjoy up to 90% savings on electricity with our residential solar
              solutions. We provide expert installation and support across Tamil
              Nadu.
            </p>
          </motion.div>

          {/* Lead Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-[40%]"
          >
            <LeadForm
              textColor="text-white"
              type="residential"
              title={"Get Your Free Quote"}
              description={""}
            />
          </motion.div>
        </div>
      </section>

      {/* <Features /> */}
      <div className="relative">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0  h-full skew-y-12"
          )}
        />
        <FeaturesSectionWithCardGradient />
      </div>

      {/* Installation Process */}
      <div className="relative overflow-hidden">
        <Timeline data={data} />
      </div>

      {/* Need for Solar */}
      <section className="relative flex flex-col items-center lg:flex-row ">
        {/* Left Side Image */}
        <div className="w-full h-full lg:w-1/2">
          <img
            src="https://www.soleosenergy.com/wp-content/uploads/2024/09/Solar-installation_web.jpg1_.webp"
            alt="Commercial Solar Panels"
            className=" shadow-lg object-cover w-full h-[70vh]"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full flex flex-col p-[5%]  lg:w-1/2 items-center bg-black/90 justify-center lg:h-[70vh] ">
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
          <ShootingStars
            starColor="#00FF9E"
            trailColor="#00B8FF"
            minSpeed={20}
            maxSpeed={40}
            minDelay={1500}
            maxDelay={3500}
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
              Need
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Need for Residential solar
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <ul className="mt-6 space-y-6 text-lg text-muted/90">
            <li className="flex items-start gap-4">
              <span>
                The growing demand for electricity, combined with frequent power
                outages, makes homeowners more dependent on the grid
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span>
                Environmental concerns, such as carbon footprints, make many
                homeowners look for cleaner energy options.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span>
                Solar power provides a solution by reducing dependence on grid
                electricity and lowering utility bills.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/60">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-4 pb-10 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">works</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              How It Works
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>
          <ol className="pl-6 space-y-4 text-lg list-decimal text-muted-foreground">
            <li>
              Solar Panels absorb sunlight and convert it into Direct Current
              (DC) electricity.
            </li>
            <li>
              Inverter: The DC electricity is converted to Alternating Current
              (AC), which is used to power household appliances.
            </li>
            <li>
              Net Metering: Excess energy generated during the day is sent back
              to the grid, and homeowners can receive credits to offset future
              bills.
            </li>
          </ol>
        </div>
      </section>

      {/* Uses of Solar */}
      <section className="w-full relative  p-[5%] gap-5 bg-black/90  flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 p-0 m-0">
          <Image
            src="/pattern-bg.png"
            alt="Residential Solar Installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <motion.div
          className="relative z-20 flex flex-col items-center gap-4 pb-10 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="text-white">
            Uses
          </Badge>
          <h2 className="max-w-2xl text-4xl font-extrabold text-white md:text-5xl ">
            Uses of Solar Energy
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
        </motion.div>
        <div className="container grid w-full grid-cols-1 gap-5 md:grid-cols-3 ">
          {uses.map((use, index) => (
            <motion.div
              key={use.title}
              className="flex flex-col items-center gap-4 pb-10 text-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-full" key={use.title}>
                <GlowEffect
                  colors={["#204D88", "#58b03f", "#048BCF", "#58b03f"]}
                  mode="static"
                  blur="medium"
                />
                <div className="relative h-full p-2 border rounded-3xl bg-white/80 dark:bg-white dark:text-black">
                  <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 70 70"
                    aria-label="MP Logo"
                    width="70"
                    height="70"
                    className="absolute w-8 h-8 bottom-4 right-4"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="3"
                      d="M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"
                    ></path>
                  </svg>

                  <div className="flex flex-col items-center justify-center gap-2 p-7 ">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{use.title}</h3>
                    </div>

                    <p className="text-sm leading-relaxed">{use.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Example Case Study */}
      <section className="pt-16 pb-[90%] lg:pb-32">
        <div className="container ">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Testimonials</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Customer Success Story
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <DemoOne />
        </div>
      </section>
    </div>
  );
}

const cards = testimonialData.ids.map((cardId: string, index: number) => {
  const details = testimonialData.details as TestimonialDetails;
  return (
    <TestimonialCard
      key={cardId}
      testimonial={details[cardId]}
      index={index}
      backgroundImage="https://images.unsplash.com/photo-1689443111287-5c2e129ec756?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
});

const DemoOne = () => {
  return (
    <div className="">
      {/* Example 1: Basic Carousel */}

      <Carousel items={cards} />
    </div>
  );
};
