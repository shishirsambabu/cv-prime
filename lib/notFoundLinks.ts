/**
 * Destinations offered on the 404 page. Every href must be a real public
 * route — __tests__/NotFound.test.tsx fails the build if one of these stops
 * resolving to a page under app/(marketing).
 */
export interface NotFoundLink {
  href: string;
  title: string;
  desc: string;
}

export const notFoundLinks: readonly NotFoundLink[] = [
  {
    href: '/ai-resume-builder',
    title: 'AI resume builder',
    desc: 'Build an ATS-ready resume tailored to a job description.',
  },
  {
    href: '/ats-checker',
    title: 'ATS checker',
    desc: 'Score your resume against a job description and see missing keywords.',
  },
  {
    href: '/resume-examples',
    title: 'Resume examples',
    desc: 'Role-by-role resume examples for the Indian job market.',
  },
  {
    href: '/templates',
    title: 'Resume templates',
    desc: 'ATS-friendly templates you can export as a clean PDF.',
  },
  {
    href: '/cover-letter-generator',
    title: 'Cover letter generator',
    desc: 'Generate a cover letter matched to your CV and the role.',
  },
  {
    href: '/tools',
    title: 'Free resume tools',
    desc: 'Keyword matcher, strength analyzer and more — no login.',
  },
  {
    href: '/resume-tips',
    title: 'Resume tips',
    desc: 'Guides on summaries, bullet points, skills and formats.',
  },
  {
    href: '/pricing',
    title: 'Pricing',
    desc: 'See what is free and what Pro adds.',
  },
];
