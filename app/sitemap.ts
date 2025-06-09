import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nigaran.in';
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/residential',
    '/commercial',
    '/housing-society',
    '/on-grid-solar',
    '/off-grid-solar',
    '/solar-calculator',
    '/solar-pro',
    '/blog',
    '/careers',
    '/contact',
    '/consultation',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}