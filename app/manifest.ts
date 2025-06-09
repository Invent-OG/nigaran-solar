import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nigaran Solar',
    short_name: 'Nigaran',
    description: 'Leading Solar Energy Solutions in Tamil Nadu',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#58b03f',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}