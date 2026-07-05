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
    q: 'Why does the LinkedIn headline character limit matter?',
    a: 'LinkedIn truncates headlines beyond 220 characters and search results show even less, so every word needs to earn its place. The generator writes headline options that stay within the limit while front-loading the keywords recruiters search for.',
  },
  {
    q: 'What do I get besides the headline?',
    a: 'A compelling, first-person About section written from your actual experience — not a generic template — so your profile reads like you, not like everyone else in your field.',
  },
  {
    q: 'How many headline options does it generate?',
    a: 'Multiple keyword-rich variations so you can pick the phrasing that best matches your target roles and personal voice.',
  },
  {
    q: 'Will this help my profile show up in recruiter searches?',
    a: 'Recruiters filter LinkedIn search by keywords in your headline and About section. Making sure your actual skills and target role appear there in natural language is the single biggest lever for showing up in those searches.',
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
      appName="CV Prime AI LinkedIn Headline & About Generator"
      faqs={faqs}
    >
      <LinkedInOptimizerAI />
    </AiToolLayout>
  );
}
