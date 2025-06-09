"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { getOptimizedImageProps } from "@/lib/utils/imageOptimizer";

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.png",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const optimizedProps = getOptimizedImageProps();
  
  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={cn(
          "transition-all duration-300",
          isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"
        )}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setError(true)}
        {...optimizedProps}
        {...props}
      />
    </div>
  );
}