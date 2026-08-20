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
    q: 'What does the AI LinkedIn generator do?',
    a: 'It is a free tool that takes your experience and generates several keyword-rich LinkedIn headline options, each within LinkedIn\'s 220-character limit, plus a compelling first-person About section — written to read naturally, not like a resume pasted into a profile.',
  },
  {
    q: 'Why does a LinkedIn headline matter so much?',
    a: 'Your headline is the first thing recruiters and your network see in search results, connection requests, and comments — before they ever click into your profile. A generic "Job Title at Company" headline wastes that space; a keyword-rich, specific one gets you found in recruiter searches and makes people want to read further.',
  },
  {
    q: 'How does it work?',
    a: 'Paste a summary of your experience, skills, and the kind of roles you want to be found for. Using your saved OpenRouter key, the AI generates multiple headline options and an About section draft in seconds.',
  },
  {
    q: 'Should I use the About section exactly as generated?',
    a: 'No — use it as a strong starting draft. Add your own voice, specific stories, and any personal detail that makes the profile sound like you, since LinkedIn profiles that read as too generic or AI-written tend to get less genuine engagement.',
  },
  {
    q: 'How is this different from CV Prime\'s LinkedIn headline pages?',
    a: 'CV Prime also publishes role-specific example headlines for browsing inspiration. This tool is the generator: it produces headline and About options tailored to your own experience, not pre-written role templates.',
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
      appName="CV Prime AI LinkedIn Headline & About Generator"
      appDescription="Free AI tool that generates keyword-rich LinkedIn headline options and an About section from a person's experience."
      faqs={faqs}
    >
      <LinkedInOptimizerAI />
    </AiToolLayout>
  );
}
