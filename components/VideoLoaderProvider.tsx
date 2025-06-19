// components/VideoLoaderProvider.tsx
"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
  useLayoutEffect,
} from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface VideoLoaderContextType {
  loading: boolean;
  handleVideoLoad: () => void;
}

const VideoLoaderContext = createContext<VideoLoaderContextType>({
  loading: true,
  handleVideoLoad: () => {},
});

export function useVideoLoader() {
  return useContext(VideoLoaderContext);
}

export function VideoLoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [triggerExit, setTriggerExit] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("videoLoaded")) {
      setTriggerExit(true);
    } else {
      const timeout = setTimeout(() => setLoading(false), 1500); // force hide after 5s
      return () => clearTimeout(timeout);
    }
  }, []);

  useLayoutEffect(() => {
    if (triggerExit && loaderRef.current) {
      gsap.fromTo(
        loaderRef.current,
        { y: 0, opacity: 1 },
        {
          y: "-100vh",
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => setLoading(false),
        }
      );
    }
  }, [triggerExit]);

  const handleVideoLoad = () => {
    localStorage.setItem("videoLoaded", "true");
    setTriggerExit(true);
  };

  return (
    <VideoLoaderContext.Provider value={{ loading, handleVideoLoad }}>
      {loading && (
        <div
          ref={loaderRef}
          className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
        >
          <div className="flex gap-2 justify-center items-center">
            {/* Logo */}
            <Image
              src={"/nigaran-logo.png"}
              alt={"logo"}
              className="w-24 h-24 mb-4"
              width={50}
              height={50}
            />
            <div className=" text-2xl font-bold mb-2">Nigaran Solar </div>
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mt-4"></div>
        </div>
      )}
      {children}
    </VideoLoaderContext.Provider>
  );
}
