"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const metrics = [
  { title: "Project Completion", percent: 90 },
  { title: "Emission Reduction", percent: 75 },
];

export default function WhoWeAre() {
  const router = useRouter();
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0 bg-[url('/bg-pattern.png')] w-full bg-cover bg-center opacity-30"></div>

      <div className="container flex md:flex-row flex-col gap-10 justify-between md:p-[5%] p-[5%] ">
        {/* Image Block with Circular Bar */}
        <div className=" relative flex  ">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/about-us-img1.jpg"
              alt="Solar Panels"
              width={500}
              height={500}
              className="rounded-xl z-50  w-[450px] h-[450px] border bg-current object-cover"
            />
            {/* Circular Progress Bar */}

            <div className="absolute md:right-1/4 right-[55%] top-0">
              <CircularProgress percent={85} label="Efficiency" />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 4, // adjust rotation speed here
              }}
              style={{
                width: 200,
                height: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="absolute  -left-24 bottom-0 opacity-50 z-0"
            >
              <Image
                src="/circle.png"
                alt="Rotating Circle"
                width={200}
                height={200}
              />
            </motion.div>
          </motion.div>

          {/* Small Overlapping Image */}
          <Image
            src="/about-us-img2.jpg"
            alt="Solar Panels Small"
            width={500}
            height={500}
            className="rounded-md z-20 absolute md:w-[250px] w-[200px] h-[200px] md:h-[250px] -bottom-20 -right-0 md:bottom-0 md:-right-1/4 bg-slate-500 border-8 border-popover object-cover"
          />
        </div>

        {/* Text + Solar Metrics */}
        <div className="lg:w-1/2 flex flex-col ">
          {/* Heading Section */}
          <motion.div
            className="flex flex-col items-start gap-4 text-left"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline">About us</Badge>
            <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">
              Who We Are
            </h2>
            <div className="w-20 h-1  mb-6 bg-primary"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground text-justify mb-6">
              Nigaran Solar is a prominent solar energy provider in Coimbatore
              and throughout Tamil Nadu. Having extensive experience in solar
              panel installation and consultation, we provide efficient,
              reliable, and cost-effective solar energy solutions. Our systems
              assist in lowering electricity expenses, promoting energy
              self-sufficiency, and fostering a more sustainable future. Whether
              you require an on-grid, off-grid, or hybrid solar system, we
              customize our solutions to cater to your specific requirements.
            </p>
          </motion.div>

          {/* Framer Motion Progress Bars */}
          <div className="w-full max-w-md space-y-6">
            {metrics.map(({ title, percent }, idx) => (
              <div key={title}>
                <span className="block text-sm font-semibold text-gray-800 mb-2">
                  {title}
                </span>
                <div className="w-full h-2 bg-black/10 rounded-full relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 * idx,
                      ease: "easeInOut",
                    }}
                    className="h-full bg-primary rounded-full relative"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 * idx + 0.6,
                        duration: 0.3,
                      }}
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

          <div className="mt-6 z-20">
            <Button onClick={() => router.push("/about")}>Read more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// CircularProgress component
function CircularProgress({
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

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset,
      transition: { duration: 1, ease: "easeInOut" },
    });
  }, [strokeDashoffset, controls]);

  return (
    <div className="absolute shadow-xl flex top-4 -left-6 z-30 p-5 rounded-md items-center gap-5 border-r-8 border-primary bg-white">
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
          animate={controls}
        />
      </svg>
      <div className="absolute top-1/2 left-16 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold ">
        {percent}%
      </div>
      <div className="text-xl font-bold">{label}</div>
    </div>
  );
}
