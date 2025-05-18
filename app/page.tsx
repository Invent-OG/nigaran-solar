import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/stats-section";
import FutureSection from "@/components/sections/future-section";
import { Feature108 } from "@/components/ui/feature108";
import ExpertiseSection from "@/components/sections/expertise-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import BlogSection from "@/components/sections/blog-section";
import FAQSection from "@/components/sections/faq-section";
import AnimationProvider from "@/components/animation-provider";
import ChargingExperience from "@/components/sections/faq-section2";
import { LogosSlider } from "@/components/sections/logos-slider";
import WhoWeAre from "@/components/sections/who-we-are";

export default function Home() {
  return (
    <AnimationProvider>
      <HeroSection />
      <LogosSlider />
      <StatsSection />
      <WhoWeAre />
      <Feature108 />
      <ExpertiseSection />
      <TestimonialsSection />
      <BlogSection />
      <ChargingExperience />
    </AnimationProvider>
  );
}
