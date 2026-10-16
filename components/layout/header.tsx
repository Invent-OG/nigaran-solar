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

// Navigation items
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "#",
    submenu: [
      {
        label: "Residential Solar",
        href: "/residential",
        icon: Sun,
      },
      {
        label: "Commercial Solar",
        href: "/commercial",
        icon: Building,
      },
      {
        label: "Housing society",
        href: "/housing-society",
        icon: HomeIcon,
      },
      // { label: "Solar Subsidy", href: "/subsidy", icon: DollarSign },
    ],
  },
  {
    label: "Services",
    href: "#",
    submenu: [
      {
        label: "On-Grid Solar",
        href: "/on-grid-solar",
        icon: Zap,
      },
      {
        label: "Off-Grid Solar",
        href: "/off-grid-solar",
        icon: Battery,
      },
    ],
  },
  { label: "Contact", href: "/contact" },
  {
    label: "More",
    href: "#",
    submenu: [
      {
        label: "Careers",
        href: "/careers",
        icon: Briefcase,
      },
      {
        label: "Solar Pro",
        href: "/solar-pro",
        icon: ShieldCheck,
      },
      {
        label: "Blog",
        href: "/blog",
        icon: Newspaper,
      },
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

  // Detect the landing page
  const isLandingPage = pathName === "/landing";

  // Preserve the existing transparent header behavior at top of hero sections.
  const isTransparentAtTop =
    ((pathName === "/" || pathName === "/consultation") &&
      !isScrolled);

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle mobile menu scrolling
  useEffect(() => {
    if (mobileMenuOpen && !isLandingPage) {
      document.body.style.overflow = "hidden";

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isLandingPage]);

  // Close the mobile menu when navigating to /landing
  useEffect(() => {
    if (isLandingPage) {
      setMobileMenuOpen(false);
      setExpandedSubmenus({});
    }
  }, [isLandingPage]);

  // Toggle mobile submenus
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
        isTransparentAtTop
          ? "bg-transparent py-4 sm:py-5 border-none shadow-none"
          : "bg-background/95 backdrop-blur-md py-3 shadow-sm border-b border-border/40"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center",
          "justify-between"
        )}
      >
        {/* Logo and Brand Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link
            href="/"
            aria-label="Nigaran Solar Home"
            className="text-xl font-bold flex items-center"
          >
            <Image
              title="Nigaran-Logo"
              src="/nigaran-logo.png"
              alt="Nigaran Solar Logo"
              width={50}
              height={50}
              priority
            />

            <span
              className={cn(
                "ml-2 text-xl font-bold tracking-tight transition-colors duration-200",
                isTransparentAtTop ? "text-white" : "text-foreground"
              )}
            >
              Nigaran Solar
            </span>
          </Link>
        </motion.div>

        {/* Hide all other navbar content on /landing */}
        {!isLandingPage && (
          <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  className="relative group flex items-center space-x-1"
                >
                  {item.icon && (
                    <item.icon className="w-4 h-4 text-foreground/80" />
                  )}

                  <Link
                    href={item.href}
                    className={cn(
                      "text-foreground/80 hover:text-primary transition-colors font-medium",
                      isTransparentAtTop ? "text-white" : ""
                    )}
                  >
                    {item.label}
                  </Link>

                  {/* Desktop Dropdown */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background p-2 border rounded-md shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-primary text-sm text-foreground/80 hover:text-foreground rounded-sm hover:text-white transition-colors"
                        >
                          {subItem.icon && (
                            <subItem.icon className="w-4 h-4" />
                          )}

                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-4">
              {/* Get Free Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                }}
              >
                <Button
                  onClick={() => router.push("/landing")}
                  className="hidden md:inline-flex"
                >
                  Get Free Quote
                </Button>
              </motion.div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setMobileMenuOpen(!mobileMenuOpen)
                  }
                  aria-label={
                    mobileMenuOpen
                      ? "Close navigation menu"
                      : "Open navigation menu"
                  }
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu
                      className={cn(
                        "h-5 w-5",
                        isTransparentAtTop ? "text-white" : ""
                      )}
                    />
                  )}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      {!isLandingPage && mobileMenuOpen && (
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
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Navigation Items */}
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
                    {item.icon && (
                      <item.icon className="w-5 h-5" />
                    )}

                    <Link
                      href={item.href}
                      className="flex-1"
                      onClick={(event) => {
                        if (item.submenu) {
                          event.preventDefault();
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
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

                {/* Mobile Submenu */}
                {item.submenu &&
                  expandedSubmenus[item.label] && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="flex items-center gap-2 text-white text-base py-2 px-4 rounded-md hover:bg-white/20 transition-colors"
                          onClick={() =>
                            setMobileMenuOpen(false)
                          }
                        >
                          {subItem.icon && (
                            <subItem.icon className="w-4 h-4" />
                          )}

                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Mobile Get Free Quote */}
            <Button
              className="mt-4 w-full"
              variant="secondary"
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