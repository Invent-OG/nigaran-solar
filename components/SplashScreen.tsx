// components/SplashScreen.tsx
"use client";

import { useEffect, useState } from "react";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Customize delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  return <main>{children}</main>;
}
