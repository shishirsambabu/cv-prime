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
    a: 'Several keyword-rich variations, each under LinkedIn\'s 220-character limit, so you can pick the tone that fits how you want to be found by recruiters.',
  },
  {
    q: 'Is the About section written in first person?',
    a: 'Yes — it is written to sound like you, not a résumé bullet list, while still surfacing the keywords recruiters search for.',
  },
  {
    q: 'What do I need to paste in?',
    a: 'Your current resume or a summary of your experience is enough — the AI extracts your strongest skills and achievements to build both the headline and About section.',
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
      name="AI LinkedIn Headline & About Generator"
      description="Free AI tool that generates keyword-rich LinkedIn headline options and a first-person About section from your experience."
      faqs={faqs}
      relatedLinks={[
        { href: '/linkedin-profile-optimizer', label: 'LinkedIn profile optimizer' },
        { href: '/linkedin-headline', label: 'LinkedIn headline examples by role' },
        { href: '/tools/ai-outreach-email', label: 'AI outreach email generator' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <LinkedInOptimizerAI />
    </AiToolLayout>
  );
}
