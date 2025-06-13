import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LenisProvider } from "@/components/LenisProvider";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { usePathname } from "next/navigation";

const inter = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png", // path to your PNG logo
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <LenisProvider />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>

        <FloatingContactButtons />
      </body>
    </html>
  );
}
