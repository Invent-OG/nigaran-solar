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
  Building,
  School,
  Lightbulb,
  IndianRupee,
} from "lucide-react";
import LeadForm from "@/components/forms/lead-form";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ShootingStars } from "@/components/ui/shooting-stars";

const onGridContent = {
  hero: {
    title: "On-Grid Solar Solutions for Modern Living",
    highlight: "On-Grid",
    description: "Reduce your electricity bills with our grid-tied solar solutions. Perfect for homes and businesses connected to the utility grid.",
  },
  intro: {
    badge: "On-Grid Solar",
    heading: "Grid-Tied Solar Solutions",
    paragraph: "An on-grid solar system is ideal for homes and businesses connected to the utility grid. Nigaran Solar's grid-tied solar solutions in Coimbatore offer the dual benefit of self-use and exporting surplus power through net metering solar policies. You'll receive credits for the energy you send back to the grid, significantly reducing your electricity bills. Our systems are built for seamless integration, with smart inverters and high-efficiency panels to ensure reliability and savings all year long.",
  },
  idealFor: {
    badge: "Ideal For",
    heading: "Who Should Choose On-Grid?",
    items: [
      {
        title: "City-based Homeowners",
        description: "Perfect for urban residences with reliable grid connection, allowing you to reduce bills while staying connected to the utility grid.",
        icon: "Home",
        imageAlt: "City Home",
        imageSrc: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      },
      {
        title: "Commercial Offices",
        description: "Ideal for businesses with steady electricity access looking to reduce operational costs and enhance sustainability credentials.",
        icon: "Building",
        imageAlt: "Commercial Office",
        imageSrc: "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg",
      },
      {
        title: "Schools and Colleges",
        description: "Educational institutions aiming to lower their carbon footprint while creating learning opportunities about renewable energy.",
        icon: "School",
        imageAlt: "School",
        imageSrc: "https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg",
      },
    ],
  },
  need: {
    badge: "Need",
    heading: "Why Choose On-Grid Solar?",
    items: [
      {
        icon: "Lightbulb",
        text: "On-grid systems are ideal for people who want to reduce their electricity bills without the need for expensive battery storage.",
      },
      {
        icon: "IndianRupee",
        text: "The rising cost of electricity is forcing consumers to find more cost-effective energy solutions.",
      },
      {
        icon: "ShieldCheck",
        text: "An on-grid solar system offers energy security with minimal maintenance.",
      },
    ],
  },
  uses: {
    badge: "Applications",
    heading: "Uses of On-Grid Solar",
    items: [
      {
        icon: "Home",
        title: "Residential Power",
        description: "Can be used for residential homes, providing clean energy for daily household needs while staying connected to the grid for backup and excess energy export.",
      },
      {
        icon: "Building",
        title: "Commercial Power",
        description: "Great for businesses and factories that can use most of their energy during the day when the sun is shining, maximizing direct consumption and ROI.",
      },
    ],
  },
  benefits: {
    badge: "Advantages",
    heading: "Benefits of On-Grid Solar",
    items: [
      {
        icon: "PiggyBank",
        title: "Affordable Setup",
        description: "On-grid systems are cheaper to install than off-grid systems because they don't require batteries.",
      },
      {
        icon: "Zap",
        title: "Net Metering Benefits",
        description: "Excess energy can be sent back to the grid, and users get credits or rebates on their electricity bills.",
      },
      {
        icon: "Wrench",
        title: "Low Maintenance",
        description: "On-grid systems have minimal maintenance as there are no batteries to manage or replace.",
      },
      {
        icon: "ArrowRight",
        title: "Quick ROI",
        description: "The installation costs are recouped quickly, and long-term savings can be enjoyed for 20+ years.",
      },
    ],
  },
  specs: {
    badge: "Specifications",
    heading: "Technical Specifications",
    items: [
      {
        icon: "Battery",
        title: "Inverter Type",
        description: "Grid-tied",
      },
      {
        icon: "ShieldCheck",
        title: "Warranty",
        description: "5–10 years inverter, 25 years panels",
      },
      {
        icon: "Wrench",
        title: "Maintenance",
        description: "Annual checkup, remote monitoring",
      },
    ],
  },
  cta: {
    heading: "Ready to Switch to Solar?",
    description: "Contact us today for a free consultation and quote for your on-grid solar system.",
    button: "Get Started",
  },
};

const images = [
  "https://images.pexels.com/photos/9875364/pexels-photo-9875364.jpeg",
  "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
  "https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg",
];

export default function OnGridSolarPage() {
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
                  alt={`Slide ${index + 1}`}
                  height={100}
                  width={100}
                  priority
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
              <span className="text-primary">{onGridContent.hero.highlight} </span>
              {onGridContent.hero.title.replace(`${onGridContent.hero.highlight} `, "")}
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              {onGridContent.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto space-y-6 text-lg">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="">
              {onGridContent.intro.badge}
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl ">
              {onGridContent.intro.heading}
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <p className="text-muted-foreground text-center max-w-4xl mx-auto">
            {onGridContent.intro.paragraph}
          </p>
        </div>
      </section>

      {/* Who Should Choose Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">{onGridContent.idealFor.badge}</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              {onGridContent.idealFor.heading}
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {onGridContent.idealFor.items.map((item, idx) => {
              const Icon = { Home, Building, School }[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y:  100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 ,delay: idx * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      priority
                      height={100}
                      width={100}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      {Icon && <Icon className="h-10 w-10 text-white" />}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Need Section */}
      <section className="relative flex flex-col items-center lg:flex-row ">
        {/* Left Side Image */}
        <div className="w-full h-full lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="On-Grid Solar Panels"
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
              {onGridContent.need.badge}
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              {onGridContent.need.heading}
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <ul className="mt-6 space-y-6 text-lg text-white/80">
            {onGridContent.need.items.map((item, idx) => {
              const Icon = { Lightbulb, IndianRupee, ShieldCheck }[item.icon];
              return (
                <li className="flex items-start gap-4" key={idx}>
                  {Icon && <Icon className="w-6 h-6 text-primary mt-1" />}
                  <span>{item.text}</span>
                </li>
              );
            })}
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
            <Badge variant="outline">{onGridContent.uses.badge}</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              {onGridContent.uses.heading}
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {onGridContent.uses.items.map((item, idx) => {
              const Icon = { Home, Building }[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary"
                >
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
      
      className="relative py-16 text-lg   bg-cover bg-center"
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
            <Badge variant="outline" className="text-white"> {onGridContent.benefits.badge}</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold text-white md:text-5xl">
              {onGridContent.benefits.heading}
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-white"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onGridContent.benefits.items.map((benefit, index) => {
              const Icon = { PiggyBank, Zap, Wrench, ArrowRight }[benefit.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon className="h-10 w-10" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-16 pb-32 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">{onGridContent.specs.badge}</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              {onGridContent.specs.heading}
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
              {onGridContent.specs.items.map((spec, idx) => {
                const Icon = { Battery, ShieldCheck, Wrench }[spec.icon];
                return (
                  <motion.div
                    key={spec.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {Icon && <Icon className="h-8 w-8 text-primary" />}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                    <p className="text-muted-foreground">{spec.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
    </div>
  );
}