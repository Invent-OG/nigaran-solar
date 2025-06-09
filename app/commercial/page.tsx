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
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { Badge } from "@/components/ui/badge";
import {
  HiBadgeCheck,
  HiCurrencyDollar,
  HiFastForward,
  HiOutlineFastForward,
  HiSupport,
} from "react-icons/hi";
import { Squares } from "@/components/ui/squares-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { BsFillBuildingsFill } from "react-icons/bs";

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

export default function CommercialPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Meta Information */}
      <Head>
        <title>
          Commercial Solar Solutions in Coimbatore & Tamil Nadu | Nigaran Solar
        </title>
        <meta
          name="description"
          content="Reduce energy costs and improve sustainability with commercial solar solutions from Nigaran Solar. We offer customized solar systems for businesses in Coimbatore and Tamil Nadu. Start saving today with solar energy."
        />
        <meta
          name="keywords"
          content="commercial solar solutions, business solar panels, solar power systems Tamil Nadu, solar rooftop installation Tamil Nadu, solar for businesses, solar panel for commercial use Coimbatore."
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
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-full"
                  priority={index === 0}
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
              Power Your Business with
              <span className="text-primary"> Commercial </span>Solar Energy
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Nigaran Solar offers scalable solar solutions that turn sunlight
              into long-term savings.
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
              type="commercial"
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
              commercial
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl ">
              Commercial Solar for Smarter Businesses
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

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
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="">
              Advantages
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl ">
              Advantages of Commercial Solar
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Why Choose Nigaran Solar */}
      <section className="relative flex flex-col items-center lg:flex-row ">
        {/* Left Side Image */}
        <div className="w-full h-full lg:w-1/2">
          <Image
            src="https://www.soleosenergy.com/wp-content/uploads/2024/09/Solar-installation_web.jpg1_.webp"
            alt="Commercial Solar Panels"
            width={1920}
            height={1080}
            className="shadow-lg object-cover w-full h-[70vh]"
            priority
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
              Why Choose
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Why Choose Nigaran Solar for Commercial Solar?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <ul className="mt-6 space-y-6 text-lg text-muted-foreground">
            <li className="flex items-start gap-4">
              <HiCurrencyDollar className="w-10 h-10 text-primary" />
              <span>
                <strong className="text-white">Cost Savings:</strong> Nigaran
                Solar helps businesses reduce electricity bills and achieve
                long-term savings with efficient solar solutions.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <HiSupport className="w-10 h-10 text-primary" />
              <span>
                <strong className="text-white">
                  Expert Installation & Support:
                </strong>{" "}
                Our certified technicians ensure professional solar installation
                and offer ongoing support for optimal performance.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <HiFastForward className="w-10 h-10 text-primary" />
              <span>
                <strong className="text-white">
                  Sustainability & Brand Image:
                </strong>{" "}
                Adopt sustainable energy to boost your business’s eco-friendly
                image and appeal to green-conscious customers.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <HiBadgeCheck className="w-10 h-10 text-primary" />
              <span>
                <strong className="text-white">Government Incentives:</strong>{" "}
                Maximize solar incentives and tax savings to reduce the initial
                investment and make solar more affordable for your business.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Uses Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto text-center">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="">
              Uses{" "}
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Uses of Commercial Solar
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 transition-transform duration-300 shadow-md rounded-xl hover:scale-105">
              <h3 className="mb-2 text-xl font-semibold text-primary">
                Powering Office Equipment
              </h3>
              <p className="text-muted-foreground">
                Solar can power everything from lights, air conditioning,
                computers, to machinery.
              </p>
            </div>
            <div className="p-6 transition-transform duration-300 shadow-md rounded-xl hover:scale-105">
              <h3 className="mb-2 text-xl font-semibold text-primary">
                Large-scale Manufacturing Operations
              </h3>
              <p className="text-muted-foreground">
                For industries, solar energy can replace grid electricity,
                reducing operational costs{" "}
              </p>
            </div>
            <div className="p-6 transition-transform duration-300 shadow-md rounded-xl hover:scale-105">
              <h3 className="mb-2 text-xl font-semibold text-primary">
                Cooling Systems
              </h3>
              <p className="text-muted-foreground">
                Solar energy can also run industrial cooling and ventilation
                systems, which can be a major energy drain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Commercial Solar is Needed */}
      <section className="relative py-16 bg-black/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pattern-bg.png"
            alt="Residential Solar Installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container relative mx-auto">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="text-white">
              Why Choose
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold text-white md:text-5xl">
              Why Do We Need Commercial Solar?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-4 ">
            <div className="flex flex-col items-center gap-4 p-5 text-center rounded-xl">
              <div className="p-5 rounded-full shadow-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary via-primary/10 to-primary">
                <Bolt className="w-16 h-16 text-white" />
              </div>
              <span className="text-muted-foreground">
                High electricity consumption in commercial buildings results in
                high operating costs.
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 p-5 text-center rounded-xl">
              <div className="p-5 rounded-full shadow-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary via-primary/10 to-primary">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <span className="text-muted-foreground">
                Energy price fluctuations and unreliable grid supply make
                businesses vulnerable to unpredictable costs and disruptions.
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 p-5 text-center rounded-xl">
              <div className="p-5 rounded-full shadow-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary via-primary/10 to-primary">
                <Leaf className="w-16 h-16 text-white" />
              </div>
              <span className="text-muted-foreground">
                Corporate sustainability goals are pushing businesses to adopt
                green energy solutions.
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 p-5 text-center rounded-xl">
              <div className="p-5 rounded-full shadow-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary via-primary/10 to-primary">
                <TrendingUp className="w-16 h-16 text-white" />
              </div>
              <span className="text-muted-foreground">
                Solar offers businesses the chance to lower energy costs while
                enhancing their green credentials.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-16 pb-52">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="">
              Benefits{" "}
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Business Benefits of Solar
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <ul className="pl-6 space-y-4 text-lg list-disc text-muted-foreground">
            <li>
              <strong>Cost Reduction:</strong> Solar reduces monthly electricity
              bills, offering businesses substantial savings on energy costs.
            </li>
            <li>
              <strong>Eco-Friendly:</strong> Solar energy helps reduce the
              carbon footprint, which enhances corporate image and appeals to
              eco-conscious customers.
            </li>
            <li>
              <strong>Energy Independence:</strong> Businesses reduce their
              reliance on the grid, protecting themselves from electricity price
              hikes and power cuts.
            </li>
            <li>
              <strong>Tax Benefits:</strong> Businesses can take advantage of
              government rebates, tax credits, and accelerated depreciation for
              solar installations.
            </li>
            <li>
              <strong>Increased Property Value:</strong> : Solar can increase
              the market value of commercial properties, making it a long-term
              investment
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
