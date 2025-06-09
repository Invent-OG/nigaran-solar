"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Leaf, BarChart3, Globe, Award } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { memo } from "react";

interface ExpertiseCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}

const ExpertiseCardMobile = memo(({
  icon,
  title,
  description,
  index,
}: ExpertiseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden rounded-lg p-8 shadow-lg h-full bg-white transition-all duration-500 group">
        <div className="absolute h-[130px] w-[100px] bg-primary rounded-full top-[-75px] right-[-75px] z-0 transition-transform duration-500 group-hover:scale-[10]"></div>

        <div className="relative z-10">
          <div className="font-bold text-[20px] flex mb-5 gap-2 items-center min-h-[57px] group-hover:text-white overflow-hidden">
            <div className="bg-primary rounded-full">{icon}</div>
            {title}
          </div>
          <span className="transition-colors text-gray-500 duration-500 group-hover:text-white">
            {description}
          </span>
        </div>
      </div>
    </motion.div>
  );
});

ExpertiseCardMobile.displayName = "ExpertiseCardMobile";

const ExpertiseCard = memo(({
  icon,
  title,
  description,
  index,
}: ExpertiseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-center flex flex-col gap-2 items-center max-w-xs justify-center">
        <div className="bg-primary p-5 rounded-full text-white">{icon}</div>
        <div className="font-bold text-xl"> {title}</div>
        <div className="text-md text-gray-500"> {description}</div>
      </div>
    </motion.div>
  );
});

ExpertiseCard.displayName = "ExpertiseCard";

const ExpertiseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const expertiseItemsDesktop1 = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Environmentally Friendly",
      description:
        "Our solar solutions drastically reduce carbon footprint while providing sustainable energy for generations.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Cost Maintenance",
      description:
        "Significant reduction in long-term energy costs, with minimal maintenance requirements for our systems.",
    },
  ];

  const expertiseItemsDesktop2 = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Impact",
      description:
        "Join thousands of businesses worldwide contributing to a cleaner, more sustainable planet.",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Award-Winning Service",
      description:
        "Recognized for excellence in customer service and innovation in renewable energy solutions.",
    },
  ];

  const expertiseItems = [
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Environmentally Friendly",
      description:
        "Our solar solutions drastically reduce carbon footprint while providing sustainable energy for generations.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Cost Maintenance",
      description:
        "Significant reduction in long-term energy costs, with minimal maintenance requirements for our systems.",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Impact",
      description:
        "Join thousands of businesses worldwide contributing to a cleaner, more sustainable planet.",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Award-Winning Service",
      description:
        "Recognized for excellence in customer service and innovation in renewable energy solutions.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="lg:p-[5%] px-[2%] py-[10%] relative text-black/80 "
    >
      <div className="absolute inset-0 z-0 bg-[url('/bg-pattern.png')] bg-cover bg-center opacity-30"></div>

      <div className=" container ">
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline">Our Features</Badge>
          <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
            {" "}
            Experts In The World
            <br />
            Of Solar Energy.
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
        </motion.div>
        <div className="md:flex relative flex-col hidden justify-between gap-24 w-full ">
          <div className="flex justify-between px-[10%] w-full">
            {expertiseItemsDesktop1.map((item, index) => (
              <ExpertiseCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
          <div className="flex justify-between px-[2%] w-full ">
            {expertiseItemsDesktop2.map((item, index) => (
              <ExpertiseCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
            className="absolute bottom-0 right-0 flex justify-center"
          >
            <Image
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
              alt="Renewable energy concept"
              width={400}
              height={300}
              className="h-[35%] w-[35%] object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-5 lg:hidden md:hidden">
          {expertiseItems.map((item, index) => (
            <ExpertiseCardMobile
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
};

export default memo(ExpertiseSection);