/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration only to fix build issues
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,

  // Simplified image configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Basic redirects
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'turfngroup.com',
          },
        ],
        destination: 'https://www.turfngroup.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig