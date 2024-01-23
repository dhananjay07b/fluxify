/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: [
        "img.clerk.com",
        "images.clerk.dev",
        "uploadthing.com",
        "placehold.co",
      ],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      loader: "default",
      path: "/_next/image",
      minimumCacheTTL: 60,
      disableStaticImages: false,
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
  };
  
  module.exports = nextConfig;
  