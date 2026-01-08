"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function ConsultationExperience() {
  const features = [
    "Each project starts with a detailed energy check and roof inspection",
    "Our engineers design an efficient system for reliable power output",
    "A dedicated manager supports you through every project stage",
    "Certified materials and safe installation ensure long-term performance",
    "We handle approvals, grid connection, solar subsidy, and documentation end to end",
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-neutral-950 text-white">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#58b03f_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Green Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-left">
              <h2 className="text-4xl font-extrabold md:text-5xl text-white">
                The Nigaran Solar{" "}
                <span className="text-primary">Experience</span>
              </h2>
              <div className="w-20 h-1 mb-6 bg-primary"></div>
              <p className="max-w-[600px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe in making your transition to solar seamless and
                stress-free. Experience a world-class service tailored just for
                you.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 mt-1 text-primary shrink-0" />
                  <span className="text-lg text-neutral-300">{feature}.</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-neutral-900 border border-white/10 p-2">
              <div className="relative h-[400px] w-[350px] sm:h-[500px] sm:w-[450px] lg:h-[600px] lg:w-[500px] overflow-hidden rounded-xl">
                <Image
                  src="/Residential solar page/DJI_0452.webp"
                  alt="Nigaran Solar Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-8 right-8 bg-neutral-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center font-bold text-white text-xl shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    5+
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Years of Excellence
                    </p>
                    <p className="text-sm text-neutral-400">
                      Setting industry standards
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
