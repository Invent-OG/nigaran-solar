"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowBigDown, ChevronDown } from "lucide-react";
import { Badge } from "../ui/badge";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionItems = [
    {
      title: "Fast Charging Capabilities",
      content:
        "Our stations provide ultra-fast charging for your EVs, cutting wait time dramatically and getting you back on the road sooner.",
    },
    {
      title: "Smart Charging Solutions",
      content:
        "We offer smart scheduling and real-time tracking, helping you optimize your energy usage and save costs.",
    },
    {
      title: "Flexible Charging Plans",
      content:
        "Choose from daily, weekly, or subscription-based plans to suit your unique travel and energy consumption needs.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="  pt-[5%] md:pb-[20%] pb-[80%] relative bg-white  ">
      <div className="absolute inset-0 z-0 bg-[url('/bg-pattern.png')] bg-cover bg-center opacity-30"></div>

      <Image
        src="/Wind-Power.png"
        alt="Solar Panels"
        width={500}
        height={500}
        className="absolute visible bottom-0 lg:right-0"
      />

      <div className="container flex flex-col items-center gap-10   justify-between z-40 lg:flex-row">
        {/* Left Image */}

        <div className="relative  w-full  z-10">
          {/* Half Circle Background */}
          <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-70 rounded-full bg-primary z-0"></div>

          {/* Image */}
          <Image
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80x&w=3516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Panels"
            width={500}
            height={500}
            className="rounded-md  bg-current object-cover relative z-10 lg:h-[50vh] lg:w-[50vw]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full flex flex-col justify-between my-auto gap-10 h-full   z-40">
          <motion.div
            className="flex flex-col items-start gap-4 text-left"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline"> Frequently Asked Questions</Badge>
            <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">
              Find answers to common questions about solar energy solutions
            </h2>
            <div className="w-20 h-1   bg-primary"></div>
          </motion.div>

          {/* Accordion Section */}
          <div className=" h-full space-y-2">
            {accordionItems.map((item, index) => (
              <div key={index} className="overflow-hidden ">
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`border rounded p-4 cursor-pointer font-semibold flex items-center justify-between transition-colors duration-300 ${
                    activeIndex === index
                      ? "border-primary text-black"
                      : "border-gray-200 bg-gray-100"
                  }`}
                >
                  <span>
                    {index + 1}. {item.title}
                  </span>
                  <span
                    className={`transform transition-all duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-green-600"
                        : "rotate-0"
                    }`}
                  >
                    <ChevronDown />
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-2 text-sm text-white bg-primary">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
