import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { LinkedInOptimizerAI } from '@/components/tools/LinkedInOptimizerAI';

export const metadata: Metadata = {
  title: 'AI LinkedIn Headline & About Generator (Free) | CV Prime',
  description:
    'Generate keyword-rich LinkedIn headline options (under 220 characters) and a compelling first-person About section from your experience. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-linkedin' },
  openGraph: {
    title: 'AI LinkedIn Headline & About Generator',
    description: 'Keyword-rich LinkedIn headlines and a compelling About section in seconds.',
    url: 'https://cv-prime.in/tools/ai-linkedin',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI LinkedIn Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'How many headline options do I get?',
    a: 'Several distinct options, each under LinkedIn\'s 220-character headline limit, so you can pick the angle that best fits how you want recruiters and your network to find you.',
  },
  {
    q: 'What makes an About section "keyword-rich"?',
    a: 'It naturally includes the role titles, skills, and industry terms recruiters actually search LinkedIn for — woven into real sentences about your experience rather than stuffed in as a list, which both reads better and surfaces you in more searches.',
  },
  {
    q: 'Is this different from the free CV Prime resume-builder templates?',
    a: 'Yes — this tool only writes LinkedIn profile copy (headline + About). For a full ATS-ready resume with templates and PDF export, use the AI CV builder in your CV Prime account.',
  },
];

export default function AiLinkedInPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Optimize your"
      highlight="LinkedIn"
      subtitle="Paste your experience and get keyword-rich headline options (under LinkedIn's 220-character limit) plus a compelling, first-person About section — recruiter-ready."
      slug="ai-linkedin"
      schemaName="CV Prime AI LinkedIn Headline & About Generator"
      schemaDescription="Generate keyword-rich LinkedIn headline options and a compelling first-person About section from your experience with AI."
      faqs={faqs}
    >
      <LinkedInOptimizerAI />
    </AiToolLayout>
  );
}
