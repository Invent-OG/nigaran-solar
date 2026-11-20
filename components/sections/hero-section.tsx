"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Battery, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { RotatingText } from "../ui/rotating-text";
import { GoogleReviewButton } from "../GoogleReviewButton";
import { useVideoLoader } from "../VideoLoaderProvider";

type HeroSectionProps = {
  onVideoLoad?: () => void;
};

export default function HeroSection({ onVideoLoad }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { handleVideoLoad } = useVideoLoader();

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-slate-900"
    >
      <div
        className="absolute inset-0 z-0 hero-background bg-cover bg-center"
        style={{ backgroundImage: "url('/videos/hero-poster.webp')" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/hero-poster.webp"
          onCanPlayThrough={handleVideoLoad}
          className="hidden md:block object-cover w-full h-full"
          preload="none"
          aria-label="Background video showing solar panels and renewable energy installations"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50" />
        {/* <AshParticles /> */}
      </div>

      <div className="container relative z-10 px-4 text-center md:px-6">
        <div className="flex flex-col items-center justify-center min-h-screen py-16">
          <div className="mb-4 font-medium text-white/80">
            <span className="inline-block pb-1 border-b-2 border-primary">
              Your Sun-Powered Future Starts Here
            </span>
          </div>

          <h1
            ref={headingRef}
            className="max-w-4xl mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            <div className="flex lg:flex-row flex-col items-center space-y-4 lg:space-x-4">
              <span className="text-6xl font-bold text-white">Powering</span>
              <RotatingText
                texts={["Tamil Nadu's", "Future", "with", "Clean", "Energy"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-white text-5xl overflow-hidden py-0.5 shadow-xl sm:py-1 md:py-2 justify-center rounded-lg min-w-[220px] sm:min-w-[260px] text-center"
                staggerFrom={"last"}
                initial={false}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.04}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 40, stiffness: 800 }}
                rotationInterval={6000}
              />
            </div>
          </h1>

          <p
            ref={textRef}
            className="max-w-2xl mb-8 text-lg md:text-xl text-white/90"
          >
            Providing Top-Quality Solar Systems for Homes, Businesses, and
            Industries in TamilNadu
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col justify-center gap-4 mb-10 sm:flex-row"
          >
            <Button
              size="lg"
              onClick={() => router.push("/landing")}
              className="group bg-[#15803d] hover:bg-[#166534] text-white font-semibold text-base px-6 py-6 shadow-lg shadow-green-900/40"
            >
              Get Free Solar Consultation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3">
            {[
              {
                icon: <Sun className="w-6 h-6" />,
                label: "25+ Years Warranty",
              },
              {
                icon: <Battery className="w-6 h-6" />,
                label: "90% Power Savings",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                label: "Expert Installation",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 text-white/80"
              >
                <div className="p-2 rounded-full bg-primary/20">
                  {feature.icon}
                </div>
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute z-10 -translate-x-1/2 bottom-8 left-1/2">
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center justify-center w-6 h-10 border-2 rounded-full border-white/30"
        >
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div> */}
        <GoogleReviewButton />
      </div>
    </section>
  );
}