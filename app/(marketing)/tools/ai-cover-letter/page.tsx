import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { CoverLetterAI } from '@/components/tools/CoverLetterAI';

export const metadata: Metadata = {
  title: 'AI Cover Letter Generator — Tailored to the Job (Free) | CV Prime',
  description:
    'Paste your resume and a job description and get a tailored 180–250 word cover letter with a real hook and your concrete achievements — in a professional, friendly, or executive tone. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-cover-letter' },
  openGraph: {
    title: 'AI Cover Letter Generator — Tailored to Any Job',
    description: 'A tailored cover letter from your resume and the job description, in seconds.',
    url: 'https://cv-prime.in/tools/ai-cover-letter',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Cover Letter Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'How long is the generated cover letter?',
    a: 'It targets 180–250 words — long enough to make a real case, short enough that a recruiter actually reads the whole thing. It follows a hook, proof, why-them, ask structure rather than a generic template.',
  },
  {
    q: 'What tones can I choose from?',
    a: 'Professional, friendly, or executive. Professional suits most corporate applications; friendly works for startups and culture-forward teams; executive suits senior and leadership roles where a more formal, confident register is expected.',
  },
  {
    q: 'Will it invent achievements I have not done?',
    a: 'No. It only uses the resume and job description content you provide — it does not fabricate employers, metrics, or accomplishments. If your resume lacks a strong achievement for a requirement, it writes around your real experience instead of inventing one.',
  },
  {
    q: 'Can I use this for every job I apply to?',
    a: 'Yes — generate a new letter per job description so each one is tailored to that specific role rather than reused generically, which is exactly what recruiters and ATS keyword checks reward.',
  },
];

export default function AiCoverLetterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate a tailored cover"
      highlight="letter"
      subtitle="Paste your resume and the job description. The AI writes a 180–250 word cover letter with a specific hook and your real achievements, in the tone you choose — never fabricating."
      slug="ai-cover-letter"
      toolName="AI Cover Letter Generator"
      faqs={faqs}
    >
      <CoverLetterAI />
    </AiToolLayout>
  );
}
