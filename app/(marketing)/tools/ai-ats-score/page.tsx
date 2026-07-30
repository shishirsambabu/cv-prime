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
  {
    q: 'How is the AI ATS score different from the free keyword matcher?',
    a: 'The free ATS keyword matcher (no login) only checks keyword overlap. This AI version reads your resume and the JD in full — it scores keyword match, format risk, and section gaps together, then explains exactly what to fix in plain language, not just a percentage.',
  },
  {
    q: 'What counts as a good ATS score?',
    a: '80+ means your resume is well aligned with the role. 60-79 usually means a handful of missing keywords or weak bullets are holding you back. Below 60, treat the report as a checklist and fix the highest-impact items first — usually missing must-have keywords and unclear section headings.',
  },
  {
    q: 'Does this use my own AI key?',
    a: 'Yes. The AI tools run on your own OpenRouter key, saved encrypted in your free account, so there is no per-tool signup and only a small per-use cost to you directly — CV Prime never marks it up.',
  },
];

export default function AiAtsScorePage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="AI ATS score"
      highlight="checker"
      subtitle="Paste your resume and the job description. The AI scores your ATS match 0–100, shows the exact keywords you're missing, and gives you concrete fixes — calibrated for the systems Indian employers use."
      slug="ai-ats-score"
      schemaName="CV Prime AI ATS Score Checker"
      schemaDescription="Score your resume against a job description with an AI-generated ATS match score, missing keywords, and concrete fixes."
      faqs={faqs}
    >
      <AtsScoreCheckerAI />
    </AiToolLayout>
  );
}
