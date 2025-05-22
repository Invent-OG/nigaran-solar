"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const radius = 60;
const stroke = 10;
const normalizedRadius = radius - stroke * 0.5;
const circumference = normalizedRadius * 2 * Math.PI;

export default function AnimatedProgressBar() {
  const progress = useMotionValue(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 5,
      ease: "linear",
      onUpdate: (latest) => setDisplayProgress(Math.round(latest)),
    });

    return () => controls.stop();
  }, [progress]);

  const width = useTransform(progress, (value) => `${value}%`);
  const strokeDashoffset = useTransform(progress, (value) => {
    return circumference - (value / 100) * circumference;
  });

  return (
    <div className="w-full max-w-md mx-auto mt-10 space-y-10">
      {/* Linear Progress Bar */}
      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          style={{ width }}
        />
      </div>
      <div className="text-center font-medium text-sm text-gray-700">
        {displayProgress}%
      </div>

      {/* Circular Progress Bar */}
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
    </div>
  );
}
