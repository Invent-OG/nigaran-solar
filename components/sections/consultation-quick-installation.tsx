"use client";

import { motion } from "framer-motion";
import { Zap, Clock, ThumbsUp } from "lucide-react";

export function ConsultationQuickInstallation() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#58b03f_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container relative px-4 mx-auto md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl font-extrabold text-center md:text-5xl text-black/80">
            Quick Solar Installation
          </h2>
          <div className="w-20 h-1 mx-auto mt-6 mb-6 bg-[#58b03f]"></div>

          <div className="py-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block"
            >
              <h3 className="text-5xl font-black text-[#58b03f] md:text-7xl">
                1 Day.
              </h3>
            </motion.div>
            <p className="mt-2 text-xl font-medium text-neutral-600">
              That's all it takes.
            </p>
          </div>

          <p className="mx-auto max-w-[700px] text-neutral-600 md:text-xl/relaxed">
            Our certified installation teams deliver efficient rooftop solar
            systems executed with precision, cleanliness, and zero compromise on
            quality.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-16 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            {
              icon: Clock,
              title: "Rapid Deployment",
              desc: "From arrived to energized in a single day for most residential systems.",
            },
            {
              icon: Zap,
              title: "Precision Execution",
              desc: "Engineered workflows ensure every bolt and wire is perfect.",
            },
            {
              icon: ThumbsUp,
              title: "Zero Mess",
              desc: "We leave your roof and property exactly as clean as we found it.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="group p-6 rounded-2xl bg-white border border-neutral-100 hover:border-[#58b03f]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 rounded-full bg-neutral-50 shadow-sm group-hover:bg-[#58b03f]/10 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-neutral-700 group-hover:text-[#58b03f]" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900">
                  {item.title}
                </h4>
                <p className="text-neutral-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
