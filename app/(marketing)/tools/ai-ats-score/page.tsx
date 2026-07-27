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
    a: 'The free keyword matcher checks overlap only. This AI version scores format and section gaps too, explains why each point was lost, and gives concrete fixes — not just a list of missing words.',
  },
  {
    q: 'Does this tool store my resume or the job description?',
    a: 'No. Your resume and JD are sent directly to your own AI provider using your encrypted key and are not retained by CV Prime beyond generating the score.',
  },
  {
    q: 'What score should I aim for before applying?',
    a: 'Aim for 80+ for roles you care about. Below 65, an ATS is likely to deprioritise your resume — use the fixes list to close the gap, then re-run the score before you apply.',
  },
];

export default function AiAtsScorePage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="AI ATS score"
      highlight="checker"
      subtitle="Paste your resume and the job description. The AI scores your ATS match 0–100, shows the exact keywords you're missing, and gives you concrete fixes — calibrated for the systems Indian employers use."
      path="/tools/ai-ats-score"
      schemaName="CV Prime AI ATS Score Checker"
      schemaDescription="AI tool that scores a resume against a job description 0-100, lists missing keywords, and gives concrete fixes. Runs on the user's own AI key."
      faqs={faqs}
    >
      <AtsScoreCheckerAI />
    </AiToolLayout>
  );
}
