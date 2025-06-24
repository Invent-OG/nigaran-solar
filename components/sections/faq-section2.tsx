"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, PlugZap } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button"; // Assuming you have a Button component
import { PiSolarPanel, PiSolarPanelBold } from "react-icons/pi";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const accordionItems = [
    {
      title: "What is the process of installing solar panels in Tamil Nadu?",
      content:
        "The process typically includes a site survey & Proposal, Design & Development, Procurement and Installation, Commissioning & Connect to Grid. We assist you at each step, ensuring everything goes smoothly.",
    },
    {
      title: "How do I claim the solar government subsidy?",
      content:
        "You need to meet certain eligibility criteria. We help you with the application process to ensure you get the maximum subsidy available for your solar installation.",
    },
    {
      title: "Is it possible to install solar panels in an apartment?",
      content:
        "Yes, we provide solar solutions for apartments in Tamil Nadu. We customize the installation to meet your building’s requirements.",
    },
    {
      title: "How much money could I potentially save by using solar power?",
      content:
        "Depending on your current energy consumption, residential solar panels can save up to 90% on your electricity bill.",
    },
    {
      title: "What are the advantages of installing solar panels at home?",
      content:
        "Installing solar panels reduces electricity bills, increases energy independence, and promotes environmental sustainability. Solar energy is renewable, and government subsidies make the initial investment more affordable.",
    },
    {
      title: "How much space is needed for solar panel installation?",
      content:
        "On average, 100 square feet of roof space is needed for every 1kW of solar power. Homes with higher energy consumption may require more space.",
    },
    {
      title: "How long do solar panels last?",
      content:
        "Solar panels typically last 25-30 years. While efficiency may decrease slightly over time, most manufacturers offer warranties of 20-25 years.",
    },
    {
      title:
        "Are solar panel installations in Tamil Nadu eligible for government subsidies?",
      content:
        "Yes, both the Indian and Tamil Nadu state governments offer solar panel subsidies, significantly reducing installation costs. We’ll assist with eligibility and paperwork.",
    },
    {
      title:
        "How do I know if my home is suitable for solar panel installation?",
      content:
        "We look into the factors like roof orientation, shading, and the space available in your roof.",
    },
    {
      title: "Can solar panels be installed on a flat roof?",
      content:
        "Yes, solar panels can be installed on flat roofs at an optimal angle for maximum sunlight exposure.",
    },
    {
      title: "What is the payback period for a solar power plant?",
      content:
        "Typically, the payback period is between 3 and 7 years, after which you can enjoy free electricity for the remaining lifespan of the system.",
    },
    {
      title:
        "How do I get started with solar panel installation in Tamil Nadu?",
      content:
        "Contact us for a free consultation. We’ll assess your energy needs, provide a custom solution, and guide you through the installation process and available subsidies.",
    },
  ];

  const visibleItems = showAll ? accordionItems : accordionItems.slice(0, 3);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="lg:p-[5%] lg:pb-[10%] px-[2%] pb-[80%] pt-[10%] relative bg-white">
      <div className="absolute inset-0 z-0 bg-[url('/bg-pattern.png')] bg-cover bg-center opacity-30"></div>

      <div className="container flex flex-col gap-20 items-center justify-between z-40 lg:flex-row">
        {/* Left Image */}
        <div className="relative w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute lg:left-[-80px]   lg:top-1/2 lg:-translate-y-1/2 lg:w-[400px] lg:h-[400px] rounded-full  bg-primary z-0"></div>

            <div className="absolute  -bottom-10 translate-x-1/3  lg:hidden  h-[200px] w-[200px] rounded-full  bg-primary z-0"></div>
            <Image
              title="FAQ Illustration"
              src="/Home page/FAQ.webp"
              alt="Solar Panels"
              width={500}
              height={500}
              className="rounded-md  bg-current object-cover relative z-10 lg:h-[55vh] h-[30vh] lg:w-[30vw]"
            />
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="w-full flex flex-col justify-between  gap-10 h-full z-40">
          <motion.div
            className="flex flex-col items-start gap-4 text-left"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">Frequently Asked Questions</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Find answers to common questions about solar energy solutions
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </motion.div>

          {/* Accordion Section */}
          <div className="h-full z-40 space-y-5">
            {visibleItems.map((item, index) => (
              <div key={index} className="overflow-hidden select-none">
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`p-5 rounded cursor-pointer z-40 font-semibold flex items-center justify-between transition-colors duration-300 ${
                    activeIndex === index
                      ? "border-primary border text-black"
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
                      <div className="p-4 pt-2 text-sm">{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {!showAll ? (
              <div className="pt-4 text-center">
                <Button variant={"link"} onClick={() => setShowAll(true)}>
                  Show More
                </Button>
              </div>
            ) : (
              <div className="pt-4 text-center">
                <Button variant={"link"} onClick={() => setShowAll(false)}>
                  Show Less
                </Button>
              </div>
            )}
          </div>
          <PiSolarPanel
            className="text-primary lg:top-1/4 top-1/3 z-10 absolute opacity-30  -right-24"
            size={250}
          />
        </div>
      </div>
    </section>
  );
}
