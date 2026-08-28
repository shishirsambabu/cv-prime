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
    q: 'Why does the headline length matter?',
    a: 'LinkedIn truncates headlines beyond 220 characters, and search relies heavily on the words in yours. Every headline option this tool generates is checked to fit the limit while front-loading your strongest keywords.',
  },
  {
    q: 'Will the About section sound like generic AI copy?',
    a: 'It writes in first person from the specifics you provide — your actual roles, skills, and achievements — rather than generic filler. The more detail you paste in, the more specific and less templated the result is.',
  },
  {
    q: 'How many headline options do I get?',
    a: 'Several variations per run, so you can pick the angle that fits your target roles best — some lead with your title, others with your specialty or the outcomes you drive.',
  },
  {
    q: 'What do I need to use it?',
    a: 'A free CV Prime account and your own OpenRouter API key connected in settings (free to obtain). You pay only the tiny per-run token cost to OpenRouter directly.',
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
      appDescription="AI tool that generates keyword-rich LinkedIn headline options and a first-person About section from a user's experience. Runs on the user's own AI key."
      faqs={faqs}
    >
      <LinkedInOptimizerAI />
    </AiToolLayout>
  );
}
