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
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
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
      {/* Meta Information */}
      <Head>
        <title>
          Join Our Team | Careers at Nigaran Solar | Solar Jobs in India
        </title>
        <meta
          name="description"
          content="Explore exciting solar energy careers with Nigaran Solar. Join a leading solar company in India and make a difference in the clean energy revolution.
  "
        />
        <meta
          name="keywords"
          content="Contact Nigaran Solar, solar consultation, solar energy Coimbatore, solar panel installation Coimbatore, get free solar consultation, solar installation Tamil Nadu"
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

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Mission to Power India Sustainably
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Be part of a team that&apos;s revolutionizing India&apos;s energy
              landscape. We&apos;re looking for passionate individuals to join
              our mission.
            </p>
            <Button size="lg" className="group">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-5 -top-5 w-20 h-20 bg-primary/20 rounded-full z-0"></div>
              <div className="relative z-10">
                <Image
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                  alt="Team working together"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover h-full"
                />
              </div>
              <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-primary/20 rounded-full z-0"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <p className="text-lg text-muted-foreground mb-6">
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
            className="flex flex-col items-center gap-4 text-center mb-12"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-10 w-10" />,
                title: "Make a Real Difference",
                description:
                  "By joining our team, you're contributing to something bigger—helping families, businesses, and communities switch to clean, renewable energy and reduce their carbon footprint.",
              },
              {
                icon: <Rocket className="h-10 w-10" />,
                title: "Grow with a Fast-Moving Industry",
                description:
                  "The solar energy sector is booming. As part of Nigaran Solar, you'll be at the forefront of this green energy revolution, with plenty of room for personal and professional growth.",
              },
              {
                icon: <BookOpen className="h-10 w-10" />,
                title: "Learn and Innovate",
                description:
                  "We foster a culture of continuous learning. You'll gain hands-on experience, work with modern technology, and learn from experienced mentors and experts in the solar energy field.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Positive Work Environment",
                description:
                  "We promote teamwork, transparency, and open communication. Your ideas and efforts are valued here. We work hard, celebrate wins, and support each other like family.",
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Attractive Perks and Benefits",
                description:
                  "We offer competitive salaries, performance incentives, flexible work culture (for eligible roles), and the satisfaction of working in a purpose-driven organization.",
              },
              {
                icon: <Coffee className="h-10 w-10" />,
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
                className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="relative py-16 bg-black text-white">
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
            className="flex flex-col items-center gap-4 text-center mb-12"
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
            <p className="text-lg text-white/80 max-w-3xl">
              We are always on the lookout for passionate, skilled, and
              committed individuals to join our solar mission. Some roles we
              regularly hire for include:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex items-center gap-3"
              >
                <div className="p-2 rounded-full bg-primary/20">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <span>{role}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-white/80 mt-8"
          >
            Whether you&apos;re in engineering, marketing, operations, or
            customer service—we may have a place for you!
          </motion.p>
        </div>
      </section>

      {/* Career Path & Growth Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

              <p className="text-lg text-muted-foreground mb-6">
                We don&apos;t just offer jobs—we help you build a career. At
                Nigaran Solar, your efforts are recognized, and performance is
                rewarded. We offer:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p>Regular skill development</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p>
                    Opportunities for internal promotions and leadership roles
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 mt-1 rounded-full bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
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
              <div className="absolute -right-5 -top-5 w-20 h-20 bg-primary/20 rounded-full z-0"></div>
              <div className="relative z-10 h-full">
                <Image
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="Career growth"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover h-full"
                />
              </div>
              <div className="absolute -left-5 -bottom-5 w-20 h-20 bg-primary/20 rounded-full z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find your perfect role in our growing team
            </p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-8">Loading open positions...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">
              Error loading positions
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {position.location}
                      </span>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                      {position.salary && (
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {position.salary}
                        </span>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="group"
                      onClick={() =>
                        router.push(`/careers/${position.id}/apply`)
                      }
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Join Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Competitive Package",
                description:
                  "Attractive salary with performance bonuses and equity options",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Great Culture",
                description:
                  "Work with passionate people in a flexible environment",
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Learning & Growth",
                description:
                  "Regular training and career development opportunities",
              },
              {
                icon: <Heart className="h-8 w-8" />,
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
                className="bg-card rounded-lg p-6 text-center"
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

      {/* Join the Solar Movement Section */}
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
                Join the Solar Movement
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                At Nigaran Solar, we don&apos;t just work—we create change. Come
                be a part of something meaningful. Help us light up homes,
                empower communities, and shape a greener tomorrow. Apply now and
                let&apos;s build the future together.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button size="lg" variant="secondary" className="group">
                Send Resume
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
