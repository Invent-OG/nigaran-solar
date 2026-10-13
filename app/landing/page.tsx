/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";

/* ==========================================================================
   Landing page — faithful port of the reference "city page + hero-v2"
   template (Coimbatore). Markup, class names, copy and image assets mirror
   the reference page 1:1; the styling lives in ./landing.css.
   ========================================================================== */

const IMG = "/landing";

/* ------------------------------------------------------------------- data */



const HERO_TAGS = [
  { icon: `${IMG}/icon-solar-power.png`, label: "10+ Years of Experience" },
  { icon: `${IMG}/icon-house.png`, label: "60,000+ Homes Solarised" },
  { icon: `${IMG}/icon-bolt.png`, label: "200MW+ Installation Experience" },
  { icon: `${IMG}/icon-solar-power.png`, label: "₹100Cr+ Savings Across India" },
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
    img: `${IMG}/promise-1.webp`,
    heading: "All-Weather Reliability",
    desc: "Engineered to perform in heavy rain, strong winds, and extreme heat.",
  },
  {
    img: `${IMG}/promise-2.webp`,
    heading: "Seamless Solar Experience",
    desc: "Expert guidance, hassle-free installation, and quick subsidy support.",
  },
  {
    img: `${IMG}/promise-3.webp`,
    heading: "Care Beyond Installation",
    desc: "Dedicated assistance for years after you switch to solar.",
  },
  {
    img: `${IMG}/promise-4.webp`,
    heading: "Generation Commitment",
    desc: "Support throughout your solar journey.",
  },
];

const GOODZERO_POINTS = [
  { icon: `${IMG}/icon-savings.svg`, heading: "Generation guarantee or ₹8/unit Money Back" },
  { icon: `${IMG}/icon-payments.svg`, heading: "₹0 Repair and Replacement cost" },
  { icon: `${IMG}/icon-settings.svg`, heading: "Proactive service visits" },
  { icon: `${IMG}/icon-water-damage.svg`, heading: "App to track real-time power generation" },
];

/* Savings/EMI figures for the estimator (per system size, tenure order below). */
const TENURES = [60, 24, 12, 6];
const SYSTEM_SIZES = [
  { kw: 3, bill: "₹ 1500 to ₹ 2500", saving: 4700, emis: [3150, 6900, 12900, 24500] },
  { kw: 4, bill: "₹ 2500 to ₹ 4000", saving: 6300, emis: [4200, 9200, 17200, 32800] },
  { kw: 5, bill: "₹ 4000 to ₹ 8000", saving: 8200, emis: [5400, 11800, 22100, 42000] },
];

const STATS = [
  { icon: `${IMG}/icon-homes.webp`, count: 60000, prefix: "", suffix: "+", label: "Homes Solarized" },
  { icon: `${IMG}/icon-power.webp`, count: 200, prefix: "", suffix: "+ MW", label: "Power Installed" },
  { icon: `${IMG}/icon-subsidy.webp`, count: 300, prefix: "₹ ", suffix: "+ Cr", label: "Subsidy Delivered" },
  { icon: `${IMG}/icon-national.webp`, count: 1, prefix: "#", suffix: " Home Solar", label: "On National Portal" },
];

const APP_FEATURES = [
  { icon: `${IMG}/app-icon-generation.png`, label: "Track your power generation" },
  { icon: `${IMG}/app-icon-savings.svg`, label: "Get 100% visibility on your savings" },
  { icon: `${IMG}/app-icon-rewards.svg`, label: "Track your referrals & rewards on the go" },
  { icon: `${IMG}/app-icon-transparency.svg`, label: "Full transparency on promised vs. actual generation" },
];

const TESTIMONIALS = [
  {
    text: "From consultation to installation, everything was smooth! My plant generates 22–24 units daily, and I’ve seen a 70% drop in electricity bills.",
    name: "Dr. Sudhakar Shukla",
    avatar: `${IMG}/avatar-1.jpeg`,
  },
  {
    text: "SolarSquare truly impressed me. The installation was clean, damage-free, and looked better than others. Overall, a smooth and satisfying experience.",
    name: "Samir Patil",
    avatar: `${IMG}/avatar-2.png`,
  },
  {
    text: "My solar journey with SolarSquare has been smooth and satisfying. Bills dropped from ₹18,000 to ₹0! Timely cleaning ensures 50–55 units generated daily.",
    name: "Santosh Singh",
    avatar: `${IMG}/avatar-3.jpeg`,
  },
];



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

