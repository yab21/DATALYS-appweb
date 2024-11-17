/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["datalysconsulting.com"], // Ajoutez vos domaines d'images externes
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: true,
    turbo: {
      loaders: {
        ".svg": ["@svgr/webpack"],
      },
    },
  },
};

module.exports = nextConfig;
