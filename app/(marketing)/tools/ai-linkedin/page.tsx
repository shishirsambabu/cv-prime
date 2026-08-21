import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
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
    a: "Multiple keyword-rich options, each written to stay under LinkedIn's 220-character headline limit so none get cut off in search results or your profile.",
  },
  {
    q: 'Does it write my About section too?',
    a: 'Yes — alongside the headline options, it writes a compelling, first-person About section based on the experience you paste in, structured the way recruiters actually skim LinkedIn profiles.',
  },
  {
    q: 'Do I need to already have a LinkedIn profile filled in?',
    a: 'No — paste in your experience (from your resume or CV Prime account) and the tool generates headline and About copy from that, which you can then paste into LinkedIn directly.',
  },
];

export default function AiLinkedInPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI LinkedIn Headline & About Generator"
        path="/tools/ai-linkedin"
        description="AI tool that generates keyword-rich LinkedIn headline options and a first-person About section from your experience. Runs on your own AI key."
        breadcrumbLabel="AI LinkedIn Headline & About Generator"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Optimize your"
        highlight="LinkedIn"
        subtitle="Paste your experience and get keyword-rich headline options (under LinkedIn's 220-character limit) plus a compelling, first-person About section — recruiter-ready."
      >
        <LinkedInOptimizerAI />
        <AiToolFaq heading="AI LinkedIn generator — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
