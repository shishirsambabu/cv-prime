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
    q: 'Who is this tool for?',
    a: 'Hiring managers, recruiters, and founders who need to write clean, consistent job descriptions quickly — for a single opening or a batch of roles that should all follow the same format.',
  },
  {
    q: 'Can I generate multiple job descriptions at once?',
    a: 'Yes, up to 8 roles in bulk in a single run, all in the same consistent structure, so your careers page or job board postings look uniform.',
  },
  {
    q: 'What tones can I choose from?',
    a: 'Pick the tone that matches your employer brand before generating — the structure and required sections stay consistent regardless of tone.',
  },
  {
    q: 'What format do I get the output in?',
    a: 'Each job description can be copied directly or downloaded as Markdown, ready to paste into an ATS, job board, or careers page.',
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
      faqs={faqs}
    >
      <JdGeneratorAI />
    </AiToolLayout>
  );
}
