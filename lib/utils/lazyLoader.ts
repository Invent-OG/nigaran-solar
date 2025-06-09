/**
 * Utility for lazy loading components and modules
 */

import { lazy, ComponentType } from 'react';

/**
 * Lazy load a component with improved error handling
 * @param importFn - Import function for the component
 * @returns Lazy loaded component
 */
export function lazyLoad<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
): T {
  return lazy(() => {
    return importFn().catch((error) => {
      console.error('Error loading component:', error);
      return { default: (() => null) as unknown as T };
    });
  }) as T;
}

/**
 * Preload a component to improve perceived performance
 * @param importFn - Import function for the component
 */
export function preloadComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
): void {
  importFn().catch(console.error);
}