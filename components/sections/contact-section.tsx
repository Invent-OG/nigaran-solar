"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Contact form submitted");
  };

  return (
    <section className=" bg-primary text-primary-foreground w-[80%]">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Embrace a Sustainable Future?
            </h2>
            <p className="max-w-md mb-8 text-lg text-primary-foreground/90">
              Get in touch with our team of experts to discuss your energy needs
              and discover how we can help you transition to clean, renewable
              power.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md md:w-1/2"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center p-1 pl-4 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-primary-foreground placeholder:text-primary-foreground/60"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="rounded-full bg-primary-foreground text-primary"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
