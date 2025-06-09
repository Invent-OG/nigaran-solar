import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

/**
 * Hook to observe when an element enters the viewport
 */
export function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  once = false,
}: IntersectionObserverOptions = {}): [RefObject<T>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        // If we only want to trigger once and it's already been triggered, do nothing
        if (once && hasTriggered.current) return;
        
        setIsIntersecting(isElementIntersecting);
        
        // If element is intersecting and we only want to trigger once, mark as triggered
        if (isElementIntersecting && once) {
          hasTriggered.current = true;
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    
    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, once]);

  return [ref, isIntersecting];
}