import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in';

const publicPaths = [
  '/',
  '/templates',
  '/pricing',
  '/about',
  '/contact',
  '/ethics',
  '/statistics',
  '/llm.txt',
  // Resume tools
  '/resume-builder',
  '/free-resume-builder',
  '/ai-resume-builder',
  '/resume-maker',
  '/resume-generator',
  '/resume-optimizer',
  '/resume-checker',
  '/resume-format',
  '/cover-letter-generator',
  '/resume-vs-cv',
  '/fresher-resume',
  '/biodata-format',
  '/one-page-resume',
  // City-specific resume builder pages
  '/resume-builder-bangalore',
  '/resume-builder-mumbai',
  '/resume-builder-delhi',
  '/resume-builder-hyderabad',
  '/resume-builder-chennai',
  '/resume-builder-pune',
  // Industry & career content pages
  '/it-resume-builder',
  '/career-change-resume',
  // CV tools
  '/online-cv-maker',
  '/ai-cv-builder',
  '/cv-builder-india',
  '/resume-builder-india',
  // City pages
  '/resume-builder-bangalore',
  '/resume-builder-mumbai',
  '/resume-builder-delhi',
  '/resume-builder-hyderabad',
  '/resume-builder-chennai',
  '/resume-builder-pune',
  // ATS tools
  '/ats-checker',
  '/ats-friendly-cv',
  '/ats-report-2026',
  // Content clusters (hubs + dynamic sub-pages)
  '/cv-examples',
  '/resume-examples',
  '/cover-letter',
  '/cover-letter-examples',
  '/interview-questions',
  '/linkedin-headline',
  '/salary',
  '/ats-guide',
  '/resume-tips',
  '/resume-tips/how-to-write-a-resume',
  '/resume-tips/cover-letter-tips',
  '/resume-tips/resume-summary',
  '/resume-tips/action-verbs',
  '/resume-tips/skills-section',
  '/resume-tips/resume-bullet-points',
  '/resume-tips/quantifying-achievements',
  '/resume-tips/ats-keywords',
  '/resume-tips/resume-objective',
  '/resume-tips/work-experience',
  '/resume-tips/resume-length',
  '/resume-tips/gap-in-resume',
  '/resume-tips/resume-certifications',
  '/resume-tips/references-on-resume',
  '/create-with-ai',
  // Research & reference
  '/ats-report-2026',
  '/career-glossary',
  '/internship-resume',
  '/career-change-resume',
  '/glossary',
  '/blog',
  // Research
  '/ats-report-2026',
  // Competitor comparisons
  '/cv-prime-vs-zety',
  '/cv-prime-vs-resume-io',
  '/cv-prime-vs-novoresume',
  '/cv-prime-vs-teal',
  '/cv-prime-vs-enhancv',
  '/cv-prime-vs-kickresume',
  '/cv-prime-vs-rezi',
  '/cv-prime-vs-jobscan',
  '/cv-prime-vs-resume-genius',
  '/cv-prime-vs-myperfectresume',
  '/cv-prime-vs-canva',
  '/cv-prime-vs-google-docs',
  '/cv-prime-vs-linkedin-resume',
  '/resume-builder',
  // Legal
  '/terms',
  '/privacy',
  '/refund',
  '/cookies',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: publicPaths,
        disallow: ['/api/', '/dashboard/', '/editor/', '/job-tracker/', '/settings/', '/print/', '/debug-status/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Omgilibot', 'FacebookBot', 'Applebot-Extended', 'Bytespider', 'CCBot', 'DataForSeoBot', 'Amazonbot', 'Gemini', 'Bingbot'],
        allow: publicPaths,
        disallow: ['/api/', '/dashboard/', '/editor/', '/job-tracker/', '/settings/', '/print/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
