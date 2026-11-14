import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "11mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "tudublin12.b-cdn.net",
      }
    ]
  }
};


module.exports = nextConfig;
