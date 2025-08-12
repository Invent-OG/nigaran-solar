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
import { useRouter } from "next/navigation";
const footerLinks = {
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Legal", href: "#" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "News", href: "/blog" },
  ],
  resources: [{ name: "Blog", href: "/blog" }],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <footer className="relative md:pt-40 pt-[60%] pb-8  text-white bg-black">
      {/* CONTACT SECTION (Top banner) */}
      <section className="absolute top-0  left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#58b33e] to-lime-700 text-primary-foreground p-6 sm:p-8 md:p-10 rounded-2xl w-[90%] max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6  shadow-lg">
        {/* <Image
          src="/Solar_power.png"
          alt="Solar Panels"
          width={500}
          height={100}
          className="top-0 hidden object-contain md:visible left -z-10 opacity-40 lg:absolute"
        /> */}
        <div className="flex flex-col w-full gap-4 md:w-2/3">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Get in touch with our team of experts
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size={"lg"}
              variant={"secondary"}
              className="w-full sm:w-auto"
              onClick={() => router.push("contact")}
            >
              Contact us
            </Button>
            <motion.div
              whileHover="ring"
              className="flex items-center gap-4 cursor-pointer"
            >
              <motion.div
                className="p-4 bg-white rounded-full"
                variants={{
                  ring: {
                    rotate: [0, -15, 15, -10, 10, -5, 5, 0], // shaking effect
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <PhoneCall className="text-primary" />
              </motion.div>

              <div className="text-left">
                <div className="text-sm">Need any help</div>
                <div className="text-lg font-extrabold">+91 96007 15993</div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <Image
            title="Contact us illustration"
            src="/contact-us.png"
            alt="Contact us illustration with customer service representative"
            width={450}
            height={450}
            className="top-0 right-0 z-10 object-cover lg:absolute"
          />
        </div>
      </section>

      {/* FOOTER MAIN */}
      <div className="flex flex-col lg:px-[15%] px-10 pt-4 ">
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
                title="Nigaran-Logo"
                src="/nigaran-logo.png"
                alt="Nigaran Solar company logo"
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
              <Link
                href="https://www.facebook.com/NigaranSolar"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 transition-colors hover:text-white" />
              </Link>

              <Link
                href="https://www.instagram.com/nigaransolar/"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 transition-colors hover:text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/nigaransolar/"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 transition-colors hover:text-white" />
              </Link>
              <Link
                href="https://www.youtube.com/@NigaranSolar"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 transition-colors hover:text-white" />
              </Link>
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
                <div
                  onClick={() =>
                    window.open("/admin/login", "_blank", "noopener,noreferrer")
                  }
                  className="text-gray-400 transition-colors cursor-pointer hover:text-white"
                >
                  Admin Login
                </div>
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
        <motion.div className="pt-10 mt-10 flex justify-center w-full  text-center border-t border-white/10">
          <p className="text-sm text-gray-400 w-full">
            &copy; {new Date().getFullYear()} Nigaran Solar. All rights
            reserved.
          </p>
          <Image
            title="Maven Advertising logo"
            src="/logo png (1).png"
            alt="Maven Advertising logo"
            width={200}
            height={200}
            className=" w-40  ml-4 object-contain"
          />
        </motion.div>
      </div>
    </footer>
  );
}
