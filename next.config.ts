import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images as-is from /public with no server-side transformation.
    // This project is fully static (no functions, no Blob storage), and
    // keeping image optimization off avoids any metered usage against the
    // Vercel Hobby plan's Image Optimization allowance.
    unoptimized: true,
  },
};

export default nextConfig;
