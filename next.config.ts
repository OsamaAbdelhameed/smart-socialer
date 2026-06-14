import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],    
  },
  allowedDevOrigins:[
    "e2de-182-253-75-198.ngrok-free.app"
  ]
};

export default nextConfig;