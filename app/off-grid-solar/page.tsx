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
  MapPin,
  Power,
  Lightbulb,
  Wifi,
  CloudOff,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Head from "next/head";

const images = [
  "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
  "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg",
  "https://images.pexels.com/photos/9875364/pexels-photo-9875364.jpeg",
];

export default function OffGridSolarPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Meta Information */}
      <Head>
        <title>
          Off-Grid Solar Power Systems in Tamil Nadu | Nigaran Solar{" "}
        </title>
        <meta
          name="description"
          content="Get complete energy freedom with off-grid solar from Nigaran
Solar. Perfect for rural areas & backup power—efficient, reliable, and
subsidy-ready."
        />
        <meta
          name="keywords"
          content="off-grid solar Tamil Nadu, off-grid solar system for home, solar,
rural solar solutions tamilnadu, off-grid solar panel installation, energy
independence solar, Nigaran off-grid solar"
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
                  alt={`Slide ${index + 1}`}
                  height={100}
                  width={100}
                  loading="lazy"
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
              <span className="text-primary">Off-Grid </span>Solar Solutions for
              Complete Energy Independence
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Experience true energy freedom with our self-reliant off-grid
              solar systems. Perfect for remote locations and areas with
              unreliable electricity.
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
              Off-Grid Solar
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl ">
              Complete Energy Independence
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <p className="max-w-4xl mx-auto text-center text-muted-foreground">
            For areas without reliable electricity, Nigaran Solar provides fully
            self-reliant off-grid solar systems. These include high-performance
            panels, solar battery backup, and smart inverters for a stable, 24/7
            power supply. Perfect for rural homes, farms, and remote facilities,
            our independent solar power solutions are built to withstand tough
            conditions and offer true energy freedom. Experience peace of mind
            with a system that delivers power whenever you need it—no grid
            required.
          </p>
        </div>
      </section>

      {/* Best Applications Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Best Applications</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Ideal For These Scenarios
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden transition-all bg-white shadow-lg rounded-xl hover:shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg"
                  alt="Farm"
                  height={100}
                  width={100}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <Home className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Farms and Agriculture Pumps
                </h3>
                <p className="text-muted-foreground">
                  Power irrigation systems and farm equipment in remote
                  agricultural settings without relying on grid electricity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden transition-all bg-white shadow-lg rounded-xl hover:shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg"
                  alt="Rural Home"
                  height={100}
                  width={100}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <Building className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Rural Homes and Resorts
                </h3>
                <p className="text-muted-foreground">
                  Provide reliable power to properties in remote locations where
                  grid connection is unavailable or prohibitively expensive.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full h-full overflow-hidden transition-all bg-white shadow-lg rounded-xl hover:shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  loading="lazy"
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg"
                  alt="Construction Site"
                  height={100}
                  width={100}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Construction Sites
                </h3>
                <p className="text-muted-foreground">
                  Temporary power solutions for construction projects in areas
                  without established electrical infrastructure.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="overflow-hidden transition-all bg-white shadow-lg rounded-xl hover:shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg"
                  alt="Remote Area"
                  loading="lazy"
                  height={100}
                  width={100}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Areas with Unreliable Electricity
                </h3>
                <p className="text-muted-foreground">
                  Regions experiencing frequent power outages or with poor
                  quality grid supply can benefit from off-grid independence.
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
          <Image
            loading="lazy"
            height={100}
            width={100}
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Off-Grid Solar Panels"
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
              Why Off-Grid Solar?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <ul className="mt-6 space-y-6 text-lg text-white/80">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 text-primary" />
              <span>
                Off-grid solar is ideal for locations where the electrical grid
                is unavailable or unreliable.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CloudOff className="w-6 h-6 mt-1 text-primary" />
              <span>
                Remote farms, villages, and businesses can benefit from off-grid
                systems as they provide continuous power, even during outages.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Power className="w-6 h-6 mt-1 text-primary" />
              <span>
                Areas with frequent power cuts or voltage fluctuations need
                stable, independent power sources.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Uses Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Applications</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Uses of Off-Grid Solar
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 transition-all bg-white border-l-4 rounded-lg shadow-lg hover:shadow-xl border-primary"
            >
              <h3 className="flex items-center gap-3 mb-4 text-2xl font-semibold">
                <MapPin className="w-6 h-6 text-primary" />
                Remote Locations
              </h3>
              <p className="text-muted-foreground">
                Perfect for rural homes, farms, and off-the-grid resorts where
                traditional power lines don&apos;t reach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 transition-all bg-white border-l-4 rounded-lg shadow-lg hover:shadow-xl border-primary"
            >
              <h3 className="flex items-center gap-3 mb-4 text-2xl font-semibold">
                <Battery className="w-6 h-6 text-primary" />
                Energy Storage
              </h3>
              <p className="text-muted-foreground">
                Solar power is stored in batteries for use at night or during
                cloudy weather, ensuring continuous power supply.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 transition-all bg-white border-l-4 rounded-lg shadow-lg hover:shadow-xl border-primary"
            >
              <h3 className="flex items-center gap-3 mb-4 text-2xl font-semibold">
                <Wifi className="w-6 h-6 text-primary" />
                Standalone Energy
              </h3>
              <p className="text-muted-foreground">
                Provides energy for lighting, appliances, and equipment in
                remote areas without any connection to the utility grid.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="relative py-16 text-lg bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4254160/pexels-photo-4254160.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="text-white">
              Advantages
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold text-white md:text-5xl">
              Benefits of Off-Grid Solar
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-white"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                icon: <Power className="w-10 h-10" />,
                title: "100% Energy Independence",
                description:
                  "Off-grid systems are not connected to the main electricity grid, so you have complete energy autonomy.",
              },
              {
                icon: <PiggyBank className="w-10 h-10" />,
                title: "Reduced Operational Costs",
                description:
                  "No electricity bills and no dependency on expensive generators or fuel.",
              },
              {
                icon: <Leaf className="w-10 h-10" />,
                title: "Eco-Friendly",
                description:
                  "Reduces reliance on diesel and other non-renewable energy sources.",
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Reliable Power",
                description:
                  "Provides consistent power even in remote or rural areas.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Components</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Components Included
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Sun className="w-10 h-10" />,
                title: "Solar Panels",
                description:
                  "High-efficiency panels that convert sunlight into electricity",
              },
              {
                icon: <Battery className="w-10 h-10" />,
                title: "Battery Bank",
                description:
                  "Lithium or Lead-Acid batteries to store energy for use when needed",
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Off-grid Inverter",
                description:
                  "Converts DC power from batteries to AC power for your appliances",
              },
              {
                icon: <Lightbulb className="w-10 h-10" />,
                title: "Charge Controller",
                description:
                  "Regulates the voltage and current coming from solar panels to the battery",
              },
            ].map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                  {component.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  {component.title}
                </h3>
                <p className="text-muted-foreground">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-16  lg:pb-52 pb-[80%] bg-black ">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pattern-bg.png"
            alt="Residential Solar Installation"
            fill
            className="object-cover"
          />
          <div className="absolute bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container relative z-40 inset-1">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="text-white">
              Features
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold text-white md:text-5xl">
              Key Features
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 transition-all bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Power className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  24/7 Power Independence
                </h3>
              </div>
              <p className="text-muted-foreground">
                Complete freedom from the grid with reliable power day and
                night, regardless of utility outages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 transition-all bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Optional Hybrid Model</h3>
              </div>
              <p className="text-muted-foreground">
                Can be combined with a generator for backup during extended
                periods of low sunlight.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 transition-all bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Scalable System</h3>
              </div>
              <p className="text-muted-foreground">
                Easily expandable to include additional loads as your energy
                needs grow over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
