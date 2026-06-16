/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['mammoth'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'cv-prime.vercel.app',
          },
        ],
        destination: 'https://cv-prime.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
