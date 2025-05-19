"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionButtonProps = HTMLMotionProps<"button"> & {
  className?: string;
  children: React.ReactNode;
};

const MyButton = ({ className, children, ...props }: MotionButtonProps) => {
  const myRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="relative voltage-button">
      <motion.button
        ref={myRef}
        whileHover="hover"
        className={cn(
          "relative z-10 color-white bg-[#0D1127] px-12 py-4 rounded-full border-[5px] border-[#5978F3] text-[1.2rem] leading-none tracking-[0.075em] transition-colors duration-300 hover:bg-[#0F1C53]",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>

      {/* SVG Spark Lines */}
      <motion.svg
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute top-[-0.75em] left-[-0.25em] w-[calc(100%+0.5em)] h-[calc(100%+1.5em)] pointer-events-none"
        viewBox="0 0 234.6 61.3"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2"
              result="coloredBlur"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.075"
              numOctaves="0.3"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displace"
            />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="displace" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d={PATH1}
          className="voltage line-1"
          stroke="#f6de8d"
          strokeWidth="1"
          fill="transparent"
          filter="url(#glow)"
          strokeDasharray="100"
          animate={{ strokeDashoffset: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
        <motion.path
          d={PATH2}
          className="voltage line-2"
          stroke="#6bfeff"
          strokeWidth="1"
          fill="transparent"
          filter="url(#glow)"
          strokeDasharray="100"
          animate={{ strokeDashoffset: [500, -500] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </motion.svg>

      {/* Dots */}
      <motion.div
        className="absolute inset-0 dots"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        {DOTS.map(({ className, delay }, i) => (
          <motion.div
            key={i}
            className={cn(
              "dot absolute w-4 h-4 bg-white rounded-full",
              className
            )}
            initial={{ opacity: 0, scale: 0.2, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 0.4, 0.2],
              y: className.includes("bottom") ? [0, 24, 48] : [0, -24, -48],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

// Sparkline paths
const PATH1 =
  "M216.3 51.2c-3.7 0.1-7.3 0.2-11 0.3c-4.8 0.1-9.5 0.1-14.3-0.1c-2.6-0.1-5.2-0.2-7.9-0.5c-2.6-0.2-5.2-0.6-7.8-0.7c-3.2-0.1-6.5 0.1-9.7 0.2c-6.3 0.1-12.6 0.1-18.9 0.2c-4.8 0.1-9.7 0.2-14.5 0.3c-3.2 0.1-6.4 0.2-9.6 0.3c-2.3 0.1-4.7 0.1-7 0.1c-3.5 0.1-6.9 0.3-10.4 0.3c-2.4 0-4.7-0.2-7.1-0.4c-2.5-0.2-5-0.3-7.4-0.2c-3.5 0.2-6.9 0.6-10.4 0.7c-3.4 0.1-6.9 0.1-10.3 0.2c-5.8 0.1-11.6 0.2-17.4 0.2c-5.5 0-11.1-0.1-16.6-0.2c-3.6-0.1-7.3-0.3-10.9-0.5c-3.7-0.2-7.3-0.7-11-0.8c-3.7-0.1-7.4 0.1-11.1 0.2c-2.2 0.1-4.5 0.2-6.7 0.2c-1.7 0-3.3-0.1-5-0.2c-2.8-0.1-5.6-0.3-8.4-0.4c-3.4-0.1-6.8 0-10.2 0c-4.4 0.1-8.8 0.1-13.3 0.2c-4.2 0.1-8.4 0.2-12.7 0.3c-2.6 0.1-5.3 0.1-7.9 0.2c-0.6 0-1.3 0-1.9 0c-0.3 0-0.6 0-0.9 0c-0.2 0-0.5 0-0.7 0c-0.1 0-0.2 0-0.3 0c-0.1 0-0.1 0-0.2 0";

const PATH2 =
  "M216.3 52.1c-3.7 0-7.3 0.1-11 0.1c-4.8 0-9.5-0.2-14.3-0.2c-2.6 0-5.2 0.1-7.9 0.1c-2.6 0-5.2 0-7.8 0.1c-3.2 0-6.5 0.1-9.7 0.1c-6.3 0-12.6-0.1-18.9-0.2c-4.8-0.1-9.7-0.2-14.5-0.2c-3.2 0-6.4 0-9.6 0.1c-2.3 0-4.7 0-7 0c-3.5 0-6.9-0.1-10.4-0.2c-2.4 0-4.7 0.1-7.1 0.2c-2.5 0.1-5 0.3-7.4 0.4c-3.5 0.2-6.9 0.2-10.4 0.1c-3.4-0.1-6.9-0.4-10.3-0.6c-5.8-0.4-11.6-0.8-17.4-0.9c-5.5-0.1-11.1-0.2-16.6-0.1c-3.6 0-7.3 0.1-10.9 0.2c-3.7 0.1-7.3 0.2-11 0.3c-3.7 0.1-7.4 0.1-11.1 0.2c-2.2 0-4.5 0-6.7-0.1c-1.7 0-3.3-0.1-5-0.1c-2.8-0.1-5.6-0.2-8.4-0.3c-3.4-0.1-6.8-0.3-10.2-0.3c-4.4-0.1-8.8-0.1-13.3-0.2c-4.2-0.1-8.4-0.2-12.7-0.3c-2.6 0-5.3-0.1-7.9-0.1c-0.6 0-1.3 0-1.9 0c-0.3 0-0.6 0-0.9 0c-0.2 0-0.5 0-0.7 0c-0.1 0-0.2 0-0.3 0c-0.1 0-0.1 0-0.2 0";

// Dot positions and delays
const DOTS = [
  { className: "top-0 left-[20%]", delay: 0 },
  { className: "top-0 left-[55%]", delay: 0.5 },
  { className: "top-0 left-[80%]", delay: 1 },
  { className: "bottom-0 left-[30%]", delay: 2.5 },
  { className: "bottom-0 left-[65%]", delay: 1.5 },
];
