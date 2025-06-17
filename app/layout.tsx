"use client";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LenisProvider } from "@/components/LenisProvider";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Metadata } from "next/types";

const inter = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1s loading delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {loading ? (
          <div className="flex items-center flex-col justify-center min-h-screen">
            {/* Loading Spinner */}
            <div className="flex  items-center justify-center">
              <Image
                src="/nigaran-logo.png" // Path to your logo image
                alt="Logo"
                width={100} // Adjust width as needed
                height={100} // Adjust height as needed
                className=""
              />
              <div className="text-2xl font-bold ">Nigaran Solar</div>
            </div>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
          </div>
        ) : (
          <>
            <Providers>
              <LenisProvider />
              <Header />
              <main>{children}</main>
              <Footer />
            </Providers>
            <FloatingContactButtons />
          </>
        )}
      </body>
    </html>
  );
}
