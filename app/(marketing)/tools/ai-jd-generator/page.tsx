import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
import { JdGeneratorAI } from '@/components/tools/JdGeneratorAI';

const faqs = [
  {
    q: 'What does the AI job description generator create?',
    a: 'A clean, ready-to-post job description in a consistent format — responsibilities, requirements, and role summary — for a single role, or up to 8 roles at once in bulk. You pick a tone (for example formal or startup-casual) and the output is available to copy or download as Markdown.',
  },
  {
    q: 'Who is this for — job seekers or employers?',
    a: 'Primarily hiring teams, recruiters, and founders who need to write or standardise job postings quickly. It is also useful for job seekers who want to reverse-engineer what a realistic posting for their target role looks like, or who are drafting a role brief for a freelance/consulting engagement.',
  },
  {
    q: 'Can I generate multiple job descriptions at once?',
    a: 'Yes. The bulk mode accepts up to 8 roles in one pass and returns each as a separate, consistently formatted description — useful when a company is opening several roles at once and wants postings that read as part of the same employer brand rather than ad hoc.',
  },
  {
    q: 'Is the AI job description generator free to use?',
    a: 'Yes. It runs on your own OpenRouter API key, which costs a few paise per generation, and does not require a paid CV Prime plan.',
  },
];

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

export default function AiJdGeneratorPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate job"
      highlight="descriptions"
      subtitle="Write polished, consistent job descriptions in one clean format — a single role or up to 8 at once. Pick a tone, then copy or download each as Markdown, ready to post."
    >
      <JdGeneratorAI />
      <AiToolFaq
        toolName="AI Job Description Generator"
        toolUrl="https://cv-prime.in/tools/ai-jd-generator"
        description="Generate clean, consistent, ready-to-post job descriptions in one format — for a single role or in bulk (up to 8 at once). Pick a tone, then copy or download each as Markdown."
        faqs={faqs}
        related={[
          { href: '/tools/ai-jd-decoder', label: 'AI job description decoder' },
          { href: '/tools/ai-outreach-email', label: 'AI outreach email generator' },
        ]}
      />
    </AiToolLayout>
  );
}
