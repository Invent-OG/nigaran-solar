"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, ShieldCheck, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RiCustomerService2Line } from "react-icons/ri";

export function ConsultationWhyChooseUs() {
  return (
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
                installation. Our friendly and responsive support team is always
                available to assist you — whether you have questions, need
                maintenance, or want to expand your solar system in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
