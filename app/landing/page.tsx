

/* eslint-disable @next/next/no-img-element */
"use client";

import LeadForm from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { HomeIcon, Users2, Building2, MapIcon, Sun, ArrowRight, BarChart, Battery, Calculator, Clock, IndianRupee, AlertCircle, ArrowUpRight, Check, CheckCircle2, ChevronDown, MapPin, Ruler, ShieldCheck, ArrowLeftRight, Quote, Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";



function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

/* ==========================================================================
   Landing page — Tailwind-only port. Every rule that used to live in
   landing.css (bootstrap + city-page + hero-v2 + global) is now expressed as
   inline utility classes. Bootstrap breakpoints are kept exactly:
     md = 768px (Tailwind md), lg = 1024px (Tailwind lg, used by hero-v2),
     992px  -> min-[992px]:   (bootstrap lg)
     1200px -> min-[1200px]:  (bootstrap xl)
   ========================================================================== */

const IMG = "/landing";

/* ------------------------------------------------------------------- data */

const formTypes = [
  {
    id: "residential" as const,
    label: "Residential",
    icon: HomeIcon,
    title: "Home Solar Solutions",
    description:
      "Customized solar plans to slash your home electricity bill and maximize savings.",
  },
  {
    id: "housing_society" as const,
    label: "Housing Society",
    icon: Users2,
    title: "Society Solar System",
    description:
      "Affordable, large-scale solar energy for entire communities and residential societies.",
  },
  {
    id: "commercial" as const,
    label: "Commercial",
    icon: Building2,
    title: "Commercial Solar Plans",
    description:
      "High-efficiency solar power designed to cut operational costs for your business.",
  },
];

const HERO_TAGS = [
  {
    icon: LuSun,
    label: "100+ MW Solar Expertise",
  },
  {
    icon: LuHouse,
    label: "15000+ Relationships Powered",
  },
  {
    icon: LuStar,
    label: "4.9 Customer Confidence",
  },
  {
    icon: LuShieldCheck,
    label: "5 year Generation Promise Coverage",
  },
];

const BILL_OPTIONS = [
  "Less than ₹1500",
  "₹1500 - ₹2500",
  "₹2500 - ₹4000",
  "₹4000 - ₹8000",
  "More than ₹8000",
];

const PROMISES = [
  {
    img: `/landing/All-Weather Reliability.webp`,
    heading: "All-Weather Reliability",
    desc: "Engineered to perform in heavy rain, strong winds, and extreme heat.",
  },
  {
    img: `/landing/Seamless Solar Experience.webp`,
    heading: "Seamless Solar Experience",
    desc: "Expert guidance, hassle-free installation, and quick subsidy support.",
  },
  {
    img: `/landing/Care Beyond Installation.webp`,
    heading: "Care Beyond Installation",
    desc: "Dedicated assistance for years after you switch to solar.",
  },
  {
    img: `/landing/Generation Commitment.webp`,
    heading: "Generation Commitment",
    desc: "Support throughout your solar journey.",
  },
];

import {
  LuPiggyBank,
  LuActivity,
  LuCalculator,
  LuShieldCheck,
  LuHouse,
  LuStar,
  LuZap,
  LuBellRing,
  LuChartNoAxesCombined,
  LuSun,
} from "react-icons/lu";
import { MdArrowRightAlt } from "react-icons/md";

const GOODZERO_POINTS = [
  {
    icon: LuPiggyBank,
    heading: "We commit",
    subheading: "Guaranteed savings on your electricity bills.",
  },
  {
    icon: LuActivity,
    heading: "We monitor",
    subheading: "Continuous monitoring of your solar system's performance.",
  },
  {
    icon: LuCalculator,
    heading: "We calculate",
    subheading: "Accurate calculation of your solar energy savings.",
  },
  {
    icon: LuShieldCheck,
    heading: "We compensate",
    subheading: "Compensation when your system doesn't meet its promise.",
  },
];
/* Savings/EMI figures for the estimator (per system size, tenure order below). */
const TENURES = [60, 24, 12, 6];
const SYSTEM_SIZES = [
  { kw: 3, bill: "₹ 1500 to ₹ 2500", saving: 4700, emis: [3150, 6900, 12900, 24500] },
  { kw: 4, bill: "₹ 2500 to ₹ 4000", saving: 6300, emis: [4200, 9200, 17200, 32800] },
  { kw: 5, bill: "₹ 4000 to ₹ 8000", saving: 8200, emis: [5400, 11800, 22100, 42000] },
];

const STATS = [
  {
    icon: LuHouse,
    count: 100,
    prefix: "",
    suffix: "+ MW",
    label: "Solar Expertise",
  },
  {
    icon: LuZap,
    count: 15000,
    prefix: "",
    suffix: "+",
    label: "Relationships Powered",
  },
  {
    icon: LuStar,
    count: 4.9,
    prefix: "",
    suffix: "",
    label: "Customer Confidence",
  },
  {
    icon: LuShieldCheck,
    count: 5,
    prefix: "",
    suffix: " Years",
    label: "Generation Promise Coverage",
  },
];

const APP_FEATURES = [
  {
    icon: LuSun,
    label: "Track solar generation",
  },
  {
    icon: LuChartNoAxesCombined,
    label: "View performance data",
  },
  {
    icon: LuBellRing,
    label: "Stay informed about your system",
  },
  {
    icon: LuShieldCheck,
    label: "Full transparency on promised vs. actual generation",
  },
];

/* Per-card positions for the floating app feature cards (mobile / md+). */
const FEATURE_POS = [
  "left-0 top-[68px] md:left-[14%] md:top-[16%]",
  "right-0 top-[45px] md:right-[13.5%] md:top-[21%]",
  "-left-[3px] bottom-3 md:bottom-[18px] md:left-[11.6%]",
  "bottom-[9px] right-0 md:bottom-[3%] md:right-[11%]",
];

const TESTIMONIALS = [
  {
    text: "Most companies forget you after installation, but their customer service is top-notch. I had a small question about the inverter display a month after setup, and their technician was at my house the next morning to check it out. Excellent peace of mind!",
    name: "Yoga Vignesh",
    rating: 5,
    location: "Coimbatore",
    date: "2 months ago",
  },
  {
    text: "What I loved most was their transparency. No hidden charges, no aggressive sales pitches. They gave an honest estimate, explained the return on investment clearly, and guided us through the entire subsidy application process step-by-step.",
    name: "Kannan Kannan V",
    rating: 5,
    location: "Tiruppur",
    date: "3 months ago",
  },
  {
    text: "Very satisfied with the service provided by Nigaran Solar. The team explained the entire process clearly, completed the installation on time, and addressed all our questions professionally. I would recommend them to anyone looking for a reliable solar solution.",
    name: "Srimathi Murugasamy",
    rating: 5,
    location: "Erode",
    date: "1 month ago",
  },
];

/* ---------------------------------------------------- shared class strings */

/* bootstrap .container: padding is added per use because it differs per section */
const CONTAINER =
  "mx-auto w-full min-[576px]:max-w-[540px] md:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]";

/* ---- lead form (shared by the hero form and the modal form) ---- */
const F_FORM =
  "overflow-visible bg-[#f5f8fd] px-5 pb-8 pt-6 lg:rounded-[20px] lg:bg-white lg:p-8";
const F_TITLE =
  "mb-2 text-[24px] font-bold leading-9 tracking-[-0.48px] text-[#1a1f38] lg:text-[28px] lg:leading-[37px] lg:tracking-[-1.12px]";
const F_DESC =
  "mb-5 w-auto text-[14px] tracking-[-0.28px] text-[#1a1f38] lg:mb-6 lg:text-[#5d627c]";
const F_FLOATING = "relative mb-[22px] pt-0.5";
const F_INPUT =
  "peer block h-[56px] min-h-[56px] w-full appearance-none rounded-xl border border-[#e2e4ec] bg-white bg-clip-padding px-[19px] pb-1.5 pt-6 text-[16px] font-semibold leading-5 text-[#1a1f38] outline-none transition-[border-color,box-shadow] duration-150 ease-in-out placeholder:text-transparent focus:border-[#131ca2] [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#fff] [&:-webkit-autofill]:[-webkit-text-fill-color:#1a1f38] lg:h-12 lg:min-h-[48px] lg:pb-[5px] lg:pt-5 lg:text-[14px]";
/* floated by default, "resting" (big, centred) only while empty + unfocused */
const F_LABEL =
  "pointer-events-none absolute left-0 top-0 z-[2] flex h-full items-center overflow-hidden text-ellipsis whitespace-nowrap px-[19px] pb-5 text-[12px] font-normal leading-[1.2] tracking-[-0.32px] text-[#5d627c] opacity-100 transition-all duration-200 ease-in-out peer-[:placeholder-shown:not(:focus)]:pb-0 peer-[:placeholder-shown:not(:focus)]:text-[16px] peer-[:placeholder-shown:not(:focus)]:font-medium lg:tracking-[-0.24px] lg:peer-[:placeholder-shown:not(:focus)]:text-[14px] lg:peer-[:placeholder-shown:not(:focus)]:font-normal";
const F_ERR = "absolute inset-x-0 top-full ml-3 w-full text-[12px] leading-[1.3] text-[#d32f2f]";
const F_BILL_LABEL =
  "mb-0 ml-0 inline-block text-[16px] font-medium tracking-[-0.64px] text-[#1a1f38] lg:text-[14px] lg:font-normal lg:tracking-[-0.28px] lg:text-[#5d627c]";
const F_RADIO_ON =
  "border-[#e2e4ec] bg-[linear-gradient(91.38deg,#101f9d_0%,#11111c_99.9%)] text-white";
const F_RADIO_OFF = "border-[#e2e4ec] bg-white text-[#1a1f38]";
const F_RADIO_HERO =
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border px-5 py-3 text-center text-[14px] font-semibold tracking-[-0.28px] lg:h-[42px] lg:min-w-[136px] lg:flex-none lg:rounded-xl lg:px-[14px] lg:py-0";
const F_RADIO_MODAL =
  "mx-0.5 my-1 inline-block cursor-pointer whitespace-nowrap rounded-xl border px-[15px] py-3 text-center text-[14px] font-semibold";
const F_BTN =
  "relative inline-block h-[50px] w-full cursor-pointer rounded-lg border-0 bg-[linear-gradient(92.8442deg,#101f9d_0%,#11111c_99.904%)] p-[1.2rem] text-center text-[14px] font-semibold leading-none tracking-[-0.28px] text-white lg:h-12 lg:bg-[linear-gradient(93.8357deg,#101f9d_0%,#11111c_99.904%)]";

/* ---- solar estimator radio pills ---- */
const PILL =
  "block w-full max-w-[140px] cursor-pointer rounded-lg p-3 text-left font-semibold md:text-[1rem]";
const PILL_OFF = "border border-white/10 bg-[#1a1f38]";
const PILL_ON =
  "border-2 border-transparent text-[#64d6ff] [background:linear-gradient(#1a1f38,#1a1f38)_padding-box,linear-gradient(90deg,#64d6ff,#4785ff)_border-box]";
const PILL_GROUP =
  "relative -mx-5 flex gap-3 overflow-x-auto whitespace-nowrap pl-5 align-middle [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

/* ------------------------------------------------------------------ hooks */

function inr(value: number) {
  return value.toLocaleString("en-IN");
}

function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}

