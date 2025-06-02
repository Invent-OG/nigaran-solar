"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  // Common images to preload for better user experience
  const commonImages = [
    "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
    "https://images.pexels.com/photos/3560366/pexels-photo-3560366.jpeg",
    "https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg",
    "https://images.unsplash.com/photo-1661997481002-d2f67de466b1",
    "https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20"
  ];

  // Skip loading screen for admin pages
  if (isAdminPage) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  }

  return (
    <LoadingScreen imagesToPreload={commonImages} minLoadingTime={1500}>
      <Header />
      <main>{children}</main>
      <Footer />
    </LoadingScreen>
  );
}