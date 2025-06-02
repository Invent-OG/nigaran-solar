"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  children: React.ReactNode;
  imagesToPreload?: string[];
  minLoadingTime?: number;
}

export default function LoadingScreen({
  children,
  imagesToPreload = [
    "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
    "https://images.pexels.com/photos/3560366/pexels-photo-3560366.jpeg",
    "https://images.pexels.com/photos/4215110/pexels-photo-4215110.jpeg",
  ],
  minLoadingTime = 1000,
}: LoadingScreenProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let imagesLoaded = 0;
    const totalImages = imagesToPreload.length;

    // Function to check if we can finish loading
    const checkLoadingComplete = () => {
      const elapsedTime = Date.now() - startTime;
      
      // Update progress
      setProgress(Math.min(100, (imagesLoaded / totalImages) * 100));
      
      // Only complete loading if minimum time has passed AND all images are loaded
      if (elapsedTime >= minLoadingTime && imagesLoaded === totalImages) {
        setLoading(false);
      }
    };

    // Preload all images
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesLoaded++;
        checkLoadingComplete();
      };
      img.onerror = () => {
        // Count error as loaded to avoid hanging
        console.warn(`Failed to load image: ${src}`);
        imagesLoaded++;
        checkLoadingComplete();
      };
    });

    // Ensure we respect minimum loading time even if images load quickly
    const timer = setTimeout(() => {
      checkLoadingComplete();
    }, minLoadingTime);

    // Animate progress even if no images are loaded yet
    const progressTimer = setInterval(() => {
      if (imagesLoaded === 0) {
        setProgress((prev) => Math.min(prev + 5, 90)); // Cap at 90% until actual loading completes
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [imagesToPreload, minLoadingTime]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary to-primary/70"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-32 h-32 mb-6">
              <Image
                src="/nigaran-logo.png"
                alt="Nigaran Solar"
                fill
                className="object-contain"
              />
            </div>
            <motion.h1 
              className="text-3xl font-bold text-white mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Nigaran Solar
            </motion.h1>
            <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="mt-2 text-white/80 text-sm">
              {progress < 100 ? "Loading..." : "Ready"}
            </p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}