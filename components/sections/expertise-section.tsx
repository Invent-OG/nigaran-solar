"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Leaf, BarChart3, Globe, Award, ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface ExpertiseCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}

const ExpertiseCardMobile = ({
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
      <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg h-full bg-white transition-all duration-500 group">
        <div className="relative block p-8 no-underline bg-white">
          <div className="absolute h-[130px] w-[100px] bg-primary rounded-full top-[-75px] right-[-75px] z-0 transition-transform duration-500 group-hover:scale-[10]"></div>

          <div className="relative z-10">
            <div className=" font-bold text-[20px] mb-6 min-h-[57px] group-hover:text-white overflow-hidden">
              {title}
            </div>
            <span className="font-bold transition-colors text-gray-500 duration-500 group-hover:text-white">
              {description}
            </span>
          </div>
        </div>
        <div className="absolute -bottom-4 -left-10 opacity-20 group-hover:text-white text-primary">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

const ExpertiseCard = ({
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
};

export default function ExpertiseSection() {
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
    <section ref={containerRef} className="p-[5%] relative  ">
      <div className="absolute inset-0 z-0 bg-[url('/bg-pattern.png')] bg-cover bg-center opacity-30"></div>

      <div className=" container px-4 space-x-4 space-y-16  mx-auto md:px-6">
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline">Our Features</Badge>
          <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl">
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
            className="absolute bottom-0 right-0 flex  justify-center"
          >
            <Image
              src="https://wallpapers.com/images/hd/renewable-energy-concept-earth-solar-panels-wind-turbines-02b8mz7vgrvw8ikq-02b8mz7vgrvw8ikq.jpg"
              alt=""
              width={100}
              height={100}
              className="h-[35%] w-[35%]"
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
}
