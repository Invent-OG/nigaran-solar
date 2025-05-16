"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Leaf, BarChart3, Globe, Award } from "lucide-react";

interface ExpertiseCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}

const ExpertiseCard = ({
  icon,
  title,
  description,
  index,
}: ExpertiseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg h-[30vh] group">
        <a href="#" className="relative block p-8 no-underline bg-white">
          <div className="absolute h-[130px] w-[100px] bg-primary rounded-full top-[-75px] right-[-75px] z-0 transition-transform duration-500 group-hover:scale-[10]"></div>

          <div className="relative z-10">
            <div className=" font-bold text-[20px] mb-6 min-h-[57px] group-hover:text-white overflow-hidden">
              {title}
            </div>
            <div className=" text-[18px]">
              <span className="font-bold transition-colors duration-500 group-hover:text-white">
                {description}
              </span>
            </div>
          </div>
        </a>
        <div className="absolute -bottom-4 -left-10 opacity-40 group-hover:text-white text-primary">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const expertiseItems = [
    {
      icon: <Leaf className="w-28 h-28" />,
      title: "Environmentally Friendly",
      description:
        "Our solar solutions drastically reduce carbon footprint while providing sustainable energy for generations.",
    },
    {
      icon: <BarChart3 className="w-28 h-28" />,
      title: "Cost Maintenance",
      description:
        "Significant reduction in long-term energy costs, with minimal maintenance requirements for our systems.",
    },
    {
      icon: <Globe className="w-28 h-28" />,
      title: "Global Impact",
      description:
        "Join thousands of businesses worldwide contributing to a cleaner, more sustainable planet.",
    },
    {
      icon: <Award className="w-28 h-28" />,
      title: "Award-Winning Service",
      description:
        "Recognized for excellence in customer service and innovation in renewable energy solutions.",
    },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[#F3F9FF]">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Experts In The World
            <br />
            Of Solar Energy.
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
