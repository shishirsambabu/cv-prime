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
    a: 'Several keyword-rich variations, each under LinkedIn\'s 220-character limit, so you can pick the tone and emphasis that fits you best.',
  },
  {
    q: 'Is the About section written in first person?',
    a: 'Yes — it is written the way a real profile reads, in first person, using the experience you paste in rather than generic template language.',
  },
  {
    q: 'Does this use my actual resume or LinkedIn profile?',
    a: 'It uses whatever experience text you paste in. Paste your resume, your current LinkedIn About section, or a summary of your background — the more specific detail you give it, the sharper the output.',
  },
];

export default function AiLinkedInPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Optimize your"
      highlight="LinkedIn"
      subtitle="Paste your experience and get keyword-rich headline options (under LinkedIn's 220-character limit) plus a compelling, first-person About section — recruiter-ready."
      path="/tools/ai-linkedin"
      schemaName="CV Prime AI LinkedIn Headline & About Generator"
      schemaDescription="AI tool that generates keyword-rich LinkedIn headline options and a first-person About section from a candidate's experience. Runs on the user's own AI key."
      faqs={faqs}
    >
      <LinkedInOptimizerAI />
    </AiToolLayout>
  );
}
