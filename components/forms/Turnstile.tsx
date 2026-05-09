"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

interface TurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
  className?: string;
}

export default function Turnstile({ siteKey, onVerify, className }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Use a ref to store the latest onVerify callback.
  // This prevents Turnstile from re-rendering and going into an infinite loop
  // when the parent component re-renders and passes a new function reference.
  const onVerifyRef = useRef(onVerify);
  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const renderWidget = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).turnstile &&
        containerRef.current
      ) {
        if (timer) clearInterval(timer);
        try {
          if (!widgetIdRef.current) {
            widgetIdRef.current = (window as any).turnstile.render(containerRef.current, {
              sitekey: siteKey,
              callback: (token: string) => {
                onVerifyRef.current(token);
              },
            });
          }
        } catch (err) {
          console.error("Error rendering turnstile", err);
        }
      }
    };

    // Poll for the turnstile script being loaded and ready
    timer = setInterval(renderWidget, 100);

    return () => {
      if (timer) clearInterval(timer);
      if (widgetIdRef.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch (e) {
          // ignore cleanup errors
        }
      }
    };
  }, [siteKey]);

  return (
    <div className={className}>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />
      <div ref={containerRef} />
    </div>
  );
}
