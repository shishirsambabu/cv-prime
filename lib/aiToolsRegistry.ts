export interface AiToolRegistryEntry {
  slug: string;
  href: string;
  name: string;
  shortLabel: string;
  description: string;
}

/**
 * Shared metadata for the BYOK AI tool pages under /tools/ai-*. Drives the
 * JSON-LD, breadcrumb, and related-tools links rendered by AiToolLayout so
 * every tool page inherits structured data and internal links from one file.
 */
export const aiToolsRegistry: AiToolRegistryEntry[] = [
  {
    slug: 'ai-ats-score',
    href: '/tools/ai-ats-score',
    name: 'AI ATS Score Checker',
    shortLabel: 'ATS score checker',
    description: 'Score a resume against a job description 0–100 and list missing keywords.',
  },
  {
    slug: 'ai-bullet-rewriter',
    href: '/tools/ai-bullet-rewriter',
    name: 'AI Bullet Rewriter',
    shortLabel: 'Bullet rewriter',
    description: 'Turn duty-based resume bullets into outcome-driven, ATS-friendly lines.',
  },
  {
    slug: 'ai-cover-letter',
    href: '/tools/ai-cover-letter',
    name: 'AI Cover Letter Generator',
    shortLabel: 'Cover letter generator',
    description: 'Generate a tailored cover letter from a resume and job description.',
  },
  {
    slug: 'ai-cv-roast',
    href: '/tools/ai-cv-roast',
    name: 'AI CV Roast',
    shortLabel: 'CV roast',
    description: 'A recruiter-style critique of a resume with a score and concrete fixes.',
  },
  {
    slug: 'ai-jd-decoder',
    href: '/tools/ai-jd-decoder',
    name: 'AI Job Description Decoder',
    shortLabel: 'JD decoder',
    description: 'Decode a job description into real must-haves, hidden asks, and red flags.',
  },
  {
    slug: 'ai-jd-generator',
    href: '/tools/ai-jd-generator',
    name: 'AI Job Description Generator',
    shortLabel: 'JD generator',
    description: 'Generate consistent job descriptions for one role or in bulk.',
  },
  {
    slug: 'ai-interview-questions',
    href: '/tools/ai-interview-questions',
    name: 'AI Interview Question Generator',
    shortLabel: 'Interview questions',
    description: 'The most likely interview questions for a role, each with an answer tip.',
  },
  {
    slug: 'ai-role-fit',
    href: '/tools/ai-role-fit',
    name: 'AI Role-Fit Finder',
    shortLabel: 'Role-fit finder',
    description: 'Find the roles a resume is most competitive for, with fit scores and gaps.',
  },
  {
    slug: 'ai-linkedin',
    href: '/tools/ai-linkedin',
    name: 'AI LinkedIn Headline & About Generator',
    shortLabel: 'LinkedIn generator',
    description: 'Keyword-rich LinkedIn headline options and an About section.',
  },
  {
    slug: 'ai-outreach-email',
    href: '/tools/ai-outreach-email',
    name: 'AI Job Outreach Email Generator',
    shortLabel: 'Outreach email generator',
    description: 'Cold outreach, follow-up, and thank-you emails for a job search.',
  },
  {
    slug: 'ai-salary-negotiation',
    href: '/tools/ai-salary-negotiation',
    name: 'AI Salary Negotiation Coach',
    shortLabel: 'Salary negotiation coach',
    description: 'Talking points and scripts for Indian CTC salary negotiations.',
  },
  {
    slug: 'ai-skills-gap',
    href: '/tools/ai-skills-gap',
    name: 'AI Skills Gap Finder',
    shortLabel: 'Skills gap finder',
    description: 'The highest-leverage skills to learn next for a target role.',
  },
];

export const aiToolsRegistryMap: Record<string, AiToolRegistryEntry> = Object.fromEntries(
  aiToolsRegistry.map((tool) => [tool.slug, tool]),
);

/** Deterministic pick of related tools: the 3 entries following this slug, wrapping around. */
export function relatedAiTools(slug: string, count = 3): AiToolRegistryEntry[] {
  const index = aiToolsRegistry.findIndex((tool) => tool.slug === slug);
  if (index === -1) return aiToolsRegistry.slice(0, count);
  const related: AiToolRegistryEntry[] = [];
  for (let i = 1; i <= count; i += 1) {
    const entry = aiToolsRegistry[(index + i) % aiToolsRegistry.length];
    if (entry) related.push(entry);
  }
  return related;
}
