"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/forms/lead-form";
import { ConsultationWhyChooseUs } from "@/components/sections/consultation-why-choose-us";
import { ConsultationInstallationProcess } from "@/components/sections/consultation-installation-process";
import { ConsultationExperience } from "@/components/sections/consultation-experience";
import { ConsultationQuickInstallation } from "@/components/sections/consultation-quick-installation";
import { ConsultationFinancing } from "@/components/sections/consultation-financing";
import { Building2, HomeIcon, Users2 } from "lucide-react";

const formTypes = [
  {
    id: "residential" as const,
    label: "Residential",
    icon: HomeIcon,
    title: "Home Solar Solutions",
    description:
      "Customized solar plans to slash your home electricity bill and maximize savings.",
  },
  {
    id: "housing_society" as const,
    label: "Housing Society",
    icon: Users2,
    title: "Society Solar System",
    description:
      "Affordable, large-scale solar energy for entire communities and residential societies.",
  },
  {
    id: "commercial" as const,
    label: "Commercial",
    icon: Building2,
    title: "Commercial Solar Plans",
    description:
      "High-efficiency solar power designed to cut operational costs for your business.",
  },
];

const slides = [
  {
    src: "/consultaion/carousel/cdq march posters-19.webp",
    badge: "Save up to 90%",
    heading: "Slash Your Electricity Bill",
    description:
      "Generate clean energy from the sun and dramatically reduce your monthly costs.",
  },
  {
    src: "/consultaion/carousel/cdq march posters-20.webp",
    badge: "For Communities",
    heading: "Power Your Entire Society",
    description:
      "Bring sustainable, efficient energy to your whole housing community.",
  },
  {
    src: "/consultaion/carousel/cdq march posters-21.webp",
    badge: "Business Ready",
    heading: "Solar for Your Business",
    description:
      "Boost profitability with commercial-grade solar installations built for scale.",
  },
];

export default function ConsultationPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexMobile, setSelectedIndexMobile] = useState(0);
  const [activeForm, setActiveForm] = useState<
    "residential" | "housing_society" | "commercial"
  >("residential");

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApiMobile) return;
    const autoplay = setInterval(() => emblaApiMobile.scrollNext(), 5000);
    return () => clearInterval(autoplay);
  }, [emblaApiMobile]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollToMobile = useCallback(
    (index: number) => {
      if (emblaApiMobile) emblaApiMobile.scrollTo(index);
    },
    [emblaApiMobile],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApiMobile) return;
    const onSelect = () =>
      setSelectedIndexMobile(emblaApiMobile.selectedScrollSnap());
    emblaApiMobile.on("select", onSelect);
    onSelect();
  }, [emblaApiMobile]);

  const activeFormMeta = formTypes.find((f) => f.id === activeForm)!;

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* ─── HERO SECTION ─── */}
      <section className="relative lg:pb-10 ">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/On grid solar page/benefits.webp"
            alt="Solar Consultation Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-36 lg:pb-28">
          <div className="flex flex-col xl:flex-row items-start gap-8 xl:gap-16">
            {/* ── LEFT COLUMN ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 min-w-0 w-full "
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-primary border border-green-400/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white text-sm font-medium">
                  Free Expert Consultation
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
                Switch to Solar.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/90">
                  Start Saving Today.
                </span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed  max-w-xl">
                Tell us about your energy needs and our certified solar experts
                will design a custom plan — completely free.
              </p>

              {/* Carousel - desktop only */}
              <div className="hidden xl:block">
                <div
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  ref={emblaRef}
                >
                  <div className="flex">
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className="min-w-full relative h-52 sm:h-64 lg:h-92"
                      >
                        <Image
                          src={slide.src}
                          alt={slide.heading}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                            {slide.badge}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="text-white font-bold text-lg sm:text-xl leading-tight">
                            {slide.heading}
                          </h3>
                          <p className="text-white/75 text-sm mt-1">
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
                      aria-label={`Go to slide ${index + 1}`}
                      onClick={() => scrollTo(index)}
                      className={`rounded-full transition-all duration-300 ${
                        selectedIndex === index
                          ? "w-6 h-2.5 bg-green-400"
                          : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN – FORM ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="w-full min-w-0 xl:w-[480px] flex-shrink-0 overflow-hidden"
            >
              {/* Tab switcher */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-1.5 flex gap-1 mb-5">
                {formTypes.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveForm(id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeForm === id
                        ? "bg-gradient-to-r from-primary to-primary text-white shadow-lg shadow-primary/30"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon size={15} className="flex-shrink-0" />
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                ))}
              </div>

              {/* Animated Form */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeForm}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <LeadForm
                    type={activeForm}
                    title={activeFormMeta.title}
                    description={activeFormMeta.description}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Footer note */}
              <p className="text-center text-slate-400 text-xs mt-4">
                No spam. We respect your privacy.{" "}
                <span className="text-primary font-medium">100% Free.</span>
              </p>
            </motion.div>
            {/* Carousel - mobile only, shown below the form */}
            <div className="xl:hidden w-full">
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                ref={emblaRefMobile}
              >
                <div className="flex">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="min-w-full relative h-52 sm:h-64"
                    >
                      <Image
                        src={slide.src}
                        alt={slide.heading}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          {slide.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold text-lg sm:text-xl leading-tight">
                          {slide.heading}
                        </h3>
                        <p className="text-white/75 text-sm mt-1">
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
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => scrollToMobile(index)}
                    className={`rounded-full transition-all duration-300 ${
                      selectedIndexMobile === index
                        ? "w-6 h-2.5 bg-green-400"
                        : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BELOW FOLD SECTIONS ─── */}
      <div className="relative z-10 bg-white">
        <ConsultationWhyChooseUs />
      </div>
      <div className="relative z-10 bg-white">
        <ConsultationInstallationProcess />
      </div>
      <ConsultationExperience />
      <ConsultationQuickInstallation />
      <ConsultationFinancing />
    </div>
  );
}