type LeadFormProps = {
  variant: "hero" | "modal";
  title: string;
  desc?: string;
  buttonLabel?: string;
};

function LeadForm({ variant, title, desc, buttonLabel = "Submit Details" }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bill, setBill] = useState(BILL_OPTIONS[0]);
  const [pincode, setPincode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean; pincode?: boolean }>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next = {
      name: name.trim().length === 0,
      phone: !/^\d{10}$/.test(phone),
      pincode: !/^\d{6}$/.test(pincode),
    };
    setErrors(next);
    if (next.name || next.phone || next.pincode) return;
    setSubmitted(true);
  };

  return (
    <div className="form-component">
      <form
        className="needs-validation book-consultation-form leadForm variation-city-hero"
        onSubmit={handleSubmit}
        noValidate
      >
        <h2 className="title fw-bold">{title}</h2>
        {desc ? <p className="desc">{desc}</p> : null}

        <div className="form-field-outer-wrapper">
          <div className="form-floating form-field-inner-wrapper">
            <input
              type="text"
              className="form-control"
              id={`${variant}-full_name`}
              name="full_name"
              placeholder="Full Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor={`${variant}-full_name`}>Full Name</label>
            <div className={`invalid-feedback${errors.name ? " d-block" : ""}`}>
              Please enter your name.
            </div>
          </div>

          <div className="form-floating form-field-inner-wrapper">
            <input
              type="tel"
              className="form-control"
              id={`${variant}-whatsapp_number`}
              name="whatsapp_number"
              placeholder="Whatsapp Number"
              maxLength={10}
              value={phone}
              onChange={(event) => setPhone(event.target.value.replace(/\D/g, ""))}
            />
            <label htmlFor={`${variant}-whatsapp_number`}>Whatsapp Number</label>
            <div className={`invalid-feedback${errors.phone ? " d-block" : ""}`}>
              Enter a valid 10-digit number.
            </div>
          </div>

          <div className="bill-field form-field-wrpaper">
            <label className="form-label bill-label">Monthly Electricity Bill</label>
            <img
              id={`${variant}-tooltip-info`}
              src={`${IMG}/tooltip-info.webp`}
              className="tooltip-info"
              alt="Info Image"
              width={16}
              height={16}
            />
            <div className="custom-radio-block d-flex">
              {BILL_OPTIONS.map((option) => (
                <div
                  key={option}
                  className={`custom-radio${option === bill ? " active" : ""}`}
                  data-value={option}
                  role="button"
                  tabIndex={0}
                  onClick={() => setBill(option)}
                  onKeyDown={(event) => event.key === "Enter" && setBill(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <div className="form-floating form-field-inner-wrapper">
            <input
              type="text"
              className="form-control"
              id={`${variant}-pincode`}
              name="pincode"
              placeholder="PIN Code"
              maxLength={6}
              value={pincode}
              onChange={(event) => setPincode(event.target.value.replace(/\D/g, ""))}
            />
            <label htmlFor={`${variant}-pincode`}>PIN Code</label>
            <div className={`invalid-feedback${errors.pincode ? " d-block" : ""}`}>
              Enter a 6-digit pincode
            </div>
          </div>

          <div className="form-check p-0 d-flex align-items-start form-field-inner-wrapper check_terms_policy">
            <img src={`${IMG}/check-box.webp`} alt="check-policy" width={20} height={20} />
            <label className="form-check-label" htmlFor="policyCheck">
              I agree to SolarSquare{" "}
              <a href="/terms-of-use" className="terms-of-use">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="privacy-policy">
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </div>

        <button type="submit" className="btn w-100 cta-btn position-relative">
          {variant === "hero" ? "Book a FREE Consultation " : buttonLabel}
        </button>

        <div className={`form-alert success_message alert alert-success mt-2${submitted ? "" : " d-none"}`}>
          Details submitted successfully. Our team will contact you shortly.
        </div>
        <div className="form-error-message text-danger mt-1"></div>
      </form>
    </div>
  );
}



/* ------------------------------------------------------------------- stats */

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, value } = useCountUp(stat.count);
  return (
    <div className="col-6 col-md-3 card-outer-wrapper">
      <div className="card-wrapper rounded-3">
        <img src={stat.icon} alt="" width={36} height={36} />
        <h4>
          <span className="fw-bold counter" ref={ref}>
            {stat.prefix}
            {stat.count === 1 && value === 1 ? "#1" : inr(value)}
          </span>
          <span>{stat.suffix}</span>
        </h4>
        <p className="m-0">{stat.label}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- page */

export default function LandingPage() {
  const [size, setSize] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const [modal, setModal] = useState<{ open: boolean; title: string }>({
    open: false,
    title: "Talk to a Solar Expert",
  });
  const [stickyVisible, setStickyVisible] = useState(false);

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

  return (
    <div
      className="ssq city-container city-page-template revamp-page-template city-hero-v2"
      data-city="coimbatore"
    >

      {/* ------------------------------------------------------------ hero */}
      <section className="hero-section city-hero">
        <div className="hero-visual">
          <div className="hero-media">
            <picture>
              <source media="(max-width: 767.98px)" srcSet={`${IMG}/hero-mobile.webp`} sizes="100vw" />
              <img
                width={2560}
                height={1333}
                src={`${IMG}/hero banner.webp`}
                className="hero-media-img"
                alt="Coimbatore"
                sizes="(max-width: 767px) 100vw, 1440px"
              />
            </picture>
          </div>

          <div className="container">
            <div className="hero-copy">
              <h2 className="hero-title">Coimbatore, Go Solar at Zero Investment!</h2>
              <p className="hero-subtitle">
                Save up to 90% on electricity bills with government subsidy and easy EMI.
              </p>
            </div>
            <div className="hero-tags">
              <div className="hero-tags-bar">
                {HERO_TAGS.map((tag) => (
                  <div className="hero-tag" key={tag.label}>
                    <img className="hero-tag-icon" src={tag.icon} width={19} height={19} alt="" />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-rating js-form-scroll">
            <div className="rating-detail">
              <div className="rating-strip text-center">
                <img src={`${IMG}/google-logo.webp`} width={16} height={16} alt="Google logo" />
                Rated <span className="rate-span">★ 4.8</span> on Google{" "}
                <span className="rating-sep">|</span> <span> 15000+ ratings</span>
              </div>
            </div>
          </div>
        </div>

        <div id="review-section" className="right-section">
          <div className="right-section-wrapper">
            <div className="form-section" id="lead-form">
              <div id="sse-lead-form">
                <LeadForm
                  variant="hero"
                  title="Book a FREE Solar Consultation"
                  desc="And save up to ₹ 78,000 with subsidy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- promises */}
      <section className="goodzero-promise">
        <div className="container ">
          <h2 className="fw-bold text-md-center">Why Families Across India Trust SolarSquare</h2>
          <div className="g-4 promises-wrapper">
            {PROMISES.map((promise) => (
              <div className="promise-inner-wrapper text-md-center" key={promise.heading}>
                <div>
                  <div className="img-wrapper">
                    <img width={250} height={250} src={promise.img} alt="" />
                  </div>
                  <h3 className="fw-semibold mb-1">{promise.heading}</h3>
                </div>
                <p className="mb-0 promises-desc">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- goodzero */}
      <section className="good-zero-rates-section position-relative overflow-hidden">
        <div className="container p-0 ps-md-3 pe-md-3">
          <div className="good-zero-rate-inner-wrapper d-md-block d-lg-flex align-items-center">
            <div className="hero-card left-section rating-detail">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Introducing</h6>
                  <h2 className="fw-bold">GoodZero™</h2>
                </div>
                <div className="shield-icon d-block d-md-none">
                  <img src={`${IMG}/shield-bg.webp`} width={150} height={168} alt="" />
                </div>
              </div>
              <p className="mb-0" />
              <p>
                <strong>India’s only Guaranteed Solar Savings Plan </strong>
              </p>
              <p />
              <button
                className="d-block d-md-none btn-open-lead-form"
                type="button"
                onClick={() => openModal("Learn More about GoodZero")}
              >
                Learn More about GoodZero™{" "}
                <img src={`${IMG}/blue-arrow.webp`} width={20} height={20} alt=" " />
              </button>
              <button
                className="cta-btn d-none d-md-block text-center btn-open-lead-form"
                type="button"
                onClick={() => openModal("Know More about GoodZero")}
              >
                Know More about GoodZero
              </button>
            </div>

            <div className="right-section d-none d-md-block">
              <div className="row">
                {GOODZERO_POINTS.map((point) => (
                  <div className="col-6 card-wrapper" key={point.heading}>
                    <div className="img-wrapper">
                      <img
                        src={point.icon}
                        alt=""
                        className="goodzero-promise-img"
                        width={24}
                        height={24}
                      />
                    </div>
                    <h3 className="fw-medium heading">{point.heading}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- estimator */}
      <section className="solar-estimate-section text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="solar-estimate-section-wrapper d-md-flex">
              <div className="col-lg-5 left-section">
                <div>
                  <h6 className="fw-bold">
                    {" "}
                    Go Solar with{" "}
                    <span className="zero-investment-gradient">
                      {zeroInvestment ? "Zero Investment" : "Zero Downpayment"}
                    </span>
                  </h6>
                  <p>
                    {" "}
                    Government subsidy covers your downpayment, and monthly solar saving covers your
                    EMI.
                  </p>
                </div>
                <div className="d-none d-md-block">
                  <div className=" d-flex align-items-center gap-3 cta-box ">
                    <div className="left-section text-center position-relative z-1">
                      <img src={`${IMG}/cta-box-man.webp`} alt="Expert" width={80} height={110} />
                    </div>
                    <div className="right-section text-start ">
                      <p className="mb-0 question fw-semibold">Got questions?</p>
                      <p className="mb-0 desc">Our solar experts are just a call away.</p>
                      <button
                        className="p-0 btn btn-open-lead-form fw-semibold"
                        type="button"
                        onClick={() => openModal("Talk to our Experts")}
                      >
                        Talk to our expert{" "}
                        <img src={`${IMG}/blue-arrow.webp`} width={20} height={20} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 right-section">
                <div>
                  <p className="get-estimate-heading"> Get Savings and EMI Estimates</p>
                  <div className="system-size-wrapper">
                    <h6 className="form-label"> System Size</h6>
                    <div className="btn-group d-flex" role="group">
                      {SYSTEM_SIZES.map((option, index) => (
                        <React.Fragment key={option.kw}>
                          <input
                            type="radio"
                            className="btn-check"
                            name="systemSize"
                            id={`size${option.kw}kW`}
                            autoComplete="off"
                            checked={size === index}
                            onChange={() => setSize(index)}
                          />
                          <label className="btn-wrapper fw-semibold" htmlFor={`size${option.kw}kW`}>
                            {option.kw}kW <span className="fw-normal"> Suitable for {option.bill} monthly bill </span>
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="emi-tenure-wrapper">
                    <h6 className="form-label"> EMI Tenure</h6>
                    <div className="btn-group d-flex" role="group">
                      {TENURES.map((months, index) => (
                        <React.Fragment key={months}>
                          <input
                            type="radio"
                            className="btn-check"
                            name="emiTenure"
                            id={`emi${months}`}
                            autoComplete="off"
                            checked={tenure === index}
                            onChange={() => setTenure(index)}
                          />
                          <label className="btn-wrapper fw-semibold" htmlFor={`emi${months}`}>
                            {" "}
                            {months} Months{" "}
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center justify-content-md-start align-items-center saving-emi-cal-section">
                    <div className="left-section">
                      <div className="fs-7 fw-medium"> Your Monthly Saving</div>
                      <div className="fw-medium price">₹{inr(saving)}</div>
                      <div className="small price-yr"> for 25 years!</div>
                    </div>
                    <div className="text-center fs-4 fw-bold equal-value">=</div>
                    <div className="right-section">
                      <div className="fw-medium fs-7"> Monthly EMI</div>
                      <div className="fw-medium emi-price">₹{inr(emi)}</div>
                      <div className="small">
                        {" "}
                        <span className="emi-months">{TENURES[tenure]}</span> months
                      </div>
                    </div>
                  </div>
                  <p className="saving-patch text-center text-md-start p-md-0 d-md-none">
                    Upto ₹{inr(saving * 12 * 25)} savings over 25 years!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-block d-md-none">
          <div className=" d-flex align-items-center gap-3 cta-box ">
            <div className="left-section text-center position-relative z-1">
              <img src={`${IMG}/cta-box-man.webp`} alt="Expert" width={80} height={110} />
            </div>
            <div className="right-section text-start ">
              <p className="mb-0 question fw-semibold">Got questions?</p>
              <p className="mb-0 desc">Our solar experts are just a call away.</p>
              <button
                className="p-0 btn btn-open-lead-form fw-semibold"
                type="button"
                onClick={() => openModal("Talk to our Experts")}
              >
                Talk to our expert <img src={`${IMG}/blue-arrow.webp`} width={20} height={20} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ pride stats */}
      <div className="goodzero-pride">
        <div className="container p-0 ps-md-3 pe-md-3">
          <h2 className="fw-bold mb-4 text-md-center"> Powering Homes Across India</h2>
          <div className="row goodzero-pride-wrappper">
            {STATS.map((stat) => (
              <StatCard stat={stat} key={stat.label} />
            ))}
          </div>
          <div className="text-center d-md-flex cta-wrapper justify-content-between align-items-center">
            <div className="d-flex left-section align-items-center justify-content-center">
              <img src={`${IMG}/map.png`} width={50} height={50} alt="Map" />
              <div className="text-left">
                <p>We are present in 31 Cities across 10 States, and are growing every day.</p>
              </div>
            </div>
            <button
              className="right-section cta-btn btn-open-lead-form d-block text-center fw-semibold"
              type="button"
              onClick={() => openModal("Unlock Your Solar Savings")}
            >
              Unlock Your Solar Savings
            </button>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- app */}
      <section className="app-section lazy-bg">
        <div className="container">
          <div className="d-md-flex align-items-center justify-content-md-between app-section-inner-wrapper">
            <div className="left-section">
              <h2>Real-time Monitoring App</h2>
              <p className="desc">Track the performance of your Solar System–anywhere, anytime.</p>
              <div className="app-download-links d-none d-md-flex justify-content-md-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sse.consumer&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={`${IMG}/play-store.webp`} alt="Google Play" width={170} height={50} />
                </a>
              </div>
            </div>
            <div className="position-relative app-section-wrapper right-section d-flex justify-content-center">
              <img
                src={`${IMG}/app-mockup.webp`}
                alt="App Preview"
                className="img-fluid"
                height={580}
                width={255}
              />
              <div className="app-feature-cards">
                {APP_FEATURES.map((feature, index) => (
                  <div
                    className={`feature-card text-start feature-card-${index + 1}`}
                    key={feature.label}
                  >
                    <img src={feature.icon} alt="" width={30} height={30} />
                    <p className="mb-0">{feature.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ testimonials */}
      <section className="testimonial-city-page-section">
        <div className="container p-0 p-md-3">
          <h2 className="fw-bold testimonial-heading">Happy Customers</h2>
          <div id="customer-recommended-section">
            <div className="card-wrapper d-flex ">
              {TESTIMONIALS.map((testimonial) => (
                <div className="recommended-card" key={testimonial.name}>
                  <div className="recommended-card-details">
                    <div className="customer-feedback position-relative">
                      <img
                        src={`${IMG}/quote-bk.webp`}
                        alt=""
                        width={34}
                        height={28}
                        className="mb-2"
                      />
                      <p className="m-0">{testimonial.text}</p>
                    </div>
                    <div className="author-info d-flex align-items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="author-img"
                        width={40}
                        height={40}
                      />
                      <div>
                        <p className="author-name m-0">{testimonial.name}</p>
                        <p className="author-location m-0" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider m-0" />

      {/* -------------------------------------------------------- read more */}
      {/* <section className="accordion" id="readMoreAccordion">
        <div className="container">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingReadMore">
              <button
                className={`accordion-button${readMoreOpen ? "" : " collapsed"}`}
                type="button"
                aria-expanded={readMoreOpen}
                onClick={() => setReadMoreOpen((open) => !open)}
              >
                Read More
              </button>
            </h2>
            {readMoreOpen ? (
              <div className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <div className="city-section-5">
                    <div className="container pt-2">
                      <div className="row">
                        <div className="accordion accordion-flush intro-to-sse px-md-0">
                          <div className="accordion-item">
                            <div className="accordion-collapse collapse show">
                              <div className="accordion-body px-0">
                                <h1>
                                  <strong>
                                    Best Solar Company in Coimbatore Providing Reliable Rooftop Solar
                                    Systems
                                  </strong>
                                </h1>
                                <p className="accordion-body-header">
                                  <strong>About SolarSquare</strong>
                                </p>
                                <p>That’s who we are!</p>
                                <p>
                                  SolarSquare has earned the name of being the most-trusted solar
                                  company in Coimbatore – all over India, in general – since its launch
                                  in 2015 not because of making promises, but by keeping those
                                  promises.
                                </p>
                                <p>
                                  We were founded by two highly passionate engineers from IIT Mumbai who
                                  wanted to light up lives and homes across India with green
                                  electricity.
                                </p>
                                <p>
                                  <strong>
                                    Our customers have been the heroes in our astounding journey since
                                    2015:
                                  </strong>
                                </p>
                                <ul>
                                  <li>
                                    We started with the installation of a 73 KW solar system for TVS in
                                    Madurai.
                                  </li>
                                  <li>We managed to become the only UL-certified company in India.</li>
                                  <li>We are now the third-biggest residential solar installer in India.</li>
                                  <li>
                                    Giants like Panasonic, Reliance, and Jindal Steel are our clients.
                                  </li>
                                  <li>
                                    We have received 4.8-star Google rating based on feedback from
                                    15000+ homeowners.
                                  </li>
                                </ul>
                                <p>
                                  <strong>
                                    We managed to win the attention of customers because we offer:
                                  </strong>
                                </p>
                                <ul>
                                  <li>
                                    Prefabricated mounting structures that can withstand high wind speeds
                                    (up to 150 Kmph).
                                  </li>
                                  <li>
                                    An annual maintenance contract to take care of the solar system’s
                                    health.
                                  </li>
                                  <li>A 10-minute, quick loan approval.</li>
                                  <li>Interest-free EMI scheme for a tenure of 6 months.</li>
                                  <li>
                                    Easy financing EMI option for a tenure of 36 months at minimum
                                    interest rates.
                                  </li>
                                  <li>
                                    An easy 5-year EMI that you can pay in 60 installments.
                                  </li>
                                  <li>Free rooftop inspection before installation.</li>
                                </ul>
                                <p>
                                  SolarSquare is thriving to date in the solar market with the passion to
                                  escalate mass adoption of solar and put the genie of pollution back in
                                  its lamp.
                                </p>
                                <h2 className="accordion-body-header">
                                  <strong>Why choose SolarSquare in Tamil Nadu?</strong>
                                </h2>
                                <p>
                                  SolarSquare is one of the most trusted solar installation company in
                                  Tamil Nadu. 61,280 customers have already booked solar with us.
                                </p>
                                <p>
                                  We offer more than just solar panel installation in Coimbatore. Some of
                                  our services include the following:
                                </p>
                                <ul>
                                  <li>A free rooftop inspection.</li>
                                  <li>
                                    Showing customers a 3-D drawing of the solar system on the rooftop
                                    within 15 minutes.
                                  </li>
                                  <li>Helping customers choose the best modules and solar inverters.</li>
                                  <li>
                                    Installing the solar system for home in Coimbatore in a safe and
                                    secure manner.
                                  </li>
                                  <li>
                                    Ensuring no welding is done on-site since we use our mounting
                                    structures.
                                  </li>
                                  <li>
                                    Handling all the paperwork, whether it’s an application to change the
                                    sanctioned load (if required) or applying for the commissioning of the
                                    net meter or a subsidy.
                                  </li>
                                  <li>Offering a 4-year AMC maintenance contract.</li>
                                </ul>
                                <p className="accordion-body-header">
                                  <strong>Free solar assessment by SolarSquare</strong>
                                </p>
                                <p>
                                  SolarSquare is a customer-centric company. We offer all transparent
                                  services out of which one is offering a free solar assessment.
                                </p>
                                <p>
                                  Once you’ve booked an appointment with us, our expert solar consultant
                                  will visit your house and inspect the rooftop to determine:
                                </p>
                                <ul>
                                  <li>The type of mounting structure that’ll be needed</li>
                                  <li>The shadow-free area available</li>
                                  <li>The tilt and slope of the rooftop</li>
                                </ul>
                                <p>
                                  These are but a few things. Our consultants will also answer any
                                  questions that you may have for them.
                                </p>
                                <p>
                                  <strong>
                                    <a href="#lead-form">Register with us</a>
                                  </strong>
                                  &nbsp;now to learn more about the free solar assessment we offer in
                                  Coimbatore and what you should expect during the home visit.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section> */}

      {/* ------------------------------------------------------- sticky CTA */}
      <div
        className={`sticky-button-wrapper position-fixed bottom-0 end-0 d-md-none${stickyVisible ? " show" : ""
          }`}
      >
        <a href="#review-section" role="button">
          Get Free Quote
        </a>
      </div>

      {/* ----------------------------------------------------------- modal */}
      <div
        className={`modal fade${modal.open ? " show" : ""}`}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        style={{ display: modal.open ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-bottom-mobile">
          <div className="modal-content">
            <div className="modal-header flex-column align-items-start">
              <button
                type="button"
                className="btn-close ms-auto"
                aria-label="Close"
                onClick={() => setModal({ open: false, title: modal.title })}
              />
              <h2 className="modal-title fw-bold">{modal.title}</h2>
              <p className="mb-0">
                Save up to 90% on Electricity Bills by switching to Solar now
              </p>
            </div>
            <div className="modal-body p-0 form-component">
              <LeadForm variant="modal" title="Talk to a Solar Expert" buttonLabel="Submit Details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
