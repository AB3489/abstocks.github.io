/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export environment compatibility
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      minSize: 20000,
    };
    return config;
  },
};

module.exports = nextConfig;