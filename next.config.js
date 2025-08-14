/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration for Next.js 15
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // swcMinify is now default in Next.js 15, no need to specify

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