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
  { q: 'Why does the headline length matter?', a: "LinkedIn headlines are capped at 220 characters and get truncated in search results well before that, so every generated option is written to stay within the limit while front-loading your strongest keywords." },
  { q: 'Is the About section written in first person?', a: 'Yes — it reads like you wrote it, not like a resume summary pasted into a profile.' },
  { q: 'Will it use keywords recruiters actually search for?', a: 'It pulls from your pasted experience to surface the role titles, skills, and industry terms recruiters commonly search on LinkedIn, so your profile is more likely to surface in results.' },
  { q: 'Is there a free way to use this?', a: 'It needs a free CV Prime account and your own OpenRouter AI key — generation costs a few paise in AI usage, no CV Prime charge.' },
];

export default function AiLinkedInPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Optimize your"
      highlight="LinkedIn"
      subtitle="Paste your experience and get keyword-rich headline options (under LinkedIn's 220-character limit) plus a compelling, first-person About section — recruiter-ready."
      path="/tools/ai-linkedin"
      appName="AI LinkedIn Headline & About Generator"
      faqs={faqs}
    >
      <LinkedInOptimizerAI />
    </AiToolLayout>
  );
}
