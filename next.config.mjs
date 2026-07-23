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
      // SEO canonicalisation: consolidate duplicate pages onto one URL each so
      // Google stops flagging "Duplicate without user-selected canonical".
      // City resume-builder pages standardised on the flat /resume-builder-{city} slug.
      { source: '/resume-builder/bangalore', destination: '/resume-builder-bangalore', permanent: true },
      { source: '/resume-builder/chennai', destination: '/resume-builder-chennai', permanent: true },
      { source: '/resume-builder/delhi', destination: '/resume-builder-delhi', permanent: true },
      { source: '/resume-builder/hyderabad', destination: '/resume-builder-hyderabad', permanent: true },
      { source: '/resume-builder/mumbai', destination: '/resume-builder-mumbai', permanent: true },
      { source: '/resume-builder/pune', destination: '/resume-builder-pune', permanent: true },
      // Cover-letter tool consolidated onto the keyword-rich generator URL.
      { source: '/cover-letter', destination: '/cover-letter-generator', permanent: true },
      // References article consolidated onto the exact-match keyword URL.
      { source: '/resume-tips/references', destination: '/resume-tips/references-on-resume', permanent: true },
      // AISO/GEO: llms.txt is the actual adopted convention (llmstxt.org) that AI
      // crawlers and tooling check for. Consolidate the old /llm.txt onto it.
      { source: '/llm.txt', destination: '/llms.txt', permanent: true },
    ];
  },
};

export default nextConfig;
