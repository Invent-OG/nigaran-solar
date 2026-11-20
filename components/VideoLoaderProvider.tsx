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
  return (
    <VideoLoaderContext.Provider value={{ loading: false, handleVideoLoad: () => {} }}>
      {children}
    </VideoLoaderContext.Provider>
  );
}
