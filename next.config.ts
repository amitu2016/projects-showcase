import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Keep this for static export
  trailingSlash: true, // Ensures routing works on S3/CloudFront
  images: {
    unoptimized: true, // Disables Image Optimization API
  },
};

module.exports = nextConfig;