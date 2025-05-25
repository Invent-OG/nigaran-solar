"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Everest Camp",
    description: "Experience the ultimate trek to the world's highest mountain",
    image:
      "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Annapurna",
    description: "Journey through the stunning landscapes of Nepal",
    image:
      "https://images.unsplash.com/photo-1635077637121-2f6013736f3d?q=80&w=3174&auto=format&fit=crop",
  },
  {
    title: "Inca Trail",
    description: "Ancient paths leading to Machu Picchu",
    image:
      "https://images.unsplash.com/photo-1609668192525-c9b9342a0d92?q=80&w=2913&auto=format&fit=crop",
  },
];

const Card = ({
  title,
  description,
  image,
  index,
  scrollYProgress,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
  scrollYProgress: any;
}) => {
  // Each card moves up by 100px * index as scroll progresses from 0 to 1
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100 * index]);

  // Slight scale effect for deeper cards
  const scale = useTransform(scrollYProgress, [0, 1], [1 - 0.05 * index, 1]);

  // To keep cards stacked visually
  const zIndex = cards.length - index;

  return (
    <motion.div
      style={{ y: translateY, scale, zIndex }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <div className="relative w-[90%] max-w-xl h-[500px] rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-end p-6">
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-white text-lg">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function CardsParallaxStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          {cards.map((card, index) => (
            <Card
              key={index}
              index={index}
              scrollYProgress={scrollYProgress}
              {...card}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
