"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const radius = 60;
const stroke = 10;
const normalizedRadius = radius - stroke * 0.5;

interface BarProps {
  target: number;
}

export function LinearProgressBar({ target }: BarProps) {
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

  const width = useTransform(progress, (value) => `${value}%`);

  return (
    <div className="space-y-2">
      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          style={{ width }}
        />
      </div>
      <div className="text-center font-medium text-sm text-gray-700">
        {displayProgress}%
      </div>
    </div>
  );
}
