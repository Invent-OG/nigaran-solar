"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Home,
  Phone,
  ArrowRight,
  Sun,
  Zap,
  Shield,
} from "lucide-react";

export default function ThankYouPage() {
  const benefits = [
    {
      icon: Sun,
      title: "Expert Consultation",
      description: "Our solar expert will call you within 24 hours",
    },
    {
      icon: Zap,
      title: "Custom Solar Plan",
      description: "Receive a plan tailored to your energy needs",
    },
    {
      icon: Shield,
      title: "Free Site Survey",
      description: "Get a complimentary on-site evaluation",
    },
  ];

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-2xl w-full mx-auto text-center">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.1,
          }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/40">
              <CheckCircle2
                className="w-12 h-12 text-white"
                strokeWidth={2.5}
              />
            </div>
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black/80 mb-4 tracking-tight">
            You&apos;re All Set!
          </h1>
          <p className="text-lg text-slate-500 mb-2">
            Thank you for reaching out to{" "}
            <span className="text-primary font-semibold">Nigaran Solar</span>.
          </p>
          <p className="text-slate-400 text-base mb-10">
            We&apos;ve received your consultation request. Our team will get in
            touch with you shortly to discuss your solar journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
