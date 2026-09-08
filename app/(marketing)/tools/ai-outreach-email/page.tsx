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
  { q: 'What kinds of emails can it write?', a: 'Three moments: cold outreach to a recruiter or hiring manager, an application follow-up, and a post-interview thank-you note — each with its own structure and expectations.' },
  { q: 'Why is it capped at 140 words?', a: 'Short, specific emails get read and replied to; long ones get skimmed or skipped. The cap forces the AI to keep only the one hook and one ask that matter.' },
  { q: 'Does it write a subject line too?', a: 'Yes — a specific, non-generic subject line for each email, since that is what determines whether it gets opened at all.' },
  { q: 'What do I need to use it?', a: 'A free CV Prime account and your own OpenRouter AI key. Each email costs a few paise in AI usage.' },
];

export default function AiOutreachEmailPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Write outreach that gets a"
      highlight="reply"
      subtitle="Pick the moment — cold outreach, a follow-up, or a post-interview thank-you — add a little context, and get a crisp, human email with a specific subject line, under 140 words."
      path="/tools/ai-outreach-email"
      appName="AI Job Outreach Email Generator"
      faqs={faqs}
    >
      <OutreachEmailAI />
    </AiToolLayout>
  );
}
