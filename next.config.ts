import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
