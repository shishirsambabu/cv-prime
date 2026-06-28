import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { JdTailorAI } from '@/components/tools/JdTailorAI';

export const metadata: Metadata = {
  title: 'AI Resume Tailor — Tailor Your Resume to a Job Description | CV Prime',
  description:
    'Paste your resume and a job description and get a tailored professional summary, outcome-driven bullets, and the exact keywords to weave in — without fabricating anything. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-resume-tailor' },
  openGraph: {
    title: 'AI Resume Tailor — Tailor Your Resume to Any Job',
    description: 'Tailored summary, bullets, and keywords for any job description.',
    url: 'https://cv-prime.in/tools/ai-resume-tailor',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Tailor — CV Prime' }],
  },
};

export default function AiResumeTailorPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Tailor your resume to the"
      highlight="job"
      subtitle="Paste your resume and the job description. The AI reframes your real experience into a tailored summary and outcome-led bullets that match the role's keywords — never fabricating, only sharpening."
    >
      <JdTailorAI />
    </AiToolLayout>
  );
}
