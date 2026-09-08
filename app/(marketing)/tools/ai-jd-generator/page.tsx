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
  { q: 'Can I generate more than one job description at a time?', a: 'Yes — the bulk mode generates up to 8 job descriptions in a single run, all in the same consistent structure and tone, so your postings look like they came from one hiring team.' },
  { q: 'What format do the job descriptions come in?', a: 'Each one follows the same clean structure — role summary, responsibilities, requirements, and what you offer — and can be copied or downloaded individually as Markdown, ready to paste into a job board.' },
  { q: 'Can I control the tone?', a: 'Yes, pick a tone before generating and it applies consistently across single or bulk runs.' },
  { q: 'Who is this tool for?', a: 'Hiring managers, recruiters, and founders who need consistent, ready-to-post job descriptions fast — it uses your own OpenRouter AI key and costs a few paise per generation.' },
];

export default function AiJdGeneratorPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate job"
      highlight="descriptions"
      subtitle="Write polished, consistent job descriptions in one clean format — a single role or up to 8 at once. Pick a tone, then copy or download each as Markdown, ready to post."
      path="/tools/ai-jd-generator"
      appName="AI Job Description Generator"
      faqs={faqs}
    >
      <JdGeneratorAI />
    </AiToolLayout>
  );
}
