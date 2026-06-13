import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';
const today = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: today,
    },
    {
      url: `${baseUrl}/templates`,
      changeFrequency: 'monthly',
      priority: 0.9,
      lastModified: today,
    },
    {
      url: `${baseUrl}/pricing`,
      changeFrequency: 'monthly',
      priority: 0.9,
      lastModified: today,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'yearly',
      priority: 0.6,
      lastModified: today,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'yearly',
      priority: 0.4,
      lastModified: today,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.4,
      lastModified: today,
    },
    {
      url: `${baseUrl}/refund`,
      changeFrequency: 'yearly',
      priority: 0.4,
      lastModified: today,
    },
    {
      url: `${baseUrl}/cookies`,
      changeFrequency: 'yearly',
      priority: 0.3,
      lastModified: today,
    },
    {
      url: `${baseUrl}/online-cv-maker`,
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: today,
    },
    {
      url: `${baseUrl}/ai-cv-builder`,
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: today,
    },
    {
      url: `${baseUrl}/ats-friendly-cv`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: today,
    },
    {
      url: `${baseUrl}/cv-builder-india`,
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: today,
    },
    {
      url: `${baseUrl}/resume-vs-cv`,
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: today,
    },
    {
      url: `${baseUrl}/cv-examples`,
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: today,
    },
    {
      url: `${baseUrl}/cv-examples/software-engineer`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: today,
    },
    {
      url: `${baseUrl}/cv-examples/data-analyst`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: today,
    },
    {
      url: `${baseUrl}/cv-examples/product-manager`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: today,
    },
    {
      url: `${baseUrl}/cv-examples/marketing-manager`,
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: today,
    },
    {
      url: `${baseUrl}/cv-examples/hr-manager`,
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: today,
    },
    {
      url: `${baseUrl}/cv-examples/finance-analyst`,
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: today,
    },
  ];
}
