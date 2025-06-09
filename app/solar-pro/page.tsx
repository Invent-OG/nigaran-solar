"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Users,
  Wallet,
  Trophy,
  BadgeCheck,
  Home,
  Briefcase,
  DollarSign,
  ShieldCheck,
  Eye,
  Zap,
  Newspaper,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LeadForm from "@/components/forms/lead-form";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Head from "next/head";
import { Label } from "@radix-ui/react-label";

const images = [
  "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
  "https://images.pexels.com/photos/3560366/pexels-photo-3560366.jpeg",
  "https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg",
];

export default function SolarProPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Meta Information */}
      <Head>
        <title>
          Become a Solar Pro | Partner with Nigaran Solar | Solar Installer
          Program
        </title>
        <meta
          name="description"
          content="Join Nigaran Solar Pro Program - Our exclusive referral program.
Here you can earn rewards after every successful solar installation process that you refer."
        />
        <meta
          name="keywords"
          content="solar referral program, refer and earn solar, solar commission, earn
money from solar referrals, solar affiliate program, Nigaran Solar Pro"
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
                  className="object-cover w-full h-full"
                  width={1920}
                  height={1080}
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
              Become a <span className="text-primary">Nigaran Solar Pro</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Join our network of solar professionals and earn rewards while
              helping others transition to clean energy.
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-[40%] bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/30"
          >
            <h3 className="mb-4 text-xl font-semibold text-white">
              Join Our Network
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label className="my-2 text-white">First Name</Label>
                  <Input
                    placeholder="First Name"
                    className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
                  />
                </div>
                <div>
                  <Label className="mb-2 text-white">Last Name</Label>
                  <Input
                    placeholder="Last Name"
                    className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
                  />
                </div>
              </div>
              <Label className="mb-2 text-white">Email Address</Label>
              <Input
                type="email"
                placeholder="Email Address"
                className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
              />
              <Label className="mb-2 text-white">Phone Number</Label>
              <Input
                type="tel"
                placeholder="Phone Number"
                className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
              />
              <Label className="mb-2 text-white">Location</Label>
              <Input
                placeholder="Location"
                className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
              />
              <Label className="mb-2 text-white">Profession</Label>
              <Input
                placeholder="Profession"
                className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
              />
              <Label className="mb-2 text-white">Why Join</Label>
              <Textarea
                placeholder="Why do you want to join?"
                className="text-white border bg-white/20 backdrop-blur-sm border-white/30 placeholder-white/60"
              />
              <Button className="w-full text-black bg-white hover:bg-white/90">
                Submit Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Benefits</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Why Join Solar Pro?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Wallet className="w-8 h-8" />,
                title: "Earn Rewards",
                description:
                  "Attractive commissions for every successful referral",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Help Your Network",
                description: "Enable your community to save on energy costs",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Growth Opportunities",
                description: "Access to training and professional development",
              },
              {
                icon: <BadgeCheck className="w-8 h-8" />,
                title: "Expert Support",
                description: "Dedicated team to help you succeed",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center transition-shadow rounded-lg bg-card hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="relative flex flex-col items-center lg:flex-row">
        {/* Left Side Image */}
        <div className="w-full h-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Pro Network"
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
              Eligibility
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Who Can Join Solar Pro?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <ul className="mt-6 space-y-6 text-lg text-white/80">
            <li className="flex items-start gap-4">
              <Home className="w-6 h-6 mt-1 text-primary" />
              <span>
                <strong className="text-white">Homeowners or customers</strong>{" "}
                who&apos;ve already installed solar
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 mt-1 text-primary" />
              <span>
                <strong className="text-white">
                  Electricians, plumbers, and local service providers
                </strong>{" "}
                with customer networks
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Users className="w-6 h-6 mt-1 text-primary" />
              <span>
                <strong className="text-white">
                  Real estate agents and housing society managers
                </strong>{" "}
                with property connections
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Newspaper className="w-6 h-6 mt-1 text-primary" />
              <span>
                <strong className="text-white">Influencers or bloggers</strong>{" "}
                in the home improvement niche
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Process</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              How It Works
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Sign Up",
                description:
                  "Complete the registration form to join our network",
                icon: <Users className="w-10 h-10 text-primary" />,
              },
              {
                step: "02",
                title: "Refer",
                description: "Share solar benefits with your network",
                icon: <Zap className="w-10 h-10 text-primary" />,
              },
              {
                step: "03",
                title: "Earn",
                description: "Get rewarded for successful installations",
                icon: <DollarSign className="w-10 h-10 text-primary" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-md hover:bg-primary hover:text-white hover:shadow-xl group"
              >
                <div className="mb-4">{step.icon}</div>
                <div className="mb-4 text-4xl font-bold text-primary group-hover:text-white">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold group-hover:text-white">
                  {step.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white">
                  {step.description}
                </p>
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[url('/bg-pattern.png')] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Refer Section */}
      <section className="py-16 text-white bg-primary">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="text-white bg-white/10">
              Why Choose Us
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Why Refer with Nigaran Solar?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-white"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Trusted Brand",
                description:
                  "MNRE-approved solar company with 500+ successful installations",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Faster Conversions",
                description:
                  "Dedicated team ensures your leads are followed up professionally",
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: "Transparent Tracking",
                description:
                  "You'll be notified at every stage — from lead to installation",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Timely Payouts",
                description:
                  "Receive your commissions via UPI or bank transfer at right time",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 border rounded-lg bg-white/10 backdrop-blur-md border-white/20"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 text-white rounded-full bg-white/20">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Need</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Why We Need Solar Pro Referrals
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg"
            >
              <Image
                src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg"
                alt="Solar Pro Network"
                width={600}
                height={400}
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    As the solar energy market grows, more and more people are
                    looking to adopt renewable energy solutions.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    Many homeowners and businesses are interested in solar but
                    need trustworthy guidance.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    The Solar Pro Referral Program helps spread awareness about
                    solar energy while providing a way to earn commissions.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    This program taps into the potential for earning income from
                    helping others switch to a cleaner energy source.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Uses & Benefits Section */}
      <section className="py-16 pb-52 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Uses */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex flex-col items-start gap-4">
                <Badge variant="outline">Uses</Badge>
                <h2 className="text-3xl font-bold md:text-4xl text-black/80">
                  Uses of Solar Pro
                </h2>
                <div className="w-20 h-1 mb-6 bg-primary"></div>
              </div>

              <ul className="space-y-4">
                <li className="p-4 rounded-lg shadow-sm bg-card">
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    Referral Program
                  </h3>
                  <p className="text-muted-foreground">
                    Earn commissions by referring customers who install with
                    Nigaran Solar.
                  </p>
                </li>
                <li className="p-4 rounded-lg shadow-sm bg-card">
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    Income Opportunity
                  </h3>
                  <p className="text-muted-foreground">
                    Share solar benefits with your network and get paid.
                  </p>
                </li>
                <li className="p-4 rounded-lg shadow-sm bg-card">
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    Spread Awareness
                  </h3>
                  <p className="text-muted-foreground">
                    Promote the environmental and financial benefits of solar
                    power.
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col items-start gap-4">
                <Badge variant="outline">Benefits</Badge>
                <h2 className="text-3xl font-bold md:text-4xl text-black/80">
                  Benefits of Solar Pro
                </h2>
                <div className="w-20 h-1 mb-6 bg-primary"></div>
              </div>

              <ul className="space-y-4">
                <li className="p-4 rounded-lg shadow-sm bg-card">
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    Earn Passive Income
                  </h3>
                  <p className="text-muted-foreground">
                    Commission for every successful installation.
                  </p>
                </li>
                <li className="p-4 rounded-lg shadow-sm bg-card">
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    No Investment Required
                  </h3>
                  <p className="text-muted-foreground">Just refer and earn.</p>
                </li>
                <li className="p-4 rounded-lg shadow-sm bg-card">
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    Support Clean Energy
                  </h3>
                  <p className="text-muted-foreground">
                    Help build a sustainable future.
                  </p>
                </li>
                <li className="p-4 rounded-lg shadow-sm bg-card">
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    Flexible Earning Potential
                  </h3>
                  <p className="text-muted-foreground">
                    The more you refer, the more you earn.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
