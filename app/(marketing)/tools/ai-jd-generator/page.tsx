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
    a: 'Hiring managers, founders, and recruiters who need to write or standardise job descriptions quickly. It is a companion tool to CV Prime\'s job-seeker features, useful for anyone posting roles on Naukri, LinkedIn, or an internal careers page.',
  },
  {
    q: 'What does "bulk" mode do?',
    a: 'Generate up to 8 job descriptions in one run — useful when you are opening multiple roles at once (e.g. a hiring sprint) and want every posting in the same structure and tone instead of writing each one separately.',
  },
  {
    q: 'Can I control the tone of the JD?',
    a: 'Yes — pick a tone before generating so the output matches your company\'s voice, from formal corporate to a more casual startup style.',
  },
  {
    q: 'What format do I get the result in?',
    a: 'Each job description can be copied directly or downloaded as Markdown, ready to paste into a job board, applicant tracking system, or careers page without reformatting.',
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
      toolName="AI Job Description Generator"
      faqs={faqs}
    >
      <JdGeneratorAI />
    </AiToolLayout>
  );
}
