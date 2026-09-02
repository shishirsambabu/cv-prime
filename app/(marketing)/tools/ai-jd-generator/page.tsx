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
    q: 'Who is this tool for — job seekers or recruiters?',
    a: 'It is built for anyone who needs to write job descriptions — recruiters, hiring managers, and founders — who want a clean, consistent format instead of writing each posting from scratch.',
  },
  {
    q: 'Can I generate multiple job descriptions at once?',
    a: 'Yes — bulk mode generates up to 8 descriptions in one pass, all in the same consistent format and tone, so a hiring round reads coherently across roles.',
  },
  {
    q: 'What format do I get the result in?',
    a: 'Each description can be copied directly or downloaded as Markdown, ready to paste into a job board or applicant tracking system.',
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
      name="AI Job Description Generator"
      description="Free AI tool that generates clean, consistent job descriptions for a single role or in bulk, ready to post."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ai-jd-decoder', label: 'AI JD decoder' },
        { href: '/tools/ai-interview-questions', label: 'AI interview question generator' },
        { href: '/tools/ai-skills-gap', label: 'AI skills gap finder' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <JdGeneratorAI />
    </AiToolLayout>
  );
}
