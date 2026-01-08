"use client";

import { motion } from "framer-motion";
import { Landmark, Calculator, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ConsultationFinancing() {
  const options = [
    {
      icon: Landmark,
      title: "Bank Loan & Interest Support",
      description:
        "Assistance with bank tie-ups, transparent interest rates, and loan eligibility guidance.",
      color: "bg-blue-50 text-blue-600",
      delay: 0,
    },
    {
      icon: Calculator,
      title: "Flexible EMI Plans",
      description:
        "Help in choosing suitable EMI options based on tenure, monthly outflow, and budget.",
      color: "bg-green-50 text-green-600",
      delay: 0.1,
    },
    {
      icon: FileCheck,
      title: "End-to-End Assistance",
      description:
        "Complete support with documentation, approvals, and coordination with banks.",
      color: "bg-purple-50 text-purple-600",
      delay: 0.2,
    },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl font-extrabold text-center md:text-5xl text-black/80">
              Smart Financing Options
            </h2>
            <div className="w-20 h-1 mx-auto mt-6 mb-4 bg-primary"></div>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Making solar accessible for everyone. We help you navigate the
              financial aspect of your solar investment.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: option.delay, duration: 0.5 }}
              className="group relative flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary/10 transition-transform group-hover:scale-110 duration-300`}
              >
                <option.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                {option.title}
              </h3>

              <p className="text-neutral-500 leading-relaxed mb-6">
                {option.description}
              </p>

              {/* Decorative hovered border bottom */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-neutral-200">
            <p className="font-semibold text-neutral-900 mb-4">
              Want to calculate your savings?
            </p>
            <Link href="/solar-calculator">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                Try the Solar Calculator
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
