import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AtsScoreCheckerAI } from '@/components/tools/AtsScoreCheckerAI';

export const metadata: Metadata = {
  title: 'AI ATS Score Checker — Score Your Resume vs a Job (Free) | CV Prime',
  description:
    'Paste your resume and a job description and get an AI ATS match score (0–100), the exact keywords you are missing, and concrete fixes. Runs on your own AI key — free to use.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-ats-score' },
  openGraph: {
    title: 'AI ATS Score Checker — Free, India-Ready',
    description: 'Get an AI ATS match score, missing keywords, and fixes for any job description.',
    url: 'https://cv-prime.in/tools/ai-ats-score',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI ATS Score Checker — CV Prime' }],
  },
};

const faqs = [
  { q: 'Is the AI ATS score checker free?', a: 'Yes. Create a free CV Prime account and connect your own OpenRouter AI key — each check then costs a few paise in AI usage, billed directly by OpenRouter, not CV Prime.' },
  { q: 'How is the ATS match score calculated?', a: 'The AI compares your resume against the job description and scores the match 0–100 based on keyword overlap, seniority signals, and required skills, then lists exactly which keywords are present and which are missing.' },
  { q: 'How is this different from the free ATS keyword matcher?', a: 'The free ATS keyword matcher runs instantly in your browser with no AI and no login. This AI version reasons about context (not just keyword matching) and gives concrete, resume-specific fixes — it needs your own AI key.' },
  { q: 'Does it store my resume or the job description?', a: 'No. Your resume and JD are sent to the AI model to generate the score and are not saved or used for anything else.' },
];

export default function AiAtsScorePage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="AI ATS score"
      highlight="checker"
      subtitle="Paste your resume and the job description. The AI scores your ATS match 0–100, shows the exact keywords you're missing, and gives you concrete fixes — calibrated for the systems Indian employers use."
      path="/tools/ai-ats-score"
      appName="AI ATS Score Checker"
      faqs={faqs}
    >
      <AtsScoreCheckerAI />
    </AiToolLayout>
  );
}
