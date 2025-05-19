"use client";

import { useRef } from "react";
import { useTestimonials } from "@/lib/queries/testimonials";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, error } = useTestimonials();

  if (isLoading) {
    return <div className="py-16 text-center">Loading testimonials...</div>;
  }

  if (error) {
    return (
      <div className="py-16 text-center text-red-500">
        Error loading testimonials
      </div>
    );
  }

  const testimonials =
    data?.testimonials.map((t) => ({
      id: t.id,
      name: t.name,
      role: t.role,
      company: "Nigaran Solar",
      content: t.content,
      rating: 5,
      imageUrl: t.imageUrl,
      youtubeUrl: t.youtubeUrl,
    })) || [];

  return (
    <div>
      <AnimatedTestimonials
        title="What Our Customers Say"
        subtitle="Hear from our satisfied customers about their experience with Nigaran Solar's solutions and service."
        badgeText="Customer Reviews"
        testimonials={testimonials}
      />
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        className="elfsight-app-fe3c2b0c-5913-47c7-9b00-6121b3a4e40d"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
