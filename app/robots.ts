import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api',
        '/ai-cv',
        '/cover-letter',
        '/dashboard',
        '/editor',
        '/job-tracker',
        '/settings',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
