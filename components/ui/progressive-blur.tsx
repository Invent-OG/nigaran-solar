"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import { ForwardedRef, forwardRef, CSSProperties } from "react";

export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  blurIntensity?: number;
  maskColor?: string; // new customizable color
  className?: string;
} & Omit<HTMLMotionProps<"div">, "ref">;

export const ProgressiveBlur = forwardRef(function ProgressiveBlur(
  {
    direction = "bottom",
    blurLayers = 3,
    blurIntensity = 0.25,
    maskColor = "255, 255, 255",
    className,
    ...props
  }: ProgressiveBlurProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const safeLayers = Math.min(Math.max(blurLayers, 2), 20);
  const segmentSize = 1 / (safeLayers + 1);

  const clamp = (val: number, min = 0, max = 1) =>
    Math.max(min, Math.min(val, max));

  return (
    <motion.div className={cn("relative", className)} ref={ref} {...props}>
      {Array.from({ length: safeLayers }).map((_, index) => {
        const angle = GRADIENT_ANGLES[direction];
        const gradientStops = [0, 1, 2, 3].map((offset) => {
          const pos = clamp((index + offset) * segmentSize);
          const alpha = offset === 1 || offset === 2 ? 1 : 0;
          return `rgba(${maskColor}, ${alpha}) ${pos * 100}%`;
        });

        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
          ", "
        )})`;

        return (
          <motion.div
            key={index}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={
              {
                maskImage: gradient,
                WebkitMaskImage: gradient,
                backdropFilter: `blur(${index * blurIntensity}px)`,
              } as CSSProperties
            }
          />
        );
      })}
    </motion.div>
  );
});
