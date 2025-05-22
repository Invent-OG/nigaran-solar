import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/stats-section";
import FutureSection from "@/components/sections/future-section";
import { Feature108 } from "@/components/ui/feature108";
import ExpertiseSection from "@/components/sections/expertise-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import BlogSection from "@/components/sections/blog-section";
import FAQSection from "@/components/sections/faq-section";
import { LogosSlider } from "@/components/sections/logos-slider";
import WhoWeAre from "@/components/sections/who-we-are";
import FAQ from "@/components/sections/faq-section2";
import AnimatedProgressBar from "@/components/AnimatedProgressBar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogosSlider />
      <StatsSection />
      {/* <WhoWeAre /> */}
      <AnimatedProgressBar />
      <Feature108 />
      <ExpertiseSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQ />
    </>
  );
}
