import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // General crawlers — allow all public pages
        userAgent: '*',
        allow: ['/', '/templates', '/pricing', '/contact', '/terms', '/privacy', '/refund', '/cookies', '/llm.txt', '/online-cv-maker', '/ai-cv-builder', '/ats-friendly-cv', '/cv-builder-india', '/resume-vs-cv', '/cv-examples'],
        disallow: ['/api/', '/dashboard/', '/editor/', '/job-tracker/', '/settings/', '/print/', '/debug-status/'],
      },
      {
        // AI training crawlers — explicitly allow public pages and llm.txt
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Omgilibot', 'FacebookBot'],
        allow: ['/', '/templates', '/pricing', '/contact', '/terms', '/privacy', '/refund', '/cookies', '/llm.txt', '/online-cv-maker', '/ai-cv-builder', '/ats-friendly-cv', '/cv-builder-india', '/resume-vs-cv', '/cv-examples'],
        disallow: ['/api/', '/dashboard/', '/editor/', '/job-tracker/', '/settings/', '/print/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
