import HeroSection from "@/components/sections/hero-section";
import dynamic from "next/dynamic";

const LogosSlider = dynamic(
  () => import("@/components/sections/logos-slider").then((m) => m.LogosSlider),
  { ssr: true }
);
const StatsSection = dynamic(
  () => import("@/components/sections/stats-section"),
  { ssr: true }
);
const WhoWeAre = dynamic(() => import("@/components/sections/who-we-are"), {
  ssr: true,
});
const Feature108 = dynamic(
  () => import("@/components/ui/feature108").then((m) => m.Feature108),
  { ssr: true }
);
const ExpertiseSection = dynamic(
  () => import("@/components/sections/expertise-section"),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials-section"),
  { ssr: true }
);
const BlogSection = dynamic(() => import("@/components/sections/blog-section"), {
  ssr: true,
});
const FAQ = dynamic(() => import("@/components/sections/faq-section2"), {
  ssr: true,
});

export const metadata = {
  metadataBase: new URL("https://www.nigaran.in"),
  title: "Nigaran Solar – Trusted Solar Partner in Tamil Nadu",
  description:
    "Nigaran Solar offers top solar panel solutions in Coimbatore & Tamil Nadu for homes, businesses & housing societies. Book your free consultation today!",
  keywords:
    "solar energy, solar panel solutions in coimbatore, solar panels, solar power systems, residential solar, commercial solar, solar solutions Tamil Nadu, solar companies in TamilNadu",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogosSlider />
      <StatsSection />
      <WhoWeAre />
      <Feature108 />
      <ExpertiseSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQ />
    </>
  );
}
