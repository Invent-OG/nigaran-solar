"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Users, Briefcase, Building2 } from "lucide-react";
import Image from "next/image";

interface StatProps {
  value: string;
  metric: string;
  suffix?: string;
  delay?: number;
  icon: React.ReactNode;
  className?: string;
}

const StatCard = ({
  value,
  metric,
  suffix,
  delay = 0,
  icon,
  className,
}: StatProps) => {
  const numberRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center  z-20 relative bg-white hover:shadow-2xl shadow-md transition-all duration-500  py-10 rounded-2xl ",
        className
      )}
    >
      <div className="absolute opacity-30 -bottom-3 -left-5 text-primary ">
        {icon}
      </div>
      <div
        ref={numberRef}
        className="mb-2 text-3xl font-extrabold text-primary md:text-6xl"
      >
        {value}
      </div>
      <div className="text-sm font-bold tracking-wide uppercase md:text-base">
        {metric}
      </div>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-primary px-[15%]">
      <div className="">
        <div className="z-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          <StatCard
            value="1000+"
            metric="Satisfied Customers"
            icon={<Users size={100} />}
            delay={0}
          />
          <StatCard
            value="25+"
            metric="Experienced Professionals"
            icon={<Briefcase size={100} />}
            delay={0.2}
          />
          <StatCard
            value="500+"
            metric="Clients across Industries"
            icon={<Building2 size={100} />}
            delay={0.4}
          />
        </div>
        <Image
          src="/windmill.svg"
          alt="Solar Panels"
          width={500}
          height={500}
          className="absolute bottom-0 right-0 z-10 object-cover"
        />
      </div>
    </section>
  );
}
