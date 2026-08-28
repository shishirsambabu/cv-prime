import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { JdGeneratorAI } from '@/components/tools/JdGeneratorAI';

export const metadata: Metadata = {
  title: 'AI Job Description Generator — Single & Bulk, One Format | CV Prime',
  description:
    'Generate clean, consistent, ready-to-post job descriptions in one format — for a single role or in bulk (up to 8 at once). Pick a tone, then copy or download each as Markdown. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-jd-generator' },
  openGraph: {
    title: 'AI Job Description Generator — Single & Bulk',
    description: 'Structured, consistent job descriptions for one role or many at once. Copy or download each.',
    url: 'https://cv-prime.in/tools/ai-jd-generator',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Job Description Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'Who is this tool for — job seekers or hiring managers?',
    a: 'Hiring managers, founders, and recruiters who need to write or standardize job postings. It\'s the sibling tool to CV Prime\'s candidate-facing tools: same AI infrastructure, opposite side of the hiring conversation.',
  },
  {
    q: 'Can I generate more than one job description at a time?',
    a: 'Yes — bulk mode generates up to 8 job descriptions in one run, each in the same consistent structure and tone, so a batch of postings reads like one coherent set instead of eight different styles.',
  },
  {
    q: 'What formats can I export to?',
    a: 'Copy the text directly or download each description as Markdown, ready to paste into a job board, ATS, or careers page.',
  },
  {
    q: 'Is it free to use?',
    a: 'Yes, with a free CV Prime account and your own connected OpenRouter API key — you pay only OpenRouter\'s small per-run token cost, with no CV Prime subscription required.',
  },
];

export default function AiJdGeneratorPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate job"
      highlight="descriptions"
      subtitle="Write polished, consistent job descriptions in one clean format — a single role or up to 8 at once. Pick a tone, then copy or download each as Markdown, ready to post."
      slug="ai-jd-generator"
      appName="CV Prime AI Job Description Generator"
      appDescription="AI tool that generates clean, consistent job descriptions for a single role or in bulk (up to 8), exportable as Markdown. Runs on the user's own AI key."
      faqs={faqs}
    >
      <JdGeneratorAI />
    </AiToolLayout>
  );
}
