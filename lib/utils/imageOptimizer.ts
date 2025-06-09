/**
 * Utility functions for image optimization
 */

/**
 * Get responsive image sizes based on viewport
 * @returns {string} Responsive sizes attribute
 */
export function getResponsiveSizes(): string {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
}

/**
 * Get placeholder blur data URL for images
 * @returns {string} Blur data URL
 */
export function getPlaceholderBlur(): string {
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg==';
}

/**
 * Get optimized image props
 * @returns {Object} Image props
 */
export function getOptimizedImageProps() {
  return {
    sizes: getResponsiveSizes(),
    placeholder: 'blur',
    blurDataURL: getPlaceholderBlur(),
    loading: 'lazy',
  };
}