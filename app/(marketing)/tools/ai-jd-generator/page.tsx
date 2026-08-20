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
    q: 'What is the AI job description generator?',
    a: 'A free tool for hiring managers, recruiters, and founders that writes clean, ready-to-post job descriptions in one consistent format — for a single role, or in bulk for up to 8 roles at once — with a tone you choose.',
  },
  {
    q: 'Why does a consistent JD format matter?',
    a: 'Job descriptions written by different people at different times tend to drift in structure, length, and tone, which makes a careers page look inconsistent and makes candidates work harder to compare roles. A single generator keeps every posting in the same clean format.',
  },
  {
    q: 'How does it work?',
    a: 'Enter the role details for one job, or provide several roles for bulk generation, pick a tone, and the AI — running on your own saved OpenRouter key — drafts each description in the same structure. Copy each one directly or download it as Markdown to paste into your ATS or job board.',
  },
  {
    q: 'Can I edit the generated description before posting it?',
    a: 'Yes, and you should treat the output as a strong first draft. Review it for accuracy on compensation, required experience, and legal/compliance language specific to your company and location before publishing.',
  },
  {
    q: 'How is this different from CV Prime\'s other tools?',
    a: 'Most CV Prime tools are built for job seekers preparing their own resume and application. This generator is the one tool aimed at the hiring side — writing the job description a candidate would later paste into tools like the AI JD decoder or AI ATS score checker.',
  },
];

export default function AiJdGeneratorPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate job"
      highlight="descriptions"
      subtitle="Write polished, consistent job descriptions in one clean format — a single role or up to 8 at once. Pick a tone, then copy or download each as Markdown, ready to post."
      path="/tools/ai-jd-generator"
      appName="CV Prime AI Job Description Generator"
      appDescription="Free AI tool that writes consistent, ready-to-post job descriptions for a single role or in bulk."
      faqs={faqs}
    >
      <JdGeneratorAI />
    </AiToolLayout>
  );
}
