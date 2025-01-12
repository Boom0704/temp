import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Add support for SCSS files
    config.module.rules.push({
      test: /\.scss$/,
      use: ['sass-loader'],
    });
    return config;
  },
};

export default nextConfig;
