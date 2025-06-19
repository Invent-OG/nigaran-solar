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

const inter = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KBMQNM53');`}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans`}>
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
              <Header />
              <main>{children}</main>
              <Footer />
            </Providers>
            <FloatingContactButtons />
          </VideoLoaderProvider>
        </>
      </body>
    </html>
  );
}
