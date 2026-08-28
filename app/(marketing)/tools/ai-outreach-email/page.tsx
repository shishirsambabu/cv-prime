import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { OutreachEmailAI } from '@/components/tools/OutreachEmailAI';

export const metadata: Metadata = {
  title: 'AI Job Outreach Email Generator — Cold, Follow-up & Thank-you | CV Prime',
  description:
    'Generate crisp recruiter outreach, application follow-up, and post-interview thank-you emails — specific subject line, human tone, under 140 words. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-outreach-email' },
  openGraph: {
    title: 'AI Job Outreach Email Generator',
    description: 'Cold outreach, follow-up, and thank-you emails that get replies.',
    url: 'https://cv-prime.in/tools/ai-outreach-email',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Outreach Email Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'What moments does this cover?',
    a: 'Three: cold recruiter/hiring-manager outreach, an application follow-up when you\'ve gone quiet, and a post-interview thank-you. Pick the moment and add context — the AI matches tone and structure to that specific situation.',
  },
  {
    q: 'Why keep it under 140 words?',
    a: 'Recruiters and hiring managers skim. A short, specific email with one clear ask gets read and replied to far more often than a long one — so every generated email is capped tight and built around a single subject line worth opening.',
  },
  {
    q: 'Will it sound robotic?',
    a: 'It\'s written for a human tone, not a template blast — specific to the context you give it (company, role, connection point) rather than generic "following up" language.',
  },
  {
    q: 'Is it free?',
    a: 'Yes, with a free CV Prime account and your own connected OpenRouter API key — you pay only the small per-run token cost directly to OpenRouter.',
  },
];

export default function AiOutreachEmailPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Write outreach that gets a"
      highlight="reply"
      subtitle="Pick the moment — cold outreach, a follow-up, or a post-interview thank-you — add a little context, and get a crisp, human email with a specific subject line, under 140 words."
      slug="ai-outreach-email"
      appName="CV Prime AI Job Outreach Email Generator"
      appDescription="AI tool that generates cold outreach, application follow-up, and post-interview thank-you emails with a specific subject line, under 140 words. Runs on the user's own AI key."
      faqs={faqs}
    >
      <OutreachEmailAI />
    </AiToolLayout>
  );
}
