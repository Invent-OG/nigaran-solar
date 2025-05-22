"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const radius = 60;
const stroke = 10;
const normalizedRadius = radius - stroke * 0.5;
const circumference = normalizedRadius * 2 * Math.PI;

interface BarProps {
  target: number;
}

export function CircularProgressBar({ target }: BarProps) {
  const progress = useMotionValue(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const controls = animate(progress, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayProgress(Math.round(latest)),
    });
    return () => controls.stop();
  }, [target]);

  const strokeDashoffset = useTransform(progress, (value) => {
    return circumference - (value / 100) * circumference;
  });

  return (
    <div className="flex justify-center items-center relative">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke="#3b82f6"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute text-lg font-semibold text-blue-600">
        {displayProgress}%
      </div>
    </div>
  );
}
