import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Required for static HTML export
  output: 'export',
  trailingSlash: true, // Keeps paths consistent for static hosting

  typescript: {
    ignoreBuildErrors: true, // Optional: skip TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // Optional: skip linting during build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
