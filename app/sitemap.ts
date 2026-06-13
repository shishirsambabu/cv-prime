import type { MetadataRoute } from 'next';
import { roleSlugs } from '@/lib/roleData';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';
const today = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1, lastModified: today },
    { url: `${baseUrl}/templates`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/pricing`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/about`, changeFrequency: 'yearly', priority: 0.7, lastModified: today },
    // Keyword cluster landing pages
    { url: `${baseUrl}/online-cv-maker`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/ai-cv-builder`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/ats-friendly-cv`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/ats-checker`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/cv-builder-india`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/resume-vs-cv`, changeFrequency: 'monthly', priority: 0.75, lastModified: today },
    { url: `${baseUrl}/cover-letter`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    // GEO/research assets
    { url: `${baseUrl}/statistics`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    // Programmatic pages — hubs
    { url: `${baseUrl}/cv-examples`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/interview-questions`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/linkedin-headline`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    // Legal & support
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.6, lastModified: today },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.4, lastModified: today },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.4, lastModified: today },
    { url: `${baseUrl}/refund`, changeFrequency: 'yearly', priority: 0.4, lastModified: today },
    { url: `${baseUrl}/cookies`, changeFrequency: 'yearly', priority: 0.3, lastModified: today },
  ];

  const roleRoutes: MetadataRoute.Sitemap = roleSlugs.map((slug) => ({
    url: `${baseUrl}/cv-examples/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    lastModified: today,
  }));

  const interviewRoutes: MetadataRoute.Sitemap = roleSlugs.map((slug) => ({
    url: `${baseUrl}/interview-questions/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
    lastModified: today,
  }));

  const linkedinRoutes: MetadataRoute.Sitemap = roleSlugs.map((slug) => ({
    url: `${baseUrl}/linkedin-headline/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: today,
  }));

  return [...staticRoutes, ...roleRoutes, ...interviewRoutes, ...linkedinRoutes];
}
