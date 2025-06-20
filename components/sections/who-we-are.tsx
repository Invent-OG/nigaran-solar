"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { memo } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const metrics = [
  { title: "Project Completion", percent: 90 },
  { title: "Emission Reduction", percent: 75 },
];

const WhoWeAre = () => {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden   py-[10%] bg-[#f8f8f8]">
      <div className="container flex flex-col justify-between gap-10 xl:flex-row">
        {/* Image Block */}
        <div className="relative flex">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/Home page/who we are.webp"
              alt="Nigaran Solar team members working on a solar installation project"
              width={500}
              height={500}
              loading="lazy"
              className="rounded-xl z-10 w-[450px] h-[450px] object-cover"
            />

            {/* Circular Progress */}
            <div className="absolute md:right-1/4 right-[55%] z-20 top-0">
              <CircularProgress percent={85} label="Efficiency" />
            </div>

            {/* Rotating Background Circle */}
            <div className="absolute bottom-0 z-0 opacity-50 animate-rotateLoop -left-24 md:-bottom-16">
              <Image
                src="/circle.png"
                alt="Decorative rotating circle background element"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>

            {/* Overlapping Image */}
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Close-up of solar panels capturing sunlight"
              width={250}
              loading="lazy"
              height={250}
              className="rounded-2xl z-20 absolute w-[200px] h-[200px] xl:w-[250px] xl:h-[250px] -bottom-20 -right-6 xl:-bottom-1/6 xl:-right-1/4 border-[#f8f8f8] border-8 object-cover"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-4 text-left"
          >
            <Badge variant="outline">About us</Badge>
            <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
              Who We Are
            </h2>
            <div className="w-20 h-1 mb-6 bg-primary"></div>
            <p className="mb-6 text-lg text-justify text-muted-foreground">
              Nigaran Solar is a prominent solar energy provider in Coimbatore
              and throughout Tamil Nadu. Having extensive experience in solar
              panel installation and consultation, we provide efficient,
              reliable, and cost-effective solar energy solutions. Our systems
              assist in lowering electricity expenses, promoting energy
              self-sufficiency, and fostering a more sustainable future.
            </p>
          </motion.div>

          {/* Progress Bars */}
          <div className="w-full max-w-md space-y-6">
            {metrics.map(({ title, percent }, idx) => (
              <div key={title}>
                <span className="block mb-2 text-sm font-semibold text-black/80">
                  {title}
                </span>
                <div className="relative w-full h-2 rounded-full bg-black/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="h-full rounded-full bg-primary"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.5, duration: 0.3 }}
                      className="absolute -top-7 right-0 text-[10px] text-white bg-primary px-2 py-0.5 rounded-sm"
                    >
                      {percent}%
                      <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-primary rotate-45 -z-10 translate-x-[-50%]" />
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="z-20 mt-6">
            <Button onClick={() => router.push("/about")}>Read more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// CircularProgress Component (Optimized)
const CircularProgress = memo(function CircularProgress({
  percent,
  label,
}: {
  percent: number;
  label: string;
}) {
  const radius = 40;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference * (1 - percent / 100);

  return (
    <div className="absolute z-30 flex items-center gap-5 p-5 bg-white border-r-8 shadow-xl top-4 -left-6 rounded-xl text-black/80 border-primary">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="#58b33e"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </svg>
      <div className="absolute text-sm font-semibold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-16">
        {percent}%
      </div>
      <div className="text-xl font-bold">{label}</div>
    </div>
  );
});

export default memo(WhoWeAre);