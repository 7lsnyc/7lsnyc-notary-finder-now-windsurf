/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep configuration minimal as per PRD
  reactStrictMode: true,
  images: {
    // Optimize images and set quality defaults
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Allow images from trusted domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // For profile images stored in Supabase
      },
    ],
  },
}

module.exports = nextConfig
