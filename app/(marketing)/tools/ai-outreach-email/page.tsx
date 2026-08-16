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
    q: 'What email moments does this cover?',
    a: 'Three: cold outreach to a recruiter or hiring manager, a follow-up after applying or interviewing with no response, and a post-interview thank-you note.',
  },
  {
    q: 'Why does the email stay under 140 words?',
    a: 'Recruiters and hiring managers skim. A crisp, specific email under 140 words with a clear subject line gets read and replied to far more often than a long, generic message.',
  },
  {
    q: 'Does it sound like an AI wrote it?',
    a: 'It is written in a human, direct tone with a specific subject line rather than generic corporate phrasing — closer to how a well-prepared candidate would actually write it, not a form letter.',
  },
  {
    q: 'What context should I add for the best result?',
    a: 'Include the role, company, and one or two specific details — where you found the role, a mutual connection, or something from the interview — the more specific the input, the less generic the output.',
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
      toolName="AI Job Outreach Email Generator"
      faqs={faqs}
    >
      <OutreachEmailAI />
    </AiToolLayout>
  );
}
