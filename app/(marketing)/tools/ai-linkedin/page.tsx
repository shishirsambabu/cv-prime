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
    q: 'What is an AI LinkedIn headline and About generator?',
    a: 'It is a tool that turns your experience into keyword-rich LinkedIn headline options (kept under LinkedIn\'s 220-character limit) and a compelling, first-person About section — the two fields recruiters and LinkedIn search weigh most heavily.',
  },
  {
    q: 'Why does my LinkedIn headline matter so much?',
    a: 'Your headline appears everywhere on LinkedIn — search results, comments, connection requests — and it is what recruiters using LinkedIn Recruiter search against. A generic headline like "Software Engineer at X" wastes that space; a keyword-rich, specific one gets you found for the right searches.',
  },
  {
    q: 'How does the LinkedIn generator work?',
    a: 'Paste a summary of your experience. The AI returns several headline options packed with relevant keywords and kept within the 220-character limit, plus a first-person About section that reads naturally rather than like a resume pasted into a bio field.',
  },
  {
    q: 'Will the generated About section sound like me?',
    a: 'It is written in first person from the experience you provide, so the more specific and honest your input, the more it will sound like you. Treat the output as a strong draft to personalize with your own voice and a couple of specific stories.',
  },
  {
    q: 'Should my LinkedIn headline match my resume?',
    a: 'They should be consistent in the roles and skills you claim, but they do not need identical wording — your resume targets one job at a time, while your LinkedIn headline should stay broad enough to surface in the range of searches relevant to your career.',
  },
];

export default function AiLinkedInPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-linkedin"
      name="AI LinkedIn Headline & About Generator"
      eyebrow="AI tool · your key"
      title="Optimize your"
      highlight="LinkedIn"
      subtitle="Paste your experience and get keyword-rich headline options (under LinkedIn's 220-character limit) plus a compelling, first-person About section — recruiter-ready."
      faqs={faqs}
    >
      <LinkedInOptimizerAI />
    </AiToolLayout>
  );
}
