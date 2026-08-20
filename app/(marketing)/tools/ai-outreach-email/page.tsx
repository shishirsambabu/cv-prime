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
    q: 'What is the AI job outreach email generator?',
    a: 'A free tool that writes short, human job-search emails for three specific moments — cold outreach to a recruiter or hiring manager, a follow-up after applying, and a thank-you after an interview — each with a specific subject line and under 140 words.',
  },
  {
    q: 'Why does a short, specific email work better?',
    a: 'Recruiters and hiring managers receive dozens of generic outreach messages. A short email with a specific, real detail (a mutual connection, a project you admire, a concrete point from the interview) reads as genuine effort and gets noticed far more than a long, generic template.',
  },
  {
    q: 'How does it work?',
    a: 'Choose the moment — cold outreach, follow-up, or thank-you — add a little context about the role, company, or conversation, and the AI, using your saved OpenRouter key, drafts a crisp email with a subject line in seconds.',
  },
  {
    q: 'Should I send the email exactly as generated?',
    a: 'Review it first. Confirm names, company details, and any specific facts are correct, and adjust the tone slightly so it sounds like you — a draft that is 90% there and personalized in 30 seconds beats a perfect-sounding but obviously templated message.',
  },
  {
    q: 'What is the ideal follow-up timing?',
    a: 'For a follow-up after applying, one to two weeks is generally reasonable unless the posting states otherwise. For a post-interview thank-you, send it within 24 hours while the conversation is still fresh for the interviewer.',
  },
];

export default function AiOutreachEmailPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Write outreach that gets a"
      highlight="reply"
      subtitle="Pick the moment — cold outreach, a follow-up, or a post-interview thank-you — add a little context, and get a crisp, human email with a specific subject line, under 140 words."
      path="/tools/ai-outreach-email"
      appName="CV Prime AI Job Outreach Email Generator"
      appDescription="Free AI tool that writes cold outreach, follow-up, and thank-you job-search emails with a subject line, under 140 words."
      faqs={faqs}
    >
      <OutreachEmailAI />
    </AiToolLayout>
  );
}
