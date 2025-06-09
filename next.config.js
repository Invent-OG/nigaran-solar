/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com', 'assets.aceternity.com', 'turbifycdn.com', 'avatars.githubusercontent.com'],
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
  // Optimize images
  swcMinify: true,
  poweredByHeader: false,
};

module.exports = nextConfig;