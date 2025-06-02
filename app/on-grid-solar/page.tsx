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
              <span className="text-primary">On-Grid </span>Solar Solutions for Modern Living
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Reduce your electricity bills with our grid-tied solar solutions. Perfect for homes and businesses connected to the utility grid.
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
              type="residential"
              title={"Get Your Free Quote"}
              description={""}
            />
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
              On-Grid Solar
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl ">
              Grid-Tied Solar Solutions
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <p className="text-muted-foreground text-center max-w-4xl mx-auto">
            An on-grid solar system is ideal for homes and businesses connected to
            the utility grid. Nigaran Solar's grid-tied solar solutions in Coimbatore
            offer the dual benefit of self-use and exporting surplus power through
            net metering solar policies. You'll receive credits for the energy you send
            back to the grid, significantly reducing your electricity bills. Our systems
            are built for seamless integration, with smart inverters and
            high-efficiency panels to ensure reliability and savings all year long.
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
            <Badge variant="outline">Ideal For</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Who Should Choose On-Grid?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
                  alt="City Home"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <Home className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">City-based Homeowners</h3>
                <p className="text-muted-foreground">
                  Perfect for urban residences with reliable grid connection, allowing you to reduce bills while staying connected to the utility grid.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg"
                  alt="Commercial Office"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <Building className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Commercial Offices</h3>
                <p className="text-muted-foreground">
                  Ideal for businesses with steady electricity access looking to reduce operational costs and enhance sustainability credentials.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg"
                  alt="School"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <School className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Schools and Colleges</h3>
                <p className="text-muted-foreground">
                  Educational institutions aiming to lower their carbon footprint while creating learning opportunities about renewable energy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Need Section */}
      <section className="relative flex flex-col items-center lg:flex-row ">
        {/* Left Side Image */}
        <div className="w-full h-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="On-Grid Solar Panels"
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
              Need
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Why Choose On-Grid Solar?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <ul className="mt-6 space-y-6 text-lg text-white/80">
            <li className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-primary mt-1" />
              <span>
                On-grid systems are ideal for people who want to reduce their electricity bills without the need for expensive battery storage.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <IndianRupee className="w-6 h-6 text-primary mt-1" />
              <span>
                The rising cost of electricity is forcing consumers to find more cost-effective energy solutions.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-primary mt-1" />
              <span>
                An on-grid solar system offers energy security with minimal maintenance.
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
            <Badge variant="outline">Applications</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Uses of On-Grid Solar
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Home className="h-6 w-6 text-primary" />
                Residential Power
              </h3>
              <p className="text-muted-foreground">
                Can be used for residential homes, providing clean energy for daily household needs while staying connected to the grid for backup and excess energy export.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-primary"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Building className="h-6 w-6 text-primary" />
                Commercial Power
              </h3>
              <p className="text-muted-foreground">
                Great for businesses and factories that can use most of their energy during the day when the sun is shining, maximizing direct consumption and ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Advantages</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Benefits of On-Grid Solar
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <PiggyBank className="h-10 w-10" />,
                title: "Affordable Setup",
                description: "On-grid systems are cheaper to install than off-grid systems because they don't require batteries."
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Net Metering Benefits",
                description: "Excess energy can be sent back to the grid, and users get credits or rebates on their electricity bills."
              },
              {
                icon: <Wrench className="h-10 w-10" />,
                title: "Low Maintenance",
                description: "On-grid systems have minimal maintenance as there are no batteries to manage or replace."
              },
              {
                icon: <ArrowRight className="h-10 w-10" />,
                title: "Quick ROI",
                description: "The installation costs are recouped quickly, and long-term savings can be enjoyed for 20+ years."
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

      {/* Technical Specs Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center mb-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Specifications</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Technical Specifications
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inverter Type</h3>
                <p className="text-muted-foreground">Grid-tied</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Warranty</h3>
                <p className="text-muted-foreground">5–10 years inverter, 25 years panels</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
                <p className="text-muted-foreground">Annual checkup, remote monitoring</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-2/3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Switch to Solar?
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Contact us today for a free consultation and quote for your on-grid solar system.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button size="lg" variant="secondary" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}