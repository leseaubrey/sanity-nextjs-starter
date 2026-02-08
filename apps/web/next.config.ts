import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@workspace/sanity", "@workspace/ui"],
};

export default nextConfig;
