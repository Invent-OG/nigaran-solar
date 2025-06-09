import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LenisProvider } from "@/components/LenisProvider";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: 'swap', // Optimize font loading
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nigaran.in'),
  title:
    "Leading Solar Energy Solutions in Coimbatore | Nigaran Solar Tamil Nadu",
  description:
    "Nigaran Solar offers top-quality solar panel solutions in Coimbatore and Tamil Nadu. We specialize in On-Grid, Off-Grid, and Hybrid Solar Systems for residential and commercial installations. Get your free solar consultation today!",
  keywords:
    "solar energy, solar panels, solar power systems, on-grid solar, off-grid solar, hybrid solar systems, residential solar, commercial solar, solar solutions Tamil Nadu, solar companies in TamilNadu",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.nigaran.in',
    title: 'Nigaran Solar - Leading Solar Energy Solutions in Tamil Nadu',
    description: 'Top-quality solar panel solutions for homes and businesses in Coimbatore and Tamil Nadu.',
    siteName: 'Nigaran Solar',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <LenisProvider />
          <Header />
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <main>{children}</main>
          </Suspense>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}