"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import LeadForm from "@/components/forms/lead-form";
import RippleBackground from "@/components/RippleBackground";
import { Building2, HomeIcon, Users2 } from "lucide-react";

export default function ConsultationPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [formType, setFormType] = useState<
    "residential" | "housing_society" | "commercial"
  >("residential");

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1463173904305-ba479d2123b7?q=80&w=3658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Save Money with Solar",
      description: "Reduce your monthly electricity bills with clean energy.",
    },
    {
      src: "https://images.unsplash.com/photo-1463173904305-ba479d2123b7?q=80&w=3658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Power Your Society",
      description:
        "Bring efficient and sustainable power to your entire community.",
    },
    {
      src: "https://images.unsplash.com/photo-1463173904305-ba479d2123b7?q=80&w=3658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Solar for Your Business",
      description:
        "Boost your bottom line with solar energy solutions for commercial spaces.",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative min-h-screen px-4 pb-[50%] pt-[20%] lg:py-[8%]  md:px-12 lg:px-20 overflow-hidden">
      <RippleBackground />

      <section className="container relative z-10 pb-20 mx-auto mt-12 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-start gap-10 lg:flex-row lg:gap-16"
        >
          {/* Carousel Section */}
          <div className="w-full lg:max-w-xl">
            <div className="mb-6 text-white">
              <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                Get Your Free Solar Consultation
              </h1>
              <p className="text-sm sm:text-base text-white/70">
                Fill out the form below and our experts will provide you with a
                customized solar solution.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, index) => (
                  <div
                    className="min-w-full relative h-48 sm:h-64 md:h-72 lg:h-[40vh]"
                    key={index}
                  >
                    <Image
                      src={slide.src}
                      alt={`Slide ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                    {/* Overlay Heading and Description */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/40 rounded-xl sm:p-6">
                      <h3 className="text-lg font-semibold text-white sm:text-xl">
                        {slide.heading}
                      </h3>
                      <p className="text-sm text-white/80 sm:text-base">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    selectedIndex === index ? "bg-white" : "bg-white/30"
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full text-white lg:max-w-xl">
            {/* Buttons */}
            <div className="flex flex-row gap-3 mb-6 sm:gap-4">
              <div
                onClick={() => setFormType("residential")}
                className={`cursor-pointer py-3 lg:px-4  w-full flex items-center justify-center gap-2 rounded-xl text-xs lg:text-sm sm:text-base transition ${
                  formType === "residential"
                    ? "bg-white text-black font-semibold"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <HomeIcon size={16} className="hidden lg:flex" /> Residential
              </div>
              <div
                onClick={() => setFormType("housing_society")}
                className={`cursor-pointer py-3 lg:px-4  w-full flex items-center justify-center gap-2 rounded-xl text-xs lg:text-sm sm:text-base transition ${
                  formType === "housing_society"
                    ? "bg-white text-black font-semibold"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Users2 size={16} className="hidden lg:flex" /> Housing Society
              </div>
              <div
                onClick={() => setFormType("commercial")}
                className={`cursor-pointer py-3 lg:px-4  w-full flex items-center justify-center gap-2 rounded-xl text-xs lg:text-sm sm:text-base transition ${
                  formType === "commercial"
                    ? "bg-white text-black font-semibold"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Building2 size={16} className="hidden lg:flex" /> Commercial
              </div>
            </div>

            {/* Dynamic Form */}
            {formType === "residential" && (
              <LeadForm
                type="residential"
                title="Residential Solar Solutions"
                description="Optimize your home's energy with our customized residential solar plans."
              />
            )}
            {formType === "housing_society" && (
              <LeadForm
                type="housing_society"
                title="Housing Society Solutions"
                description="Affordable solar solutions designed for housing societies and communities."
              />
            )}
            {formType === "commercial" && (
              <LeadForm
                type="commercial"
                title="Commercial Solar Plans"
                description="Efficient solar power options tailored for your commercial needs."
              />
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
