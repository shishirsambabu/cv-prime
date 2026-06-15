import type { MetadataRoute } from 'next';
import { roleSlugs } from '@/lib/roleData';

const baseUrl = 'https://cv-prime.in';
const today = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1, lastModified: today },
    { url: `${baseUrl}/templates`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/pricing`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/about`, changeFrequency: 'yearly', priority: 0.7, lastModified: today },
    // High-volume keyword landing pages
    { url: `${baseUrl}/resume-builder`, changeFrequency: 'monthly', priority: 0.95, lastModified: today },
    { url: `${baseUrl}/free-resume-builder`, changeFrequency: 'monthly', priority: 0.95, lastModified: today },
    { url: `${baseUrl}/ai-resume-builder`, changeFrequency: 'monthly', priority: 0.95, lastModified: today },
    { url: `${baseUrl}/resume-checker`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/fresher-resume`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/resume-format`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/cover-letter-examples`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    // Resume examples cluster hub
    { url: `${baseUrl}/resume-examples`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    // Resume tips pillar + sub-pages
    { url: `${baseUrl}/resume-tips`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/resume-tips/how-to-write-a-resume`, changeFrequency: 'monthly', priority: 0.95, lastModified: today },
    { url: `${baseUrl}/resume-tips/cover-letter-tips`, changeFrequency: 'monthly', priority: 0.88, lastModified: today },
    { url: `${baseUrl}/resume-tips/resume-summary`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/resume-tips/action-verbs`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/resume-tips/skills-section`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/resume-tips/resume-bullet-points`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/resume-tips/quantifying-achievements`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/resume-tips/ats-keywords`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/resume-tips/resume-objective`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    { url: `${baseUrl}/resume-tips/work-experience`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/resume-tips/resume-length`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    { url: `${baseUrl}/resume-tips/gap-in-resume`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    // Existing keyword cluster landing pages
    { url: `${baseUrl}/online-cv-maker`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/ai-cv-builder`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/ats-friendly-cv`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/ats-checker`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/cv-builder-india`, changeFrequency: 'monthly', priority: 0.9, lastModified: today },
    { url: `${baseUrl}/resume-vs-cv`, changeFrequency: 'monthly', priority: 0.75, lastModified: today },
    { url: `${baseUrl}/cover-letter`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/create-with-ai`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    // GEO/research assets
    { url: `${baseUrl}/statistics`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    // Programmatic pages — hubs
    { url: `${baseUrl}/cv-examples`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/interview-questions`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/linkedin-headline`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    { url: `${baseUrl}/cover-letter-examples`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    // New programmatic hubs
    { url: `${baseUrl}/salary`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    { url: `${baseUrl}/ats-guide`, changeFrequency: 'monthly', priority: 0.85, lastModified: today },
    // Competitor comparison pages
    { url: `${baseUrl}/cv-prime-vs-zety`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    { url: `${baseUrl}/cv-prime-vs-resume-io`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    { url: `${baseUrl}/cv-prime-vs-novoresume`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    { url: `${baseUrl}/cv-prime-vs-teal`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    { url: `${baseUrl}/cv-prime-vs-enhancv`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    { url: `${baseUrl}/cv-prime-vs-kickresume`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    { url: `${baseUrl}/cv-prime-vs-rezi`, changeFrequency: 'monthly', priority: 0.8, lastModified: today },
    // Legal & support
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.6, lastModified: today },
    { url: `${baseUrl}/ethics`, changeFrequency: 'yearly', priority: 0.4, lastModified: today },
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

const resumeExampleRoutes: MetadataRoute.Sitemap = roleSlugs.map((slug) => ({
    url: `${baseUrl}/resume-examples/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    lastModified: today,
  }));

  const salaryRoutes: MetadataRoute.Sitemap = roleSlugs.map((slug) => ({
    url: `${baseUrl}/salary/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    lastModified: today,
  }));

  const atsGuideRoutes: MetadataRoute.Sitemap = roleSlugs.map((slug) => ({
    url: `${baseUrl}/ats-guide/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    lastModified: today,
  }));

  const coverLetterExampleRoutes: MetadataRoute.Sitemap = roleSlugs.map((slug) => ({
    url: `${baseUrl}/cover-letter-examples/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
    lastModified: today,
  }));

  return [
    ...staticRoutes,
    ...roleRoutes,
    ...resumeExampleRoutes,
    ...interviewRoutes,
    ...linkedinRoutes,
    ...salaryRoutes,
    ...atsGuideRoutes,
    ...coverLetterExampleRoutes,
  ];
}
