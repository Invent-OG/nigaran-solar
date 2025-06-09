/**
 * SEO utility functions
 */

/**
 * Generate structured data for a page
 * @param type - Schema.org type
 * @param data - Structured data
 * @returns Structured data JSON-LD script
 */
export function generateStructuredData(type: string, data: Record<string, any>): string {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
  
  return JSON.stringify(structuredData);
}

/**
 * Generate canonical URL
 * @param path - Page path
 * @returns Canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://www.nigaran.in';
  return `${baseUrl}${path}`;
}

/**
 * Generate meta tags for a page
 * @param title - Page title
 * @param description - Page description
 * @param keywords - Page keywords
 * @param image - Page image
 * @returns Meta tags object
 */
export function generateMetaTags(
  title: string,
  description: string,
  keywords: string,
  image?: string
): Record<string, string> {
  return {
    title,
    description,
    keywords,
    'og:title': title,
    'og:description': description,
    'og:image': image || 'https://www.nigaran.in/og-image.jpg',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image || 'https://www.nigaran.in/og-image.jpg',
  };
}