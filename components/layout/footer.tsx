"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const footerLinks = {
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Legal", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Sustainability", href: "#" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <footer className="relative pt-40 pb-8 mt-[10%] text-white bg-black">
      {/* CONTACT SECTION (Top banner) */}
      <section className="absolute top-0  left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-6 sm:p-8 md:p-10 rounded-2xl w-[90%] max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6  shadow-lg">
        <Image
          src="/Solar_power.png"
          alt="Solar Panels"
          width={500}
          height={100}
          className="top-0 object-contain left -z-10 opacity-40 lg:absolute"
        />
        <div className="flex flex-col w-full gap-4 md:w-2/3">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Get in touch with our team of experts
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size={"lg"}
              variant={"secondary"}
              className="w-full sm:w-auto"
            >
              Contact us
            </Button>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white rounded-full">
                <PhoneCall className="text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm">Need any help</div>
                <div className="text-lg font-extrabold">+91 96007 15993</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <Image
            src="/contact-us.png"
            alt="Solar Panels"
            width={450}
            height={450}
            className="top-0 right-0 z-10 object-cover lg:absolute"
          />
        </div>
      </section>

      {/* FOOTER MAIN */}
      <div className="flex flex-col px-[15%] pt-4 ">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* COMPANY INFO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/nigaran-logo.png"
                alt="Nigaran Logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-bold">Nigaran Solar</span>
            </div>
            <p className="max-w-xs text-gray-400">
              Providing innovative solar solutions for homes and businesses.
              Committed to a sustainable future.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, idx) => (
                  <Link key={idx} href="#" aria-label="Social link">
                    <Icon className="w-5 h-5 text-gray-400 transition-colors hover:text-white" />
                  </Link>
                )
              )}
            </div>
          </motion.div>

          {/* LEGAL */}
          <motion.div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COMPANY */}
          <motion.div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/admin/login"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* RESOURCES */}
          <motion.div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* COPYRIGHT */}
        <motion.div className="pt-10 mt-10 text-center border-t border-white/10">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Nigaran Solar. All rights
            reserved.
          </p>
        </motion.div>
      </div>

      <Image
        src={"/Solar House.png"}
        alt={"Solar House"}
        width={300}
        height={300}
        className="absolute object-cover opacity-50 -right-20 -bottom-10 "
      />
    </footer>
  );
}
