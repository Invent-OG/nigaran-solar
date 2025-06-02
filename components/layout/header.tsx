"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Calculator,
  Briefcase,
  Sun,
  Building,
  DollarSign,
  Newspaper,
  ShieldCheck,
  HomeIcon,
  Zap,
  Battery,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import type { LucideIcon } from "lucide-react";

interface NavSubItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  submenu?: NavSubItem[];
}

// Add icons to submenu items
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "#",
    submenu: [
      { label: "Residential Solar", href: "/residential", icon: Sun },
      { label: "Commercial Solar", href: "/commercial", icon: Building },

      { label: "Housing society", href: "/housing-society", icon: HomeIcon },

      // { label: "Solar Subsidy", href: "/subsidy", icon: DollarSign },
    ],
  },
  {
    label: "Services",
    href: "#",
    submenu: [
       { label: "On-Grid Solar", href: "/on-grid-solar", icon: Zap },
      { label: "Off-Grid Solar", href: "/off-grid-solar", icon: Battery },
    ]
  },
  
  { label: "Contact", href: "/contact" },
  {
    label: "More",
    href: "#",
    submenu: [
      { label: "Careers", href: "/careers", icon: Briefcase },
      { label: "Solar Pro", href: "/solar-pro", icon: ShieldCheck },
      { label: "Blog", href: "/blog", icon: Newspaper },
      {
        label: "Solar Calculator",
        href: "/solar-calculator",
        icon: Calculator,
      },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSubmenus, setExpandedSubmenus] = useState<
    Record<string, boolean>
  >({});
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleSubmenu = (label: string) => {
    setExpandedSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="text-xl font-bold flex items-center">
            <Image src="/nigaran-logo.png" alt="" width={50} height={50} />
            <span
              className={cn(
                "ml-2",
                (!isScrolled && pathName === "/") ||
                  (!isScrolled && pathName === "/consultation")
                  ? "text-white"
                  : ""
              )}
            >
              Nigaran Solar
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group flex items-center space-x-1"
            >
              {item.icon && (
                <item.icon className="w-4 h-4 text-foreground/80" />
              )}
              <Link
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors font-medium",
                  (!isScrolled && pathName === "/") ||
                    (!isScrolled && pathName === "/consultation")
                    ? "text-white"
                    : ""
                )}
              >
                {item.label}
              </Link>
              {item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background p-2 border rounded-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-primary text-sm text-foreground/80 hover:text-foreground rounded-sm hover:text-white  transition-colors"
                    >
                      {subItem.icon && <subItem.icon className="w-4 h-4" />}
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Button
              onClick={() => router.push("/consultation")}
              className="hidden md:inline-flex"
            >
              Get Free Quote
            </Button>
          </motion.div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu
                  className={cn(
                    "h-5 w-5",
                    !isScrolled && pathName === "/" ? "text-white" : ""
                  )}
                />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 h-screen w-screen bg-gradient-to-b from-lime-500 to-lime-700 md:hidden overflow-y-auto"
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="px-6 pb-6 space-y-6 min-h-screen flex flex-col justify-start">
            {navItems.map((item) => (
              <div key={item.label}>
                <div
                  className="flex items-center justify-between px-4 py-3 text-lg font-medium text-white cursor-pointer hover:bg-white/20 rounded-md transition"
                  onClick={() =>
                    item.submenu
                      ? toggleSubmenu(item.label)
                      : setMobileMenuOpen(false)
                  }
                >
                  <div className="flex items-center gap-2 flex-1">
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.submenu) {
                          e.preventDefault();
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="flex-1"
                    >
                      {item.label}
                    </Link>
                  </div>
                  {item.submenu && (
                    <span className="text-xl select-none text-white">
                      {expandedSubmenus[item.label] ? "−" : "+"}
                    </span>
                  )}
                </div>

                {item.submenu && expandedSubmenus[item.label] && (
                  <div className="ml-8 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="flex items-center gap-2 text-white text-base py-2 px-4 rounded-md hover:bg-white/20 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.icon && <subItem.icon className="w-4 h-4" />}
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Button
              className="mt-4 w-full"
              variant={"secondary"}
              onClick={() => {
                setMobileMenuOpen(false);
                router.push("/consultation");
              }}
            >
              Get Free Quote
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
