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
import Script from "next/script";
import { VideoLoaderProvider } from "@/components/VideoLoaderProvider";
import { usePathname } from "next/navigation";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage =
    pathname === "/landing" || pathname?.startsWith("/landing/");
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KBMQNM53');`}
        </Script>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18065170684"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18065170684');
          `}
        </Script>
      </head>
      <body className={`${outfit.variable} font-sans`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBMQNM53"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <>
          <VideoLoaderProvider>
            <Providers>
              <LenisProvider />
              {!isLandingPage && <Header />}
              <main>{children}</main>
              {!isLandingPage && <Footer />}
            </Providers>
            {!isLandingPage && <FloatingContactButtons />}
          </VideoLoaderProvider>
        </>
      </body>
    </html>
  );
}
