import React from "react";
import { useId } from "react";
import {
  DollarSign,
  Leaf,
  Zap,
  Clock,
  TrendingDown,
  Globe,
  Home,
  Gift,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export function FeaturesSectionWithCardGradient() {
  // Map feature title to icon component
  const iconMap: Record<string, React.ElementType> = {
    "Cost Savings": DollarSign,
    Sustainability: Leaf,
    "Energy Independence": Zap,
    "Long-Term Investment": Clock,
    "Reduced Electricity Bills": TrendingDown,
    "Environmentally Friendly": Globe,
    "Increase in Property Value": Home,
    "Government Incentives": Gift,
  };

  return (
    <div className="container py-20 lg:py-30">
      <motion.div
        className="flex flex-col items-center gap-4 mb-6 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="outline">Benefits</Badge>
        <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
          The Benefits of Residential Solar Systems
        </h2>
        <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
      </motion.div>
      <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 md:gap-2 max-w-7xl">
        {grid.map((feature, index) => {
          const Icon = iconMap[feature.title] || Zap; // fallback icon

          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={feature.title}
            >
              <div
                key={feature.title}
                className="relative p-6 overflow-hidden bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white rounded-3xl"
              >
                <Grid size={20} />
                <div className="relative z-20 flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-primary dark:text-primary-light" />
                  <p className="text-base font-bold text-neutral-800 dark:text-white">
                    {feature.title}
                  </p>
                </div>
                <p className="relative z-20 mt-4 text-base font-normal text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Cost Savings",
    description:
      "Slash your monthly electricity bills and start saving from day one.",
  },
  {
    title: "Sustainability",
    description:
      "Solar power is a renewable resource that reduces your carbon footprint.",
  },
  {
    title: "Energy Independence",
    description: "With solar, you are less reliant on grid electricity.",
  },
  {
    title: "Long-Term Investment",
    description:
      "Our systems come with warranties and require minimal maintenance.",
  },
  {
    title: "Reduced Electricity Bills",
    description:
      "Solar systems can reduce energy costs by up to 80% or more, depending on energy consumption.",
  },
  {
    title: "Environmentally Friendly",
    description:
      "Solar energy is renewable and reduces the household's carbon footprint.",
  },
  {
    title: "Grid Cost Protection",
    description:
      "Homeowners rely less on the grid and avoid rising electricity costs.",
  },
  {
    title: "Increase in Property Value",
    description:
      "Homes with solar panels tend to sell at a higher value, making it a long-term investment.",
  },
  {
    title: "Government Incentives",
    description:
      "Many regions offer tax credits, rebates, and other incentives for residential solar installations, making it more affordable.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 w-full h-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-primary/30"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {(
            [
              ...new Set(
                squares.map(([x, y]: [number, number]) => `${x}-${y}`)
              ),
            ] as string[]
          ).map((key) => {
            const [x, y] = key.split("-").map(Number);
            return (
              <rect
                strokeWidth="0"
                key={key}
                width={width + 1}
                height={height + 1}
                x={x * width}
                y={y * height}
              />
            );
          })}
        </svg>
      )}
    </svg>
  );
}
