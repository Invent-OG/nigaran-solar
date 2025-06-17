"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Users,
  GraduationCap,
  Heart,
  CheckCircle,
  Zap,
  Award,
  BookOpen,
  Lightbulb,
  Coffee,
  Rocket,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import Head from "next/head";

const images = [
  "carrers/careers 2.webp",
  "carrers/careers 3.webp",
  "carrers/careers 4.webp",
];

export default function CareersPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["careers"],
    queryFn: async () => {
      const res = await fetch("/api/careers");
      if (!res.ok) throw new Error("Failed to fetch careers");
      return res.json();
    },
  });

  const router = useRouter();

  const careers = data || [];

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
                  height={600}
                  width={1200}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Join the Mission to Power India Sustainably
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Be part of a team that&apos;s revolutionizing India&apos;s energy
              landscape. We&apos;re looking for passionate individuals to join
              our mission.
            </p>
            {/* <Button size="lg" className="group">
              View Open Positions
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Open Positions
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Find your perfect role in our growing team
            </p>
          </motion.div>

          {isLoading ? (
            <div className="py-8 text-center">Loading open positions...</div>
          ) : error ? (
            <div className="py-8 text-center text-red-500">
              Error loading positions
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {careers.map(
                (
                  position: {
                    id: Key | null | undefined;
                    title:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                    location:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                    type:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                    salary:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                  },
                  index: number
                ) => (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 transition-shadow rounded-lg bg-card hover:shadow-lg"
                  >
                    <h3 className="mb-2 text-xl font-semibold">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                        {position.type}
                      </span>
                      {position.salary && (
                        <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                          {position.salary}
                        </span>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="group"
                      onClick={() =>
                        router.push(`/careers/apply/${position.id}`)
                      }
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* About Careers Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Careers</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Join Our Team
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute z-0 w-20 h-20 rounded-full -left-5 -top-5 bg-primary/20"></div>
              <div className="relative z-10">
                <Image
                  src="/carrers/Careers.webp"
                  alt="Team working together"
                  width={600}
                  height={400}
                  className="object-cover h-full rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute z-0 w-20 h-20 rounded-full -right-5 -bottom-5 bg-primary/20"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <p className="mb-6 text-lg text-muted-foreground">
                At Nigaran Solar, we believe in creating a brighter, cleaner,
                and more sustainable future—and we know it all starts with the
                right people. If you&apos;re passionate about renewable energy,
                innovation, and making a real impact, we invite you to join our
                growing team.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you&apos;re an experienced professional or just starting
                your career, we offer a dynamic work environment, ongoing
                learning, and the opportunity to be part of a mission-driven
                company that is transforming lives through solar energy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Why Choose Us</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Why Work with Nigaran Solar?
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Lightbulb className="w-10 h-10" />,
                title: "Make a Real Difference",
                description:
                  "By joining our team, you're contributing to something bigger—helping families, businesses, and communities switch to clean, renewable energy and reduce their carbon footprint.",
              },
              {
                icon: <Rocket className="w-10 h-10" />,
                title: "Grow with a Fast-Moving Industry",
                description:
                  "The solar energy sector is booming. As part of Nigaran Solar, you'll be at the forefront of this green energy revolution, with plenty of room for personal and professional growth.",
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Learn and Innovate",
                description:
                  "We foster a culture of continuous learning. You'll gain hands-on experience, work with modern technology, and learn from experienced mentors and experts in the solar energy field.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Positive Work Environment",
                description:
                  "We promote teamwork, transparency, and open communication. Your ideas and efforts are valued here. We work hard, celebrate wins, and support each other like family.",
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Attractive Perks and Benefits",
                description:
                  "We offer competitive salaries, performance incentives, flexible work culture (for eligible roles), and the satisfaction of working in a purpose-driven organization.",
              },
              {
                icon: <Coffee className="w-10 h-10" />,
                title: "Work-Life Balance",
                description:
                  "We understand the importance of balance. Our flexible policies help you manage your professional and personal commitments effectively.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 transition-shadow rounded-lg shadow-md bg-card hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="relative py-16 text-white bg-black">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="flex flex-col items-center gap-4 mb-12 text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="text-white border-white/30">
              Our Team
            </Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
              Who We&apos;re Looking For
            </h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
            <p className="max-w-3xl text-lg text-white/80">
              We are always on the lookout for passionate, skilled, and
              committed individuals to join our solar mission. Some roles we
              regularly hire for include:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Solar Sales Executives",
              "Installation Technicians",
              "Project Coordinators",
              "Site Survey Engineers",
              "Customer Support Executives",
              "Marketing & Content Specialists",
              "Finance & Admin Staff",
              "Interns & Fresh Graduates",
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 border rounded-lg bg-white/10 backdrop-blur-sm border-white/20"
              >
                <div className="p-2 rounded-full bg-primary/20">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <span>{role}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center text-white/80"
          >
            Whether you&apos;re in engineering, marketing, operations, or
            customer service—we may have a place for you!
          </motion.p>
        </div>
      </section>

      {/* Career Path & Growth Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="flex flex-col items-start gap-4 mb-6">
                <Badge variant="outline">Growth</Badge>
                <h2 className="text-3xl font-bold md:text-4xl text-black/80">
                  Career Path & Growth
                </h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>

              <p className="mb-6 text-lg text-muted-foreground">
                We don&apos;t just offer jobs—we help you build a career. At
                Nigaran Solar, your efforts are recognized, and performance is
                rewarded. We offer:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p>Regular skill development</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p>
                    Opportunities for internal promotions and leadership roles
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p>Guidance and mentorship from industry leaders</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute z-0 w-20 h-20 rounded-full -right-5 -top-5 bg-primary/20"></div>
              <div className="relative z-10 h-full">
                <Image
                  src="/carrers/Career path & growth.webp"
                  alt="Career growth"
                  width={600}
                  height={400}
                  className="object-cover h-full rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute z-0 w-20 h-20 rounded-full -left-5 -bottom-5 bg-primary/20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 pb-[80%] md:py-32  bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why Join Us?
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              We offer more than just a job - we offer a career with purpose
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Competitive Package",
                description:
                  "Attractive salary with performance bonuses and equity options",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Great Culture",
                description:
                  "Work with passionate people in a flexible environment",
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Learning & Growth",
                description:
                  "Regular training and career development opportunities",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Health Benefits",
                description:
                  "Comprehensive health insurance for you and family",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center rounded-lg bg-card"
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
    </div>
  );
}
