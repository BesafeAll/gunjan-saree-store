import type { NextConfig } from "next";

const repo = "gunjan-saree-store";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,
  },

};

export default nextConfig;