/* ------------------------------------------------------------------- form */

// type LeadFormProps = {
//   variant: "hero" | "modal";
//   title: string;
//   desc?: string;
//   buttonLabel?: string;
// };

// function LeadForm({ variant, title, desc, buttonLabel = "Submit Details" }: LeadFormProps) {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [bill, setBill] = useState(BILL_OPTIONS[0]);
//   const [pincode, setPincode] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean; pincode?: boolean }>({});

//   const isHero = variant === "hero";

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     const next = {
//       name: name.trim().length === 0,
//       phone: !/^\d{10}$/.test(phone),
//       pincode: !/^\d{6}$/.test(pincode),
//     };
//     setErrors(next);
//     if (next.name || next.phone || next.pincode) return;
//     setSubmitted(true);
//   };

//   return (
//     <div>
//       <form
//         className={`${F_FORM} ${isHero ? "lg:mt-[38px]" : "md:mt-[38px]"}`}
//         onSubmit={handleSubmit}
//         noValidate
//       >
//         <h2 className={F_TITLE}>{title}</h2>
//         {desc ? <p className={F_DESC}>{desc}</p> : null}

//         <div>
//           <div className={F_FLOATING}>
//             <input
//               type="text"
//               className={F_INPUT}
//               id={`${variant}-full_name`}
//               name="full_name"
//               placeholder="Full Name"
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//             />
//             <label htmlFor={`${variant}-full_name`} className={F_LABEL}>
//               Full Name
//             </label>
//             <div className={`${F_ERR} ${errors.name ? "block" : "hidden"}`}>
//               Please enter your name.
//             </div>
//           </div>

//           <div className={F_FLOATING}>
//             <input
//               type="tel"
//               className={F_INPUT}
//               id={`${variant}-whatsapp_number`}
//               name="whatsapp_number"
//               placeholder="Whatsapp Number"
//               maxLength={10}
//               value={phone}
//               onChange={(event) => setPhone(event.target.value.replace(/\D/g, ""))}
//             />
//             <label htmlFor={`${variant}-whatsapp_number`} className={F_LABEL}>
//               Whatsapp Number
//             </label>
//             <div className={`${F_ERR} ${errors.phone ? "block" : "hidden"}`}>
//               Enter a valid 10-digit number.
//             </div>
//           </div>

//           <div className="relative mb-[22px]">
//             <label className={F_BILL_LABEL}>Monthly Electricity Bill</label>
//             <img
//               id={`${variant}-tooltip-info`}
//               src={`${IMG}/tooltip-info.webp`}
//               className="inline-block align-middle"
//               alt="Info Image"
//               width={16}
//               height={16}
//             />
//             <div
//               className={
//                 isHero
//                   ? "m-0 flex flex-wrap gap-2 overflow-visible pl-0"
//                   : "-mx-5 flex overflow-x-auto pl-[15px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//               }
//             >
//               {BILL_OPTIONS.map((option) => (
//                 <div
//                   key={option}
//                   className={`${isHero ? F_RADIO_HERO : F_RADIO_MODAL} ${option === bill ? F_RADIO_ON : F_RADIO_OFF
//                     }`}
//                   data-value={option}
//                   role="button"
//                   tabIndex={0}
//                   onClick={() => setBill(option)}
//                   onKeyDown={(event) => event.key === "Enter" && setBill(option)}
//                 >
//                   {option}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className={F_FLOATING}>
//             <input
//               type="text"
//               className={F_INPUT}
//               id={`${variant}-pincode`}
//               name="pincode"
//               placeholder="PIN Code"
//               maxLength={6}
//               value={pincode}
//               onChange={(event) => setPincode(event.target.value.replace(/\D/g, ""))}
//             />
//             <label htmlFor={`${variant}-pincode`} className={F_LABEL}>
//               PIN Code
//             </label>
//             <div className={`${F_ERR} ${errors.pincode ? "block" : "hidden"}`}>
//               Enter a 6-digit pincode
//             </div>
//           </div>

//           <div className="relative mb-4 flex min-h-6 items-start p-0">
//             <img
//               src={`${IMG}/check-box.webp`}
//               alt="check-policy"
//               width={20}
//               height={20}
//               className="mr-[5px] h-full opacity-50"
//             />
//             <label
//               htmlFor="policyCheck"
//               className="inline-block text-[12px] font-medium leading-[1.4] tracking-[-0.48px] text-[#5d627c] lg:font-normal lg:tracking-[-0.24px]"
//             >
//               I agree to SolarSquare{" "}
//               <a href="/terms-of-use" className="font-medium text-[#131ca2] underline">
//                 Terms of use
//               </a>{" "}
//               and{" "}
//               <a href="/privacy-policy" className="font-medium text-[#131ca2] underline">
//                 Privacy Policy
//               </a>
//               .
//             </label>
//           </div>
//         </div>

//         <button type="submit" className={F_BTN}>
//           {isHero ? "Book a FREE Consultation " : buttonLabel}
//         </button>

//         <div
//           className={`relative mb-4 mt-2 rounded-md border border-[#a3cfbb] bg-[#d1e7dd] p-4 text-[#0a3622] ${submitted ? "block" : "hidden"
//             }`}
//         >
//           Details submitted successfully. Our team will contact you shortly.
//         </div>
//         <div className="mt-1 text-[#dc3545]"></div>
//       </form>
//     </div>
//   );
// }

/* ----------------------------------------------------------------- cta box */

function CtaBox({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-lime-500 p-5 to-lime-200 md:w-[490px]">
      <div className="relative shrink-0 h-[110px] self-end flex items-end justify-center pl-2 sm:pl-4">
        <img
          src={`/landing/Got questions.webp`}
          alt="Expert"
          width={130}
          height={150}
          className="h-[150px] relative -bottom-6 w-auto object-contain object-bottom"
        />
      </div>
      <div className="min-w-0 flex-1 py-3.5 pr-4 text-start">
        <p className="mb-0 text-[18px] font-semibold text-[#182150] md:text-[1.15rem]">
          Got questions?
        </p>
        <p className="mb-0 text-[0.875rem] text-[#182150]">
          Our solar experts are just a call away.
        </p>
        <button
          className="mt-3 inline-flex cursor-pointer items-center rounded-md border border-transparent bg-transparent p-0 text-center text-[0.875rem] font-semibold leading-normal text-[#2f38cf] transition hover:text-[#182150]"
          type="button"
          onClick={onOpen}
        >
          Talk to our expert{" "}
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- stats */
function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, value } = useCountUp(stat.count);

  const Icon = stat.icon;

  // Preserve the original decimal value for non-integer statistics.
  const formattedValue =
    stat.count % 1 !== 0
      ? stat.count.toFixed(1)
      : inr(value);

  return (
    <div className="mt-3 w-1/2 max-w-full shrink-0 px-1.5 md:w-1/4">
      <div className="h-[140px] overflow-hidden rounded-lg bg-[#f7fafe] p-4 md:h-[142px] md:p-5">
        {/* React Icon */}
        <div className="flex h-8 w-8 items-center justify-center text-[#007D10]">
          <Icon
            size={28}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        {/* Statistic */}
        <h4 className="mb-1 mt-3 text-[1.25rem] font-semibold leading-[normal] text-[#182150] md:mt-4 md:whitespace-nowrap md:leading-7">
          <span className="font-bold" ref={ref}>
            {stat.prefix}
            {formattedValue}
          </span>
          <span>{stat.suffix}</span>
        </h4>

        {/* Label */}
        <p className="m-0 text-[0.875rem] text-[#5d627c] md:text-base">
          {stat.label}
        </p>
      </div>
    </div>
  );
}




/* ------------------------------------------------------------------- page */

export default function LandingPage() {
  const [size, setSize] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [modal, setModal] = useState<{ open: boolean; title: string }>({
    open: false,
    title: "Talk to a Solar Expert",
  });
  const [stickyVisible, setStickyVisible] = useState(false);
  const [activeForm, setActiveForm] = useState<
    "residential" | "housing_society" | "commercial"
  >("residential");

  const systemSize = SYSTEM_SIZES[size];
  const saving = systemSize.saving;
  const emi = systemSize.emis[tenure];
  const zeroInvestment = saving >= emi;

  useEffect(() => {
    const formSection = document.getElementById("review-section");
    if (!formSection) return;
    const isMobile = window.matchMedia("(max-width: 767px)");

    const sync = (formVisible: boolean) =>
      setStickyVisible(isMobile.matches ? !formVisible : false);

    const observer = new IntersectionObserver(
      (entries) => sync(Boolean(entries[0]?.isIntersecting)),
      { threshold: 0 }
    );
    observer.observe(formSection);

    const onChange = () => {
      const rect = formSection.getBoundingClientRect();
      sync(rect.bottom > 0 && rect.top < window.innerHeight);
    };
    isMobile.addEventListener("change", onChange);
    sync(true);

    return () => {
      observer.disconnect();
      isMobile.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal.open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal.open]);

  const openModal = (title: string) => setModal({ open: true, title });

  const activeFormMeta = formTypes.find((f) => f.id === activeForm)!;

  type SolarCalculatorResult = {
    systemSize: number;
    areaNeeded: number;
    systemCost: number;
    subsidizedCost: number;
    annualSavings: number;
    paybackPeriod: number;
    roofAreaSufficient: boolean;
  };

  const SOLAR_CALCULATOR_SYSTEMS = [
    { minBill: 0, maxBill: 2880, kW: 2, area: 128, costBefore: 160000, costAfter: 100000 },
    { minBill: 2881, maxBill: 5820, kW: 3, area: 192, costBefore: 210000, costAfter: 132000 },
    { minBill: 5821, maxBill: 9180, kW: 4, area: 256, costBefore: 270000, costAfter: 192000 },
    { minBill: 9181, maxBill: 12645, kW: 5, area: 320, costBefore: 350000, costAfter: 272000 },
    { minBill: 12646, maxBill: 16110, kW: 6, area: 384, costBefore: 405000, costAfter: 327000 },
    { minBill: 16111, maxBill: 19575, kW: 7, area: 448, costBefore: 455000, costAfter: 377000 },
    { minBill: 19576, maxBill: 23040, kW: 8, area: 480, costBefore: 482000, costAfter: 404000 },
    { minBill: 23041, maxBill: 26505, kW: 9, area: 544, costBefore: 530000, costAfter: 452000 },
    { minBill: 26506, maxBill: Infinity, kW: 10, area: 576, costBefore: 560000, costAfter: 482000 },
  ];

  const [solarBill, setSolarBill] = useState("");
  const [solarRoofArea, setSolarRoofArea] = useState("");
  const [solarLocation, setSolarLocation] = useState("tamil-nadu");

  const [solarErrors, setSolarErrors] = useState<{
    bill?: string;
    roofArea?: string;
  }>({});

  const [solarResults, setSolarResults] =
    useState<SolarCalculatorResult | null>(null);

  const [showSolarResults, setShowSolarResults] = useState(false);
  const solarResultsRef = useRef<HTMLDivElement>(null);

  const scrollToSolarResults = () => {
    setTimeout(() => {
      if (solarResultsRef.current) {
        solarResultsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  useEffect(() => {
    if (showSolarResults && solarResultsRef.current) {
      const timer = setTimeout(() => {
        solarResultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [showSolarResults]);

  const calculateSolarRequirements = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const bill = Number(solarBill);
    const roofArea = Number(solarRoofArea);

    const errors: typeof solarErrors = {};

    if (!solarBill || !Number.isFinite(bill) || bill < 1000) {
      errors.bill = "Enter a valid electricity bill of at least ₹1,000.";
    }

    if (
      !solarRoofArea ||
      !Number.isFinite(roofArea) ||
      roofArea <= 0
    ) {
      errors.roofArea = "Enter your available roof area.";
    }

    setSolarErrors(errors);

    if (Object.keys(errors).length > 0) {
      setShowSolarResults(false);
      setSolarResults(null);
      return;
    }

    const system =
      SOLAR_CALCULATOR_SYSTEMS.find(
        (item) => bill >= item.minBill && bill <= item.maxBill
      ) ?? SOLAR_CALCULATOR_SYSTEMS[
      SOLAR_CALCULATOR_SYSTEMS.length - 1
      ];

    // Retains the savings calculation from your existing calculator.
    const annualSavings = bill * 6;

    const results: SolarCalculatorResult = {
      systemSize: system.kW,
      areaNeeded: system.area,
      systemCost: system.costBefore,
      subsidizedCost: system.costAfter,
      annualSavings,
      paybackPeriod:
        annualSavings > 0
          ? Math.round(
            (system.costAfter / annualSavings) * 10
          ) / 10
          : 0,
      roofAreaSufficient: roofArea >= system.area,
    };

    setSolarResults(results);
    setShowSolarResults(true);
    scrollToSolarResults();
  };


  return (
    <div
      className="bg-white text-base font-normal leading-normal tracking-[-0.5px] text-[#212529]"
      data-city="coimbatore"
    >
      {/* ------------------------------------------------------------ hero */}
      <section className="relative bg-[#f5f8fd] lg:grid lg:grid-cols-1">
        <div className="relative min-h-[497px] overflow-hidden bg-[#2c3045] max-[767.98px]:cursor-pointer lg:min-h-[745px] lg:self-stretch lg:[grid-area:1/1]">
          <div className="absolute inset-0 overflow-hidden after:absolute after:inset-x-0 after:top-0 after:h-[409px] after:bg-[linear-gradient(180deg,#2c3045_7.09%,rgba(44,48,69,0.6)_28.172%,rgba(44,48,69,0)_51.834%)] after:content-[''] lg:after:-top-[30px] lg:after:h-[668px] lg:after:bg-[linear-gradient(175.8047deg,#2c3045_2.9488%,rgba(44,48,69,0.6)_27.589%,rgba(44,48,69,0)_46.354%)]">
            <picture>
              <source
                media="(max-width: 767.98px)"
                srcSet="/landing/banner mobile.webp"
                sizes="100vw"
              />
              <img
                width={2560}
                height={1333}
                src={`landing/banner.webp`}
                className="block h-full w-full object-cover object-[center_top]"
                alt="Coimbatore"
                sizes="(max-width: 767px) 100vw, 1440px"
              />
            </picture>
          </div>

          <div className={`${CONTAINER} px-3`}>
            <div className="relative z-[1] px-4 pt-20 text-center lg:mx-auto lg:w-full lg:max-w-[1440px] lg:px-0 lg:pt-28 lg:text-left">
              <h2 className="m-0 text-[28px] font-bold leading-[1.2] tracking-[-1.12px] text-white lg:max-w-[min(679px,calc(100%_-_538px))] lg:text-left lg:text-[56px] lg:leading-[64px] lg:tracking-[-2.24px]">
                Make Your Rooftop a Brighter purpose to save
              </h2>
              <div className="mb-0 mt-3 inline-block rounded-xl bg-black/40 px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-[12px] border border-white/10 text-left lg:mt-5 lg:max-w-[min(679px,calc(100%_-_538px))]">
                <p className="m-0 text-[14px] font-medium leading-[1.5] tracking-[-0.3px] text-white lg:text-[18px]">
                  Cut electricity expenses by{" "}
                  <span className="font-bold ">up to 99%</span>{" "}
                  and get{" "}
                  <span className="font-bold ">up to ₹1 lakh</span>{" "}
                  in government solar subsidy.
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-[60px] z-[1] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)] lg:relative lg:bottom-auto lg:my-6 lg:w-full lg:max-w-[min(679px,calc(100%_-_538px))] lg:overflow-visible lg:p-0 lg:[mask-image:none]">
              <div className="flex w-max hover:[&>*]:[animation-play-state:paused] active:[&>*]:[animation-play-state:paused] lg:block lg:w-full">
                {/* Primary track */}
                <div className="animate-hero-marquee flex shrink-0 items-center gap-3 pr-3 will-change-transform lg:flex lg:w-full lg:shrink lg:flex-wrap lg:items-start lg:gap-2 lg:pr-0 lg:animate-none lg:will-change-auto">
                  {HERO_TAGS.map((tag) => {
                    const Icon = tag.icon;

                    return (
                      <div
                        className="flex h-[35px] flex-[0_0_295px] items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-black/20 px-4 py-2 text-[14px] font-medium leading-none tracking-[-0.28px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_0_0_1px_rgba(255,255,255,0.16),0_2px_8px_rgba(0,0,0,0.18)] backdrop-blur-[12px] lg:h-auto lg:w-auto lg:flex-none lg:gap-2"
                        key={tag.label}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.8}
                          aria-hidden="true"
                          className="h-[19px] w-[19px] flex-none text-white"
                        />

                        <span>{tag.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Duplicate track for seamless infinite looping on mobile (hidden on desktop) */}
                <div
                  aria-hidden="true"
                  className="animate-hero-marquee flex shrink-0 items-center gap-3 pr-3 will-change-transform lg:hidden"
                >
                  {HERO_TAGS.map((tag, idx) => {
                    const Icon = tag.icon;

                    return (
                      <div
                        className="flex h-[35px] flex-[0_0_295px] items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-black/20 px-4 py-2 text-[14px] font-medium leading-none tracking-[-0.28px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_0_0_1px_rgba(255,255,255,0.16),0_2px_8px_rgba(0,0,0,0.18)] backdrop-blur-[12px]"
                        key={`duplicate-${tag.label}-${idx}`}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.8}
                          aria-hidden="true"
                          className="h-[19px] w-[19px] flex-none text-white"
                        />

                        <span>{tag.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-[1] bg-[#fcf9f1] lg:left-1/2 lg:right-auto lg:bottom-[42px] lg:w-full lg:max-w-[1440px] lg:-translate-x-1/2 lg:bg-transparent lg:px-20">
            <div className="flex justify-center p-0 lg:justify-start">
              <div className="flex h-11 items-center gap-1 p-0 text-center text-[14px] font-medium leading-[1.4] tracking-[-0.56px] text-[#1a1f38] lg:h-auto lg:rounded-xl lg:bg-white/[0.16] lg:px-8 lg:py-3 lg:text-[20px] lg:tracking-[-0.4px] lg:text-white lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),inset_0_0_0_1px_rgba(255,255,255,0.16),0_2px_8px_rgba(0,0,0,0.18)] lg:backdrop-blur-[12px]">
                <GoogleLogo className="m-0 h-4 w-4" />
                Rated{" "}
                <span className="font-medium text-[#d8901e] lg:text-[#e9b35e]">★ 4.8</span> on Google{" "}
                <span className="inline-block h-[9px] w-px flex-none overflow-hidden bg-[#9ea2b8] text-[0px] leading-[0] lg:h-[18px] lg:bg-[#e2e4ec]">
                  |
                </span>{" "}
                <span className="text-[12px] font-semibold tracking-[-0.48px] lg:text-[20px] lg:tracking-[-0.4px]">
                  {" "}
                  15000+ ratings
                </span>
              </div>
            </div>
          </div>
        </div>


        <div
          id="review-section"
          className="relative z-20 w-full min-w-0 px-4 py-8 md:px-6 md:pt-14 lg:z-10 lg:mx-auto lg:flex lg:max-w-[1440px] lg:justify-end lg:self-start lg:pb-[72px] lg:pl-0 lg:pr-20 lg:pt-28 lg:[grid-area:1/1]"
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="relative z-20 w-full min-w-0 flex-shrink-0 overflow-visible xl:w-[480px]"
          >
            {/* Tab switcher */}
            <div className="relative z-30 mb-5 flex gap-1 rounded-2xl border border-white/20 bg-[#2c3045]/90 p-1.5 shadow-lg backdrop-blur-md">
              {formTypes.map(({ id, label, icon: Icon }) => {
                const isActive = activeForm === id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveForm(id)}
                    aria-pressed={isActive}
                    className={`relative flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold transition-all duration-300 sm:px-3 ${isActive
                      ? "bg-gradient-to-r bg-gray-500 text-white shadow-md"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    <Icon size={17} className="shrink-0" />

                    <span className="truncate">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Animated form */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeForm}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 w-full"
              >
                <LeadForm
                  key={activeForm}
                  type={activeForm}
                  title={activeFormMeta.title}
                  description={activeFormMeta.description}
                />
              </motion.div>
            </AnimatePresence>

            {/* Footer note */}
            <p className="mt-4 text-center text-xs text-slate-400">
              No spam. We respect your privacy.{" "}
              <span className="font-medium text-primary">100% Free.</span>
            </p>
          </motion.div>
        </div>


      </section>

      {/* -------------------------------------------------------- promises */}
      <section className="md:my-24">
        <div className={`${CONTAINER} px-5 py-10 md:p-0`}>
          <h2 className="mb-4 text-[1.75rem] font-bold leading-[normal] tracking-[0] md:mb-14 md:text-center md:text-[36px] md:tracking-[-1px]">
            Why 1000+ Trust Nigaran Solar
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:mx-auto md:grid-cols-4 md:gap-12 md:px-[60px]">
            {PROMISES.map((promise) => (
              <div className="md:text-center" key={promise.heading}>
                <div>
                  <div className="mb-5 h-[155px] w-full overflow-hidden rounded-xl md:mx-auto md:h-[180px] md:w-[180px]">
                    <img
                      width={250}
                      height={250}
                      src={promise.img}
                      alt=""
                      className="block h-full w-full rounded-xl object-cover"
                    />
                  </div>
                  <h3 className="mb-1 w-[160px] text-[18px] font-bold leading-[23px] tracking-[0] text-[#1a1f38] md:w-auto md:text-[20px] md:leading-7 md:tracking-[-0.5px]">
                    {promise.heading}
                  </h3>
                </div>
                <p className="mb-0 text-[0.875rem] font-normal leading-5 text-[#5d627c] md:text-base md:leading-[21px] md:tracking-[0]">
                  {promise.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- goodzero */}
      <section className="relative overflow-hidden bg-[url('/landing/bg.png')] bg-cover bg-bottom bg-no-repeat md:before:pointer-events-none md:before:absolute md:before:-right-[25px] md:before:top-[10px] md:before:h-[370px] md:before:w-[370px] md:before:bg-[url('/landing/shield.webp')] md:before:bg-contain md:before:bg-center md:before:bg-no-repeat md:before:content-[''] min-[1200px]:py-24">
        <div className={`${CONTAINER} px-0 md:px-4`}>
          <div className="block items-center md:gap-[55px] min-[992px]:flex">
            <div className="overflow-hidden pb-10 pl-4 min-[1200px]:p-0">
              <div className="flex items-center justify-between">
                <div>
                  <h6 className="mb-1 text-base font-semibold leading-[normal] md:text-[1.875rem]">
                    Introducing
                  </h6>
                  <h2 className="m-0 inline-block bg-gradient-to-b from-[#02060E] via-[#004D0A] to-[#007D10] bg-clip-text text-transparent bg-clip-text text-[2rem] font-bold leading-[normal] tracking-[0] text-transparent md:mb-6 md:text-[56px]">
                    {" "}
                    SunSure Promise{" "}
                  </h2>
                </div>
                <div className="block md:hidden">
                  <img
                    src={`/landing/shield.webp`}
                    width={150}
                    height={168}
                    alt=""
                    className="inline-block h-full w-[150px] align-middle"
                  />
                </div>
              </div>
              <p className="-mt-[33px] mb-0 w-[340px] text-[24px] font-semibold leading-6 text-[#1a1f38] md:mt-0 md:text-[1.25rem] md:leading-[26px]" />

              <p className="-mt-[33px] mb-4 w-[340px] text-[24px] font-semibold leading-6 text-[#1a1f38] md:mt-0 md:text-[1.25rem] md:leading-[26px]" />

              <button
                type="button"
                className="inline-flex items-center gap-2 border-0 bg-transparent p-0 text-sm font-semibold text-black md:hidden"
                onClick={() => openModal("Know More")}
              >
                Know More about SunSure Promise
                <ArrowRight size={18} strokeWidth={2} />
              </button>

              <Button
                type="button"
                onClick={() => openModal("Know More about SunSure Promise")}
                className="mx-0 box-border hidden h-12 w-full max-w-full rounded-xl bg-gradient-to-r from-[#007D10] via-[#004D0A] to-[#02060E] px-4 text-sm font-bold text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#02060E] hover:to-[#02060E] hover:shadow-black/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none md:block md:h-14"
              >
                Know More about SunSure Promise
              </Button>

            </div>

            <div className="hidden md:block md:flex-[0.57]">
              <div className="-mx-3 flex flex-wrap">
                {GOODZERO_POINTS.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div
                      className="w-1/2 max-w-full shrink-0 p-4"
                      key={point.heading}
                    >
                      {/* Icon */}
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-blue-50 text-[#56a733]">
                        <Icon size={28} strokeWidth={1.8} />
                      </div>

                      {/* Heading */}
                      <h3 className="mb-3 mt-2 text-2xl font-bold leading-tight text-[#1a1f38] lg:text-[1.75rem]">
                        {point.heading}
                      </h3>

                      {/* Subheading */}
                      <p className="mb-0 text-base leading-7 text-[#5f6678] lg:text-lg lg:leading-8">
                        {point.subheading}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- estimator */}
      <section className="relative overflow-hidden bg-black py-10 text-[14px] text-white md:py-[72px]">
        {/* Background accents */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#56a733]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#0e78b9]/10 blur-[140px]" />

        <div className={`${CONTAINER} relative z-[1] px-4 min-[1200px]:px-3`}>
          <div className="-mx-3 flex flex-wrap items-center">
            <div className="w-full max-w-full shrink-0 px-3 md:flex md:gap-[100px] lg:gap-[120px]">
              {/* LEFT COLUMN */}
              <div className="min-w-0 min-[992px]:w-[41.66666667%] min-[992px]:flex-none">
                <div>

                  <h6 className="mb-4 text-[32px] font-bold leading-[1.15] tracking-[-1px] md:mb-5 md:text-[3.5rem] md:leading-[1.15]">
                    Go Solar with{" "}
                    <span className="mt-2 block bg-gradient-to-r from-[#b5e69c] via-[#76d34d] to-[#c5f5b3] bg-clip-text pb-1 text-transparent">
                      {zeroInvestment
                        ? "Zero Investment"
                        : "Zero Downpayment"}
                    </span>
                  </h6>

                  <p className="mb-6 max-w-xl text-base font-medium leading-7 text-white/65 md:mb-10 md:text-[1.25rem] md:leading-8">
                    Government subsidy covers your downpayment, and monthly solar
                    savings help cover your EMI.
                  </p>

                  {/* Benefits */}
                  <div className="mb-8 space-y-4 md:mb-10">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#56a733]/15 text-[#76d34d]">
                        <Check size={15} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="m-0 font-semibold text-white">
                          Lower electricity bills
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white/45">
                          Reduce your dependence on grid electricity.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#56a733]/15 text-[#76d34d]">
                        <Check size={15} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="m-0 font-semibold text-white">
                          Calculate your solar savings
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white/45">
                          Estimate your system requirements and investment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#56a733]/15 text-[#76d34d]">
                        <Check size={15} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="m-0 font-semibold text-white">
                          Expert solar consultation
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white/45">
                          Get guidance for your property and energy needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <CtaBox onOpen={() => openModal("Talk to our Experts")} />
                </div>
              </div>

              {/* RIGHT COLUMN: SOLAR CALCULATOR */}
              <div className="mt-8 min-w-0 flex-1 md:mt-0 min-[992px]:w-[41.66666667%] min-[992px]:flex-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-7 md:p-8"
                >
                  {/* Calculator glow */}
                  <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#56a733]/10 blur-[80px]" />

                  <div className="relative z-[1]">
                    {/* Heading */}
                    <div className="mb-7">
                      <div className="mb-3 flex items-center gap-3">


                        <div>
                          <h3 className="m-0 text-2xl font-bold tracking-tight text-white sm:text-[28px]">
                            Solar Calculator
                          </h3>

                        </div>
                      </div>

                    </div>

                    <form
                      onSubmit={calculateSolarRequirements}
                      className="space-y-5"
                      noValidate
                    >
                      {/* BI-MONTHLY BILL */}
                      <div>
                        <label
                          htmlFor="solar-bi-monthly-bill"
                          className="mb-2 block text-sm font-semibold text-white/85 sm:text-base"
                        >
                          Bi-Monthly Electricity Bill
                          <span className="ml-1 text-white/40">(₹)</span>
                        </label>

                        <div
                          className={`group flex h-[54px] items-center gap-3 rounded-xl border bg-white/[0.035] px-4 transition-all duration-300 focus-within:bg-white/[0.06] focus-within:ring-2 focus-within:ring-[#56a733]/15 ${solarErrors.bill
                            ? "border-red-500/70"
                            : "border-white/10 focus-within:border-[#56a733]/70"
                            }`}
                        >
                          <IndianRupee
                            size={19}
                            className="shrink-0 text-[#76d34d]"
                          />

                          <input
                            id="solar-bi-monthly-bill"
                            type="number"
                            min="1000"
                            step="1"
                            value={solarBill}
                            onChange={(event) => {
                              setSolarBill(event.target.value);
                              setSolarErrors((previous) => ({
                                ...previous,
                                bill: undefined,
                              }));
                            }}
                            placeholder="Enter your electricity bill"
                            aria-invalid={Boolean(solarErrors.bill)}
                            aria-describedby={
                              solarErrors.bill
                                ? "solar-bill-error"
                                : undefined
                            }
                            className="h-full min-w-0 flex-1 border-0 bg-transparent text-base text-white outline-none placeholder:text-white/30 focus:ring-0"
                          />
                        </div>

                        {solarErrors.bill && (
                          <p
                            id="solar-bill-error"
                            className="mt-2 text-sm text-red-400"
                          >
                            {solarErrors.bill}
                          </p>
                        )}
                      </div>

                      {/* ROOF AREA */}
                      <div>
                        <label
                          htmlFor="solar-roof-area"
                          className="mb-2 block text-sm font-semibold text-white/85 sm:text-base"
                        >
                          Available Roof Area
                          <span className="ml-1 text-white/40">(sq ft)</span>
                        </label>

                        <div
                          className={`group flex h-[54px] items-center gap-3 rounded-xl border bg-white/[0.035] px-4 transition-all duration-300 focus-within:bg-white/[0.06] focus-within:ring-2 focus-within:ring-[#56a733]/15 ${solarErrors.roofArea
                            ? "border-red-500/70"
                            : "border-white/10 focus-within:border-[#56a733]/70"
                            }`}
                        >
                          <Ruler
                            size={19}
                            className="shrink-0 text-[#76d34d]"
                          />

                          <input
                            id="solar-roof-area"
                            type="number"
                            min="1"
                            step="1"
                            value={solarRoofArea}
                            onChange={(event) => {
                              setSolarRoofArea(event.target.value);
                              setSolarErrors((previous) => ({
                                ...previous,
                                roofArea: undefined,
                              }));
                            }}
                            placeholder="Enter available roof area"
                            aria-invalid={Boolean(solarErrors.roofArea)}
                            aria-describedby={
                              solarErrors.roofArea
                                ? "solar-roof-error"
                                : undefined
                            }
                            className="h-full min-w-0 flex-1 border-0 bg-transparent text-base text-white outline-none placeholder:text-white/30 focus:ring-0"
                          />
                        </div>

                        {solarErrors.roofArea && (
                          <p
                            id="solar-roof-error"
                            className="mt-2 text-sm text-red-400"
                          >
                            {solarErrors.roofArea}
                          </p>
                        )}
                      </div>

                      {/* LOCATION */}
                      <div>
                        <label
                          htmlFor="solar-location"
                          className="mb-2 block text-sm font-semibold text-white/85 sm:text-base"
                        >
                          Location
                        </label>

                        <div className="relative">
                          <MapPin
                            size={19}
                            className="pointer-events-none absolute left-4 top-1/2 z-[1] -translate-y-1/2 text-[#76d34d]"
                          />

                          <select
                            id="solar-location"
                            value={solarLocation}
                            onChange={(event) =>
                              setSolarLocation(event.target.value)
                            }
                            className="h-[54px] w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-transparent pl-11 pr-10 text-base text-white outline-none transition-all hover:border-white/20 focus:border-[#56a733]/70 focus:ring-2 focus:ring-[#56a733]/15"
                          >
                            <option
                              value="tamil-nadu"
                              className="bg-[#15192c] text-white"
                            >
                              Tamil Nadu
                            </option>
                            <option
                              value="kerala"
                              className="bg-[#15192c] text-white"
                            >
                              Kerala
                            </option>
                            <option
                              value="karnataka"
                              className="bg-[#15192c] text-white"
                            >
                              Karnataka
                            </option>
                            <option
                              value="andhra-pradesh"
                              className="bg-[#15192c] text-white"
                            >
                              Andhra Pradesh
                            </option>
                          </select>

                          <ChevronDown
                            size={18}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50"
                          />
                        </div>
                      </div>

                      {/* CALCULATE BUTTON */}
                      <button
                        type="submit"
                        className="group relative flex h-[54px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#56a733] to-[#398b28] px-4 text-sm font-bold text-white shadow-lg shadow-[#56a733]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#56a733]/20 focus:outline-none focus:ring-2 focus:ring-[#76d34d] focus:ring-offset-2 focus:ring-offset-[#111729] active:translate-y-0 sm:text-base"
                      >
                        <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />

                        <Calculator size={19} className="relative" />
                        <span className="relative">
                          Calculate Solar Requirements
                        </span>
                        <ArrowRight
                          size={18}
                          className="relative transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </form>


                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* EXPANDABLE SOLAR RESULTS */}
          <AnimatePresence>
            {showSolarResults && solarResults && (
              <motion.div
                ref={solarResultsRef}
                key="solar-results-container"
                initial={{ opacity: 0, height: 0, y: 35, scale: 0.98 }}
                animate={{ opacity: 1, height: "auto", y: 0, scale: 1 }}
                exit={{ opacity: 0, height: 0, y: 20, scale: 0.98 }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="scroll-mt-24 mt-10 overflow-hidden md:mt-14"
                aria-live="polite"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-7 md:p-9">
                  {/* Results background accent */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#56a733]/10 blur-[100px]" />

                  <div className="relative z-[1]">
                    {/* RESULTS HEADER */}
                    <div className="mb-7">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">

                          <div>
                            <h3 className="m-0 text-xl font-bold text-white sm:text-2xl md:text-[28px]">
                              Your Solar System Estimate
                            </h3>
                            <p className="mt-1 text-xs font-medium tracking-wide text-white/40">
                              YOUR PERSONALIZED RESULTS
                            </p>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#56a733]/20 bg-[#56a733]/10 px-3 py-1.5">
                          <CheckCircle2
                            size={15}
                            className="text-[#76d34d]"
                          />
                          <span className="text-xs font-semibold text-[#a7e68d]">
                            Calculation complete
                          </span>
                        </div>
                      </div>


                    </div>

                    {/* RESULT CARDS */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.07,
                            delayChildren: 0.1,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
                    >
                      {/* SYSTEM SIZE */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.35, ease: "easeOut" },
                          },
                        }}
                        className="group rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#56a733]/40 hover:bg-white/[0.045] sm:p-6"
                      >
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#56a733]/10 text-[#76d34d]">
                              <Sun size={20} />
                            </div>
                            <h4 className="m-0 text-base font-semibold text-white/85 sm:text-lg">
                              System Size
                            </h4>
                          </div>
                          <ArrowUpRight
                            size={17}
                            className="text-white/20 transition-colors group-hover:text-[#76d34d]"
                          />
                        </div>

                        <p className="mb-1 text-3xl font-bold tracking-tight text-[#76d34d]">
                          {solarResults.systemSize} kW
                        </p>
                        <p className="m-0 text-sm leading-6 text-white/45">
                          Recommended capacity for your consumption
                        </p>
                      </motion.div>

                      {/* ESTIMATED COST */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.35, ease: "easeOut" },
                          },
                        }}
                        className="group rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#56a733]/40 hover:bg-white/[0.045] sm:p-6"
                      >
                        <div className="mb-4 flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-white/70">
                            <IndianRupee size={20} />
                          </div>
                          <h4 className="m-0 text-base font-semibold text-white/85 sm:text-lg">
                            Estimated Cost
                          </h4>
                        </div>

                        <p className="mb-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          ₹{solarResults.systemCost.toLocaleString("en-IN")}
                        </p>
                        <p className="m-0 text-sm leading-6 text-white/45">
                          Estimated cost before subsidy
                        </p>
                      </motion.div>

                      {/* COST AFTER SUBSIDY */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.35, ease: "easeOut" },
                          },
                        }}
                        className="group rounded-xl border border-[#56a733]/20 bg-gradient-to-br from-[#56a733]/[0.08] to-transparent p-5 transition-all duration-300 hover:border-[#56a733]/40 sm:p-6"
                      >
                        <div className="mb-4 flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#56a733]/15 text-[#76d34d]">
                            <IndianRupee size={20} />
                          </div>
                          <h4 className="m-0 text-base font-semibold text-white/85 sm:text-lg">
                            Cost After Subsidy
                          </h4>
                        </div>

                        <p className="mb-1 text-2xl font-bold tracking-tight text-[#76d34d] sm:text-3xl">
                          ₹{solarResults.subsidizedCost.toLocaleString("en-IN")}
                        </p>
                        <p className="m-0 text-sm leading-6 text-white/45">
                          Estimated cost after subsidy
                        </p>
                      </motion.div>

                      {/* ANNUAL SAVINGS */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.35, ease: "easeOut" },
                          },
                        }}
                        className="group rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#56a733]/40 hover:bg-white/[0.045] sm:p-6"
                      >
                        <div className="mb-4 flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#56a733]/10 text-[#76d34d]">
                            <Battery size={20} />
                          </div>
                          <h4 className="m-0 text-base font-semibold text-white/85 sm:text-lg">
                            Annual Savings
                          </h4>
                        </div>

                        <p className="mb-1 text-2xl font-bold tracking-tight text-[#76d34d] sm:text-3xl">
                          ₹{solarResults.annualSavings.toLocaleString("en-IN")}
                        </p>
                        <p className="m-0 text-sm leading-6 text-white/45">
                          Estimated yearly electricity savings
                        </p>
                      </motion.div>

                      {/* PAYBACK PERIOD */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.35, ease: "easeOut" },
                          },
                        }}
                        className="group rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#56a733]/40 hover:bg-white/[0.045] sm:p-6"
                      >
                        <div className="mb-4 flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-white/70">
                            <Clock size={20} />
                          </div>
                          <h4 className="m-0 text-base font-semibold text-white/85 sm:text-lg">
                            Payback Period
                          </h4>
                        </div>

                        <p className="mb-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          {solarResults.paybackPeriod} years
                        </p>
                        <p className="m-0 text-sm leading-6 text-white/45">
                          Estimated time to recover your investment
                        </p>
                      </motion.div>

                      {/* ROOF AREA */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.35, ease: "easeOut" },
                          },
                        }}
                        className="group rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#56a733]/40 hover:bg-white/[0.045] sm:p-6"
                      >
                        <div className="mb-4 flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-white/70">
                            <BarChart size={20} />
                          </div>
                          <h4 className="m-0 text-base font-semibold text-white/85 sm:text-lg">
                            Roof Area Needed
                          </h4>
                        </div>

                        <p className="mb-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          {solarResults.areaNeeded} sq ft
                        </p>

                        <p
                          className={`m-0 flex items-center gap-1.5 text-sm leading-6 ${solarResults.roofAreaSufficient
                            ? "text-[#83dc5b]"
                            : "text-amber-400"
                            }`}
                        >
                          {solarResults.roofAreaSufficient ? (
                            <CheckCircle2 size={15} className="shrink-0" />
                          ) : (
                            <AlertCircle size={15} className="shrink-0" />
                          )}

                          {solarResults.roofAreaSufficient
                            ? "Your roof area is sufficient"
                            : "Your roof area may be insufficient"}
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* RESULTS CTA */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
                        },
                      }}
                      initial="hidden"
                      animate="show"
                      className="relative mt-6 overflow-hidden rounded-xl border border-[#56a733]/20 bg-gradient-to-br from-[#56a733]/10 via-[#56a733]/[0.04] to-transparent p-5 text-center sm:p-8"
                    >
                      <div className="pointer-events-none absolute -right-10 -top-20 h-40 w-40 rounded-full bg-[#56a733]/10 blur-[60px]" />

                      <div className="relative z-[1]">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#56a733]/25 bg-[#56a733]/10 text-[#83dc5b]">
                          <ShieldCheck size={25} />
                        </div>

                        <h4 className="mb-2 text-lg font-bold text-white sm:text-xl">
                          Ready to start saving?
                        </h4>

                        <p className="mx-auto mb-5 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                          Get a detailed consultation from our experts and discover
                          the right solar solution for your property.
                        </p>

                        <button
                          type="button"
                          onClick={() => openModal("Talk to our Experts")}
                          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#56a733] to-[#398b28] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#56a733]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#56a733]/20 sm:text-base"
                        >
                          Get Free Consultation
                          <ArrowRight
                            size={19}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MOBILE CTA */}
        <div className="relative z-[1] mt-8 block md:hidden">
          <CtaBox onOpen={() => openModal("Talk to our Experts")} />
        </div>
      </section>

      {/* ------------------------------------------------------ pride stats */}
      <div className="px-4 py-10 min-[1200px]:px-0 min-[1200px]:py-24">
        <div className={`${CONTAINER} px-0 md:px-4`}>
          <h2 className="mb-4 text-[1.75rem] font-bold leading-[normal] tracking-[0] md:mb-14 md:text-center md:text-[36px] md:tracking-[-1px]">
            {" "}
            Powering Homes Across India
          </h2>
          <div className="-mx-1.5 -mt-3 mb-7 flex flex-wrap md:mx-auto md:mt-0 md:max-w-[90%]">
            {STATS.map((stat) => (
              <StatCard stat={stat} key={stat.label} />
            ))}
          </div>
          <div className="text-center md:mx-auto md:mt-7 md:flex md:w-[90%] md:items-center md:justify-between md:rounded-xl md:border md:border-[#e3f8ff] md:bg-[linear-gradient(45deg,#f5f9fa,#f1fbff)]">
            <div className="mb-3 flex items-center justify-center gap-3 rounded-xl border border-[#e3f8ff] bg-[linear-gradient(45deg,#f1fbff,#fff)] p-4 md:m-0 md:border-0 md:bg-none md:py-6 md:pl-6 md:pr-0">
              <img src={`/landing/tamil_nadu.png`} width={50} height={50} alt="Map" className="inline-block" />
              <div>
                <p className="mb-0 text-left text-[0.875rem] font-medium tracking-[-0.5px] md:text-[1.25rem]">
                  From your hometown to homes across Tamil Nadu.                 </p>
              </div>
            </div>
            <button
              className="block h-[50px] w-full cursor-pointer rounded-lg border-0 bg-gradient-to-r from-[#007D10] via-[#004D0A] to-[#02060E] p-[1.2rem] text-center text-[0.875rem] font-semibold leading-[10px] text-white md:mx-6 md:my-4 md:w-[21.5rem] md:px-[1.2rem] md:py-4"
              type="button"
              onClick={() => openModal("Unlock Your Solar Savings")}
            >
              Check My Solar Savings             </button>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- app */}
      <section className="relative mb-10 overflow-hidden bg-[url('/landing/app-bg.webp')] bg-cover bg-center bg-no-repeat pt-10 min-[1200px]:mb-0 min-[1200px]:pt-0">
        <div className={`${CONTAINER} px-3 md:px-[50px] min-[1200px]:px-3`}>
          <div className="items-center md:flex md:justify-between md:gap-10 md:py-[50px]">

            {/* Left: App Preview and Feature Cards */}
            <div className="relative mb-8 flex min-w-0 justify-center md:mb-0 md:flex-1">

              {/* Phone Image */}
              <img
                src="landing/app.webp"
                alt="Solar monitoring app preview"
                height={580}
                width={500}
                className="relative z-[1] block h-auto w-full max-w-[420px] object-contain md:max-w-[500px]"
              />

              {/* Feature Cards */}
              {APP_FEATURES.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    className={`absolute z-[2] w-[130px] rounded-xl border border-[#e4e5f9] bg-white/90 px-3 py-[9px] text-start text-[14px] font-medium shadow-[0_4px_14px_rgba(0,0,0,0.1)] backdrop-blur-[17.6px] md:w-[178px] md:p-3 ${FEATURE_POS[index]}`}
                    key={feature.label}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="mb-[5px] inline-block rounded-full bg-[#ecf1fb] p-1.5 text-[#007D10]"
                    />

                    <p className="mb-0 text-[0.625rem] font-semibold leading-4 md:text-[0.875rem] md:leading-[18px] md:text-[#2c3045]">
                      {feature.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right: Content */}
            <div className="relative z-[3] min-w-0 text-center md:flex-[0.8] md:text-left">
              <h2 className="mb-4 text-[28px] font-bold leading-[1.2] text-[#1a1f38] md:mb-2 md:text-[36px] md:tracking-[-1px]">
                Real-time Monitoring App
              </h2>

              <p className="mb-5 text-base font-medium leading-6 text-[#1a1f38] md:mb-8 md:mt-3 md:text-[24px] md:leading-[30px] md:tracking-[-1px]">
                Monitor your solar generation with the app.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* ------------------------------------------------------ testimonials */}
      <section className="px-4 pb-32 md:bg-[#f5f8fd] md:px-0 md:py-[100px]">
        <div className={`${CONTAINER} p-0 md:p-4`}>
          {/* Header with Google Reviews summary */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-sm">
                <GoogleLogo className="h-4 w-4 shrink-0" />
                <span>Google Verified Reviews</span>
                <span className="tracking-wider text-amber-500 font-bold">★★★★★</span>
                <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[11px] font-bold text-emerald-700">
                  4.9 / 5
                </span>
              </div>
              <h2 className="mb-1 text-[1.75rem] font-bold leading-tight text-[#1a1f38] md:text-[36px] md:tracking-[-1px]">
                Happy Customers
              </h2>
              <p className="m-0 text-sm text-[#5d627c] md:text-base">
                Real feedback and verified 5-star Google reviews from homeowners across Tamil Nadu.
              </p>
            </div>

          </div>

          <div className="mt-6 md:pt-2">
            <div className="-mx-3 flex items-stretch overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:p-0">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  className="mx-2 flex w-[285px] shrink-0 flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md md:mx-0 md:w-auto md:p-6"
                  key={testimonial.name}
                >
                  <div>
                    {/* Top row: 5 Stars + Google Badge */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={15} fill="currentColor" stroke="none" />
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-1.5 rounded-md bg-[#f8f9fc] px-2 py-1 text-[11px] font-medium text-slate-600">
                        <GoogleLogo className="h-3.5 w-3.5 shrink-0" />
                        <span>Google Review</span>
                      </div>
                    </div>

                    {/* Testimonial text */}
                    <p className="m-0 text-sm leading-relaxed text-[#1a1f38] md:text-[0.95rem] md:leading-6">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>

                  {/* Customer details */}
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="m-0 truncate text-sm font-semibold text-[#182150]">
                          {testimonial.name}
                        </p>
                        <CheckCircle2 size={14} className="shrink-0 text-emerald-600" />
                      </div>
                      <p className="m-0 text-xs text-[#5d627c]">
                        {testimonial.location} • {testimonial.date}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="m-0 h-1 w-full bg-[#ecf1fb]" />

      {/* ------------------------------------------------------- sticky CTA */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[2] flex justify-between gap-2 bg-white px-4 py-3 backdrop-blur-[20px] transition-all duration-300 ease-[ease] md:hidden ${stickyVisible ? "visible translate-y-0 opacity-100" : "invisible translate-y-[50px] opacity-0"
          }`}
      >
        <a
          href="#review-section"
          role="button"
          className="block w-full rounded-lg border-2 border-[#182150] p-4 text-center text-[14px] font-semibold text-[#182150] no-underline"
        >
          Get Free Quote
        </a>
      </div>

      {/* ----------------------------------------------------------- modal */}
      <AnimatePresence>
        {modal.open && (
          <motion.div
            className="fixed inset-0 z-[1055] overflow-x-hidden overflow-y-auto outline-none"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                setModal({ open: false, title: modal.title });
              }
            }}
          >
            {/* Dark background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/65 backdrop-blur-sm"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Modal container */}
            <div className="relative z-10 flex min-h-full items-end justify-center sm:items-center sm:p-4 md:p-6">
              <motion.div
                className="relative my-0 flex max-h-[95vh] w-full max-w-[560px] flex-col overflow-hidden rounded-t-2xl border border-white/20 bg-white shadow-2xl sm:my-8 sm:rounded-2xl"
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseDown={(e) => e.stopPropagation()}
              >
                {/* Modal header */}
                <div className="relative shrink-0 border-b border-gray-100 bg-gradient-to-r from-green-50 via-white to-blue-50 px-5 py-5 sm:px-7 sm:py-6">
                  <button
                    type="button"
                    aria-label="Close modal"
                    onClick={() =>
                      setModal({ open: false, title: modal.title })
                    }
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:rotate-90 hover:border-gray-300 hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        d="M18 6 6 18M6 6l12 12"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  <div className="pr-10">


                    <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl">
                      {modal.title}
                    </h2>

                    <p className="mb-0 text-sm leading-6 text-gray-600 sm:text-base">
                      Save up to 90% on electricity bills by switching to solar.
                    </p>
                  </div>
                </div>

                {/* Scrollable form content */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white p-4 sm:p-6">
                  {/* Form tabs */}
                  <div
                    className="mb-5 grid grid-cols-3 gap-2 rounded-xl border border-gray-200 bg-gray-50 p-1.5"
                    role="tablist"
                    aria-label="Solar consultation type"
                  >
                    {formTypes.map(({ id, label, icon: Icon }) => {
                      const isActive = activeForm === id;

                      return (
                        <button
                          key={id}
                          id={`modal-tab-${id}`}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-controls="modal-lead-form"
                          onClick={() => setActiveForm(id)}
                          className={`flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-lg px-1.5 py-3 text-center text-xs font-semibold transition-all duration-200 sm:flex-row sm:gap-2 sm:px-3 sm:text-sm ${isActive
                            ? "bg-gradient-to-r bg-gray-500 text-white shadow-md shadow-green-900/20"
                            : "text-gray-600 hover:bg-white hover:text-gray-900"
                            }`}
                        >
                          <Icon size={18} className="shrink-0" />
                          <span>{label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Animated lead form */}
                  <div id="modal-lead-form">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeForm}
                        role="tabpanel"
                        aria-labelledby={`modal-tab-${activeForm}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <LeadForm
                          key={activeForm}
                          type={activeForm}
                          title={activeFormMeta.title}
                          description={activeFormMeta.description}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Privacy note */}
                  <div className="mt-5 flex items-center justify-center gap-2 border-t border-gray-100 pt-4 text-center text-xs text-gray-500">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 shrink-0 text-green-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m9 12 2 2 4-4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>
                      Your information is secure.{" "}
                      <span className="font-semibold text-green-700">
                        No spam. 100% Free.
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
