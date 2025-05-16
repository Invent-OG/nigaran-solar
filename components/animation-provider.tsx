"use client";

import { ReactNode, isValidElement, cloneElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";

interface AnimationProviderProps {
  children: ReactNode;
}

export default function AnimationProvider({
  children,
}: AnimationProviderProps) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({
      nullTargetWarn: false,
    });
  }

  // Ensure each child has a key if multiple children are present
  const wrappedChildren = Array.isArray(children)
    ? children.map((child, index) =>
        isValidElement(child)
          ? cloneElement(child, { key: child.key ?? `anim-child-${index}` })
          : child
      )
    : children;

  return <AnimatePresence mode="sync">{wrappedChildren}</AnimatePresence>;
}
