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
    q: 'What is an AI job outreach email generator?',
    a: 'It is a tool that writes short, human job-search emails for three specific moments — cold outreach to a hiring manager, a follow-up after applying, and a thank-you after an interview — each with a specific subject line and kept under 140 words.',
  },
  {
    q: 'Why does a short, specific email work better than a long one?',
    a: 'Recruiters and hiring managers get dozens of similar messages a day. A crisp, specific email under 140 words with a clear subject line gets read in full; a long, generic one gets skimmed or ignored. Specificity (naming the role, a real reason for reaching out) beats length every time.',
  },
  {
    q: 'How does the outreach email generator work?',
    a: 'Pick the moment — cold outreach, application follow-up, or post-interview thank-you — add a little context (the role, company, or interviewer detail), and the AI drafts a specific subject line plus a crisp, human email body under 140 words, ready to personalize and send.',
  },
  {
    q: 'When should I send a follow-up after applying?',
    a: 'About one to two weeks after applying, if you have not heard back, is a reasonable window — long enough to avoid seeming impatient, short enough that the role is likely still open. Use the follow-up mode here to keep it short and add one new reason you are a fit.',
  },
  {
    q: 'Should I always send a thank-you email after an interview?',
    a: 'Yes — it is a low-cost, high-signal habit that most candidates skip. Send it within 24 hours, reference something specific from the conversation, and keep it short; the thank-you mode here is built for exactly that.',
  },
];

export default function AiOutreachEmailPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-outreach-email"
      name="AI Job Outreach Email Generator"
      eyebrow="AI tool · your key"
      title="Write outreach that gets a"
      highlight="reply"
      subtitle="Pick the moment — cold outreach, a follow-up, or a post-interview thank-you — add a little context, and get a crisp, human email with a specific subject line, under 140 words."
      faqs={faqs}
    >
      <OutreachEmailAI />
    </AiToolLayout>
  );
}
