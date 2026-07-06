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
    q: 'Why does the headline character limit matter?',
    a: "LinkedIn headlines cut off at 220 characters, and search results show even less. Every option this tool generates fits the limit while front-loading your strongest keywords and role, so recruiters searching LinkedIn actually find you.",
  },
  {
    q: 'What makes an About section "recruiter-ready"?',
    a: 'It is written in first person, opens with a specific hook instead of a generic summary, includes concrete achievements from your experience, and naturally works in the keywords recruiters search for in your target roles — without reading like a keyword list.',
  },
  {
    q: 'Do I get multiple headline options, or just one?',
    a: 'You get several distinct options so you can pick the angle that fits you best — skills-first, outcome-first, or title-first — rather than a single fixed suggestion.',
  },
  {
    q: 'Is this different from static "LinkedIn headline examples" pages?',
    a: 'Yes — the examples pages show formulas and samples by role for inspiration. This tool generates headline and About copy from your actual experience, tailored to you rather than a generic template.',
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
      toolName="AI LinkedIn Headline & About Generator"
      faqs={faqs}
    >
      <LinkedInOptimizerAI />
    </AiToolLayout>
  );
}
