/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'images.pexels.com', 
      'images.unsplash.com', 
      'assets.aceternity.com', 
      'turbifycdn.com', 
      "cdn.britannica.com",
      'cdn.pixabay.com',
      'avatars.githubusercontent.com',
      'wallpapers.com',
      "www.soleosenergy.com",
      "bsmedia.business-standard.com",
      "images.remotePatterns.com"
    ],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // Enable output compression
  compress: true,
  // Reduce bundle size by removing console statements in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
};

module.exports = nextConfig;