import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.appnebula.co" },
    ],
  },
};

export default nextConfig;
