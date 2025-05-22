"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building2, Users } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// import { useRef } from "react";
// import { cn } from "@/lib/utils";
// import { Users, Briefcase, Building2 } from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// interface StatProps {
//   value: string;
//   metric: string;
//   suffix?: string;
//   delay?: number;
//   icon: React.ReactNode;
//   className?: string;
// }

// const StatCard = ({
//   value,
//   metric,
//   suffix,
//   delay = 0,
//   icon,
//   className,
// }: StatProps) => {
//   const numberRef = useRef<HTMLDivElement>(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div
//         className={cn(
//           "flex flex-col items-center text-center  z-20 relative bg-white hover:shadow-2xl shadow-md transition-all duration-500  py-10 rounded-2xl ",
//           className
//         )}
//       >
//         <div className="absolute opacity-30 -bottom-3 -left-5 text-primary ">
//           {icon}
//         </div>
//         <div
//           ref={numberRef}
//           className="mb-2 text-3xl font-extrabold text-primary md:text-6xl"
//         >
//           {value}
//         </div>
//         <div className="text-sm font-bold tracking-wide uppercase md:text-base">
//           {metric}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function StatsSection() {
//   return (
//     <section className="relative py-16 md:py-24 bg-primary px-[15%]">
//       <div className="">
//         <div className="z-20 grid grid-cols-1 gap-10 md:grid-cols-3">
//           <StatCard
//             value="1000+"
//             metric="Satisfied Customers"
//             icon={<Users size={100} />}
//             delay={0}
//           />
//           <StatCard
//             value="25+"
//             metric="Experienced Professionals"
//             icon={<Briefcase size={100} />}
//             delay={0.2}
//           />
//           <StatCard
//             value="500+"
//             metric="Clients across Industries"
//             icon={<Building2 size={100} />}
//             delay={0.4}
//           />
//         </div>
//         <Image
//           src="/windmill.svg"
//           alt="Solar Panels"
//           width={500}
//           height={500}
//           className="absolute bottom-0 right-0 z-10 object-cover"
//         />
//       </div>
//     </section>
//   );
// }

interface StatProps {
  value: string;
  metric: string;
  suffix?: string;
  index: number;
  icon: React.ReactNode;
  className?: string;
}

const StatCard = ({
  value,
  metric,
  suffix,
  index,
  icon,
  className,
}: StatProps) => {
  const numberRef = useRef<HTMLDivElement>(null);
  const delay = index * 0.2; // Delay based on index

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className={cn(
          "flex flex-col items-center text-center z-20 relative bg-white hover:shadow-2xl shadow-md transition-all duration-500 py-10 rounded-2xl",
          className
        )}
      >
        <div className="absolute opacity-30 -bottom-3 -left-5 text-primary">
          {icon}
        </div>
        <div
          ref={numberRef}
          className="mb-2 text-3xl font-extrabold text-primary md:text-6xl"
        >
          {value}
        </div>
        <div className="text-sm font-bold tracking-wide uppercase md:text-base">
          {metric}
        </div>
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  const stats = [
    {
      value: "1000+",
      metric: "Satisfied Customers",
      icon: <Users size={100} />,
    },
    {
      value: "25+",
      metric: "Experienced Professionals",
      icon: <Briefcase size={100} />,
    },
    {
      value: "500+",
      metric: "Clients across Industries",
      icon: <Building2 size={100} />,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-primary px-[15%]">
      <div className="z-20 grid grid-cols-1 gap-10 md:grid-cols-3">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            index={index}
            value={stat.value}
            metric={stat.metric}
            icon={stat.icon}
          />
        ))}
      </div>
      <Image
        src="/windmill.svg"
        alt="Solar Panels"
        width={500}
        height={500}
        className="absolute bottom-0 right-0 z-10 object-cover"
      />
    </section>
  );
}
