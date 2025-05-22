"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { LinearProgressBar } from "../LinearProgressBar";
import { CircularProgressBar } from "../CircularProgressBar";

const metrics = [
  { title: "Project Completion", percent: 90 },
  { title: "Emission Reduction", percent: 75 },
];

export default function WhoWeAre() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/bg-pattern.png')] w-full bg-cover bg-center opacity-30"></div>

      <div className="container flex md:flex-row flex-col gap-10 justify-between md:p-[5%] p-[5%]">
        {/* Image Block */}
        <div className="relative flex">
          <Image
            src="https://images.unsplash.com/photo-1660330589257-813305a4a383?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Panels"
            width={500}
            height={500}
            className="rounded-xl z-10 w-[450px] h-[450px] border object-cover"
          />

          {/* Circular Progress */}
          <div className="absolute md:right-1/4 right-[55%] z-20 top-0">
            {/* <CircularProgress percent={85} label="Efficiency" /> */}
            <CircularProgressBar target={50} />
          </div>

          {/* Rotating Background Circle */}
          {/* <div className="animate-rotateLoop absolute -left-24 bottom-0 opacity-50 z-0">
            <Image
              src="/circle.png"
              alt="Rotating Circle"
              width={200}
              height={200}
              loading="lazy"
            />
          </div> */}

          {/* Overlapping Image */}
          <Image
            src="https://images.unsplash.com/photo-1719559519300-e9d2c2bf6de1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Panels Small"
            width={250}
            height={250}
            className="rounded-md z-20 absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] -bottom-20 -right-0 md:bottom-0 md:-right-1/4 bg-slate-500 border-8 border-popover object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="flex flex-col items-start gap-4 text-left">
            <Badge variant="outline">About us</Badge>
            <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">
              Who We Are
            </h2>
            <div className="w-20 h-1 mb-6 bg-primary"></div>
            <p className="text-lg text-muted-foreground text-justify mb-6">
              Nigaran Solar is a prominent solar energy provider in Coimbatore
              and throughout Tamil Nadu. Having extensive experience in solar
              panel installation and consultation, we provide efficient,
              reliable, and cost-effective solar energy solutions. Our systems
              assist in lowering electricity expenses, promoting energy
              self-sufficiency, and fostering a more sustainable future.
            </p>
          </div>

          {/* Progress Bars */}
          {/* <div className="w-full max-w-md space-y-6">
            {metrics.map(({ title, percent }, idx) => (
              <div key={title}>
                <span className="block text-sm font-semibold text-gray-800 mb-2">
                  {title}
                </span>
                <div className="w-full h-2 bg-black/10 rounded-full relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="h-full bg-primary rounded-full"
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
          </div> */}

          <LinearProgressBar target={80} />
          <div className="mt-6 z-20">
            <Button onClick={() => router.push("/about")}>Read more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// // CircularProgress Component (Optimized)
// function CircularProgress({
//   percent,
//   label,
// }: {
//   percent: number;
//   label: string;
// }) {
//   const radius = 40;
//   const stroke = 10;
//   const normalizedRadius = radius - stroke * 0.5;
//   const circumference = 2 * Math.PI * normalizedRadius;
//   const strokeDashoffset = circumference * (1 - percent / 100);

//   return (
//     <div className="absolute shadow-xl flex top-4 -left-6 z-30 p-5 rounded-md items-center gap-5 border-r-8 border-primary bg-white">
//       <svg height={radius * 2} width={radius * 2}>
//         <circle
//           stroke="#e5e7eb"
//           fill="transparent"
//           strokeWidth={stroke}
//           r={normalizedRadius}
//           cx={radius}
//           cy={radius}
//         />
//         <motion.circle
//           stroke="#58b33e"
//           fill="transparent"
//           strokeWidth={stroke}
//           strokeLinecap="round"
//           r={normalizedRadius}
//           cx={radius}
//           cy={radius}
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference}
//           whileInView={{ strokeDashoffset }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         />
//       </svg>
//       <div className="absolute top-1/2 left-16 transform -translate-x-1/2 -translate-y-1/2 text-sm font-semibold">
//         {percent}%
//       </div>
//       <div className="text-xl font-bold">{label}</div>
//     </div>
//   );
// }
