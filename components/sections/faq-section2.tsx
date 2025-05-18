"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowBigDown, ChevronDown } from "lucide-react";

export default function ChargingExperience() {
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
    <section className=" px-6 pt-[10%] pb-[20%] relative bg-white  ">
      <div className="absolute inset-0 z-0 bg-[url('/bg-pattern.png')] bg-cover bg-center opacity-30"></div>

      <div className="container flex flex-col items-center justify-between z-50 lg:flex-row">
        {/* Left Image */}

        <div className="relative  w-full mb-10 lg:w-1/2  lg:mb-0">
          <Image
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=3516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Panels"
            width={500}
            height={500}
            className="rounded-md  z-10 w-[400px] h-[400px] border bg-current  object-cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=3516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Panels"
            width={500}
            height={500}
            className="rounded-md  z-10 w-[250px] h-[250px] absolute -bottom-20 right-20 bg-slate-500  border-8 border-popover object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 z-50">
          <span className="font-medium text-green-600">About Us</span>
          <h2 className="mt-2 text-4xl font-bold leading-tight text-gray-900">
            We Provide Best Car <br /> Charging Experiences.
          </h2>
          <p className="mt-4 text-gray-600">
            Discover seamless and sustainable electric vehicle charging services
            designed for modern lifestyles.
          </p>

          {/* Accordion Section */}
          <div className="mt-8 space-y-3">
            {accordionItems.map((item, index) => (
              <div key={index} className="overflow-hidden">
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`border rounded p-4 cursor-pointer font-semibold flex items-center justify-between transition-colors duration-300 ${
                    activeIndex === index
                      ? "border-green-500 text-black"
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
