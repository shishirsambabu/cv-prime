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
    q: 'How is this different from the free ATS keyword matcher?',
    a: 'The free keyword matcher (no login) checks keyword overlap only, using on-page logic. This AI version uses your own AI key to also weigh format, section structure, and bullet quality — then explains its reasoning and gives you specific fixes, not just a list of missing terms.',
  },
  {
    q: 'What does the 0–100 score actually measure?',
    a: 'It combines keyword coverage against the job description, section completeness (contact, experience, education, skills), bullet quality (outcome-led vs duties-led), and format risk (tables, columns, non-standard headings) into a single score calibrated for the ATS systems used by Indian employers like Workday, Greenhouse, and Lever.',
  },
  {
    q: 'Does it store my resume or the job description?',
    a: 'No. The request runs through your own AI key for that single call; CV Prime does not use your resume content to train models, and the free tool does not require an account beyond the one you use to save your saved AI key.',
  },
  {
    q: 'What should I do after I get my score?',
    a: 'Fix the specific keyword and format gaps it lists, then re-run the check to confirm your score improved before you submit the application. For a full rewrite of every weak bullet in one pass, use the AI bullet rewriter or the full AI CV builder.',
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
      toolName="AI ATS Score Checker"
      faqs={faqs}
    >
      <AtsScoreCheckerAI />
    </AiToolLayout>
  );
}
