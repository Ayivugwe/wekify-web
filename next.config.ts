import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // 301 redirect
      },
      {
        source: '/solutions/technology',
        destination: '/solutions',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;