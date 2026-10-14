"use client";

import { useState } from "react";
import {
    Sun,
    IndianRupee,
    BatteryCharging,
    Clock3,
    BarChart3,
    MapPin,
    ArrowRight,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

const LOCATIONS = [
    "Tamil Nadu",
    "Kerala",
    "Karnataka",
    "Andhra Pradesh",
    "Maharashtra",
];

type SolarResult = {
    systemSize: number;
    estimatedCost: number;
    subsidy: number;
    costAfterSubsidy: number;
    annualSavings: number;
    paybackPeriod: number;
    roofAreaNeeded: number;
    roofAreaSufficient: boolean;
};

const formatINR = (value: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(value);

function calculateSolar(
    bill: number,
    roofArea: number,
    location: string
): SolarResult {
    /*
     * Preliminary estimates only.
     *
     * Replace these assumptions with your verified installation
     * pricing, subsidy rules, and actual savings calculations.
     *
     * The location is collected for future location-specific
     * pricing/subsidy rules. It does not yet change the calculation.
     */

    const monthlyBill = bill / 2;

    // Preliminary sizing estimate based on electricity consumption.
    const systemSize = Math.max(
        1,
        Math.ceil(monthlyBill / 1000)
    );

    // Approximate installation cost per kW.
    const costPerKW = 56000;

    const estimatedCost = systemSize * costPerKW;

    // Illustrative subsidy estimate, not an official entitlement.
    const subsidyPerKW = 18000;
    const subsidyCap = 78000;

    const subsidy = Math.min(
        systemSize * subsidyPerKW,
        subsidyCap,
        estimatedCost
    );

    const costAfterSubsidy = Math.max(
        0,
        estimatedCost - subsidy
    );

    // Illustrative annual savings assumption.
    const annualSavings = systemSize * 24000;

    const paybackPeriod =
        annualSavings > 0
            ? costAfterSubsidy / annualSavings
            : 0;

    // Approximate usable rooftop requirement per kW.
    const roofAreaNeeded = systemSize * 80;

    return {
        systemSize,
        estimatedCost,
        subsidy,
        costAfterSubsidy,
        annualSavings,
        paybackPeriod,
        roofAreaNeeded,
        roofAreaSufficient: roofArea >= roofAreaNeeded,
    };
}

type SolarCalculatorProps = {
    onTalkToExpert?: () => void;
};

export default function SolarCalculator({
    onTalkToExpert,
}: SolarCalculatorProps) {
    const [monthlyBill, setMonthlyBill] = useState("");
    const [roofArea, setRoofArea] = useState("250");
    const [location, setLocation] = useState("Tamil Nadu");

    const [result, setResult] = useState<SolarResult | null>(null);
    const [error, setError] = useState("");

    function handleCalculate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const bill = Number(monthlyBill);
        const roof = Number(roofArea);

        if (
            !monthlyBill ||
            !Number.isFinite(bill) ||
            bill < 1000
        ) {
            setError("Monthly bill must be at least ₹1000.");
            setResult(null);
            return;
        }

        if (
            !roofArea ||
            !Number.isFinite(roof) ||
            roof <= 0
        ) {
            setError("Please enter a valid available roof area.");
            setResult(null);
            return;
        }

        setError("");

        setResult(calculateSolar(bill, roof, location));
    }

    const displayedResult = result;

    return (
        <section className="relative isolate overflow-hidden bg-[#0b0e1a] px-4 py-12 text-white sm:px-6 lg:px-10 lg:py-16">
            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(30,100,220,0.13),transparent_45%)]" />

            <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
                {/* LEFT: HEADING, INPUTS, EXPERT CARD */}
                <div className="min-w-0">
                    <header className="mb-7">
                        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
                            Plan Your Solar System with

                            <span className="mt-1 block bg-gradient-to-r from-[#81e34c] to-[#21d2a3] bg-clip-text text-transparent">
                                Zero Confusion
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                            Calculate your solar system size, cost, savings
                            and government subsidy in seconds.
                        </p>
                    </header>

                    {/* Calculator form */}
                    <div className="rounded-2xl border border-slate-600/40 bg-slate-900/60 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6">
                        <div className="mb-6 flex items-center gap-3">
                            <Sun className="h-6 w-6 text-lime-400" />

                            <h3 className="text-lg font-bold">
                                Solar Calculator
                            </h3>
                        </div>

                        <form onSubmit={handleCalculate}>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                {/* Electricity bill */}
                                <div className="min-w-0">
                                    <label
                                        htmlFor="solar-monthly-bill"
                                        className="mb-2 block text-sm font-medium text-slate-200"
                                    >
                                        Bi-Monthly Bill (₹)
                                    </label>

                                    <input
                                        id="solar-monthly-bill"
                                        type="number"
                                        min="1000"
                                        step="100"
                                        value={monthlyBill}
                                        onChange={(event) => {
                                            setMonthlyBill(event.target.value);
                                            setError("");
                                        }}
                                        placeholder="Enter your electricity bill"
                                        className="h-12 w-full rounded-xl border border-slate-600/60 bg-slate-800/80 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/15"
                                    />

                                    <p className="mt-2 text-xs text-slate-400">
                                        Enter your two-month electricity bill.
                                    </p>
                                </div>

                                {/* Roof area */}
                                <div className="min-w-0">
                                    <label
                                        htmlFor="solar-roof-area"
                                        className="mb-2 block text-sm font-medium text-slate-200"
                                    >
                                        Available Roof Area (sq ft)
                                    </label>

                                    <input
                                        id="solar-roof-area"
                                        type="number"
                                        min="1"
                                        step="10"
                                        value={roofArea}
                                        onChange={(event) => {
                                            setRoofArea(event.target.value);
                                            setError("");
                                        }}
                                        placeholder="Enter roof area"
                                        className="h-12 w-full rounded-xl border border-slate-600/60 bg-slate-800/80 px-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/15"
                                    />

                                    <p className="mt-2 text-xs text-slate-400">
                                        Approx. 80 sq ft per kW.
                                    </p>
                                </div>

                                {/* Location */}
                                <div className="min-w-0 sm:col-span-2">
                                    <label
                                        htmlFor="solar-location"
                                        className="mb-2 block text-sm font-medium text-slate-200"
                                    >
                                        Location
                                    </label>

                                    <div className="relative">
                                        <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                                        <select
                                            id="solar-location"
                                            value={location}
                                            onChange={(event) =>
                                                setLocation(event.target.value)
                                            }
                                            className="h-12 w-full appearance-none rounded-xl border border-slate-600/60 bg-slate-800/80 pl-11 pr-10 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/15"
                                        >
                                            {LOCATIONS.map((state) => (
                                                <option
                                                    key={state}
                                                    value={state}
                                                    className="bg-slate-900"
                                                >
                                                    {state}
                                                </option>
                                            ))}
                                        </select>

                                        <svg
                                            aria-hidden="true"
                                            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {error && (
                                <p
                                    role="alert"
                                    className="mt-4 flex items-center gap-2 text-sm text-red-400"
                                >
                                    <AlertCircle className="h-4 w-4 shrink-0" />
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-6 flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#75d84b] via-[#3ed17e] to-[#10bda5] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/10 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-base"
                            >
                                Calculate Solar Requirements
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </form>
                    </div>

                    {/* Expert consultation card */}
                    <div className="mt-4 flex min-h-[125px] items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#dce8ff] to-[#a9c4f5] p-3 text-[#102650] sm:gap-5 sm:p-4">
                        <div className="flex h-[100px] w-[90px] shrink-0 items-end justify-center overflow-hidden rounded-full bg-white/30 sm:h-[115px] sm:w-[120px]">
                            <img
                                src="/landing/cta-box-man.webp"
                                alt="Solar energy expert"
                                width={110}
                                height={115}
                                className="h-[105px] w-auto object-contain object-bottom sm:h-[115px]"
                            />
                        </div>

                        <div className="min-w-0">
                            <h3 className="text-base font-bold sm:text-xl">
                                Got questions?
                            </h3>

                            <p className="mt-1 text-xs leading-relaxed text-[#1a3159] sm:text-sm">
                                Our solar experts are just a call away.
                            </p>

                            <button
                                type="button"
                                onClick={onTalkToExpert}
                                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-700 transition hover:gap-3 sm:text-sm"
                            >
                                Talk to our expert
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT: RESULTS */}
                <div className="min-w-0">
                    <header className="mb-6">
                        <h3 className="flex items-center gap-3 text-2xl font-bold tracking-tight sm:text-3xl">
                            <Sun className="h-7 w-7 shrink-0 text-lime-400" />

                            Your Solar System Estimate
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                            {displayedResult
                                ? `Here is your estimated solar system for ${location}.`
                                : "Enter your details to see your personalized solar estimate."}
                        </p>
                    </header>

                    {/* Initial state */}
                    {!displayedResult && (
                        <div className="mb-5 rounded-xl border border-slate-700/60 bg-slate-900/50 p-5 text-sm leading-relaxed text-slate-300">
                            <Sun className="mb-3 h-6 w-6 text-lime-400" />

                            Enter your bi-monthly electricity bill, available
                            roof area, and location. Then select{" "}
                            <strong>Calculate Solar Requirements</strong> to
                            view your estimates.
                        </div>
                    )}

                    {/* Six result cards */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
                        {/* System size */}
                        <ResultCard
                            icon={<Sun />}
                            title="System Size"
                            value={
                                displayedResult
                                    ? `${displayedResult.systemSize} kW`
                                    : "—"
                            }
                            description="Recommended capacity for your consumption"
                            valueClass="text-lime-400"
                        />

                        {/* Estimated cost */}
                        <ResultCard
                            icon={<IndianRupee />}
                            title="Estimated Cost"
                            value={
                                displayedResult
                                    ? formatINR(displayedResult.estimatedCost)
                                    : "—"
                            }
                            description="Before subsidies"
                        />

                        {/* Cost after subsidy */}
                        <ResultCard
                            icon={<IndianRupee />}
                            title="Cost After Subsidy"
                            value={
                                displayedResult
                                    ? formatINR(displayedResult.costAfterSubsidy)
                                    : "—"
                            }
                            description={
                                displayedResult
                                    ? `Illustrative subsidy: ${formatINR(displayedResult.subsidy)}`
                                    : "Estimated cost after subsidy"
                            }
                            valueClass="text-emerald-400"
                        />

                        {/* Annual savings */}
                        <ResultCard
                            icon={<BatteryCharging />}
                            title="Annual Savings"
                            value={
                                displayedResult
                                    ? formatINR(displayedResult.annualSavings)
                                    : "—"
                            }
                            description="Estimated yearly electricity savings"
                            valueClass="text-emerald-400"
                        />

                        {/* Payback period */}
                        <ResultCard
                            icon={<Clock3 />}
                            title="Payback Period"
                            value={
                                displayedResult
                                    ? `${displayedResult.paybackPeriod.toFixed(1)} years`
                                    : "—"
                            }
                            description="Time to recover your investment"
                        />

                        {/* Roof area */}
                        <ResultCard
                            icon={<BarChart3 />}
                            title="Roof Area Needed"
                            value={
                                displayedResult
                                    ? `${displayedResult.roofAreaNeeded} sq ft`
                                    : "—"
                            }
                            description={
                                displayedResult
                                    ? displayedResult.roofAreaSufficient
                                        ? "Your roof area is sufficient"
                                        : "Your roof area may be insufficient"
                                    : "Estimated space required"
                            }
                            valueClass="text-white"
                        />
                    </div>

                    {/* Roof warning */}
                    {displayedResult &&
                        !displayedResult.roofAreaSufficient && (
                            <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-200">
                                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                                <p>
                                    Your available roof area is below the estimated
                                    requirement. A site inspection is recommended
                                    before choosing a system.
                                </p>
                            </div>
                        )}

                    {/* Consultation CTA */}
                    <div className="mt-5 rounded-xl border border-emerald-400/10 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 p-5 text-center sm:p-6">
                        <h4 className="text-base font-semibold sm:text-lg">
                            Ready to start saving?
                        </h4>

                        <p className="mt-2 text-sm leading-relaxed text-slate-300">
                            Get a detailed consultation from our solar experts.
                        </p>

                        <button
                            type="button"
                            onClick={onTalkToExpert}
                            className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#75d84b] to-[#10bda5] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
                        >
                            Get Free Consultation
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Estimate disclaimer */}
            <p className="relative mx-auto mt-6 max-w-[1440px] text-xs leading-relaxed text-slate-500">
                Estimates are indicative only. Actual system capacity,
                installation costs, electricity savings, subsidy eligibility,
                and payback period depend on your site, electricity consumption,
                installation quote, and applicable government scheme.
            </p>
        </section>
    );
}

type ResultCardProps = {
    icon: React.ReactNode;
    title: string;
    value: string;
    description: string;
    valueClass?: string;
};

function ResultCard({
    icon,
    title,
    value,
    description,
    valueClass = "text-white",
}: ResultCardProps) {
    return (
        <article className="flex min-h-[145px] min-w-0 gap-3 rounded-xl border border-slate-600/20 bg-gradient-to-br from-slate-800/70 to-slate-900/90 p-4 transition duration-200 hover:border-emerald-400/30 sm:p-5">
            <div className="mt-1 shrink-0 text-lime-400 [&>svg]:h-5 [&>svg]:w-5">
                {icon}
            </div>

            <div className="min-w-0">
                <h4 className="text-sm font-semibold leading-snug text-slate-200">
                    {title}
                </h4>

                <p
                    className={`mt-2 break-words text-xl font-extrabold leading-tight tracking-tight sm:text-2xl ${valueClass}`}
                >
                    {value}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {description}
                </p>
            </div>
        </article>
    );
}