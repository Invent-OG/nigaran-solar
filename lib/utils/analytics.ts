/**
 * Analytics utility functions
 * 
 * These functions can be used to track user interactions
 * without loading heavy third-party scripts immediately
 */

/**
 * Track page view
 * @param url - Page URL
 */
export function trackPageView(url: string): void {
  if (typeof window === 'undefined') return;
  
  // Queue analytics event for later processing
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page_path: url,
  });
}

/**
 * Track user event
 * @param category - Event category
 * @param action - Event action
 * @param label - Event label
 * @param value - Event value
 */
export function trackEvent(
  category: string,
  action: string,
  label?: string,
  value?: number
): void {
  if (typeof window === 'undefined') return;
  
  // Queue analytics event for later processing
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'user_event',
    event_category: category,
    event_action: action,
    event_label: label,
    event_value: value,
  });
}

// Add TypeScript declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}