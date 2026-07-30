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
    a: 'Three: cold outreach to a recruiter or hiring manager, a follow-up after you\'ve applied and heard nothing, and a thank-you note after an interview. Pick the moment and the AI matches tone and length to it.',
  },
  {
    q: 'Why keep it under 140 words?',
    a: 'Busy recruiters skim. A short, specific email with one clear ask gets read and answered far more often than a long one — the tool is built around that constraint deliberately.',
  },
  {
    q: 'Does it write a real subject line too?',
    a: 'Yes — every draft comes with a specific, non-generic subject line, since a vague subject is one of the most common reasons cold outreach gets ignored.',
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
      schemaName="CV Prime AI Job Outreach Email Generator"
      schemaDescription="Generate crisp recruiter outreach, application follow-up, and post-interview thank-you emails with AI — specific subject line, under 140 words."
      faqs={faqs}
    >
      <OutreachEmailAI />
    </AiToolLayout>
  );
}
