import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { ReceiptIndianRupee } from "lucide-react";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { MdCorporateFare, MdOutlineEnergySavingsLeaf } from "react-icons/md";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Lower Energy Bills",
      description: "Reduce your monthly electricity costs significantly.",
      icon: <ReceiptIndianRupee className="w-10 h-10 text-primary" />,
    },
    {
      title: "Tax Advantages",
      description:
        "Utilize government incentives and rebates available for solar panel installation",
      icon: <HiOutlineReceiptTax className="w-10 h-10 text-primary" />,
    },
    {
      title: "Sustainability",
      description: "Improve your corporate image by adopting green energy.",
      icon: <MdCorporateFare className="w-10 h-10 text-primary" />,
    },
    {
      title: "Long-Term Savings",
      description:
        "Make a one-time investment that brings long-term financial benefits",
      icon: <MdOutlineEnergySavingsLeaf className="w-10 h-10 text-primary" />,
    },
  ];
  return (
    <div className="relative z-10 grid grid-cols-1 py-10 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="absolute inset-0 w-full h-full transition duration-200 opacity-0 pointer-events-none group-hover/feature:opacity-100 bg-gradient-to-t from-neutral-100 dark:from-primary to-transparent" />
      )}
      {index >= 4 && (
        <div className="absolute inset-0 w-full h-full transition duration-200 opacity-0 pointer-events-none group-hover/feature:opacity-100 bg-gradient-to-b from-neutral-100 dark:from-primary to-transparent" />
      )}
      <div className="relative z-10 px-10 mb-4 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 px-10 mb-2 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 w-1 h-6 transition-all duration-200 origin-center rounded-tr-full rounded-br-full group-hover/feature:h-8 bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary" />
        <span className="inline-block transition duration-200 group-hover/feature:translate-x-2 text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
