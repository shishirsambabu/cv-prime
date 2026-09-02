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
    a: 'The free keyword matcher checks keyword overlap only. This AI version reads your resume and the JD together, scores your full ATS match 0–100, explains exactly why, and gives concrete fixes — not just a list of missing terms.',
  },
  {
    q: 'What counts as a good ATS score?',
    a: 'Aim for 80+ for roles you are serious about. Below 65 usually means missing keywords or format issues an ATS will penalize — the AI tells you which one it is and how to fix it.',
  },
  {
    q: 'Does it work for any job description?',
    a: 'Yes — paste any JD in any format and the AI adapts its scoring to the seniority and keywords in that specific posting, tuned for the ATS platforms common with Indian employers.',
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
      name="AI ATS Score Checker"
      description="Free AI tool that scores your resume's ATS match against a job description 0-100, shows missing keywords, and gives concrete fixes."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ats-keyword-matcher', label: 'Free keyword matcher' },
        { href: '/tools/ai-jd-decoder', label: 'AI JD decoder' },
        { href: '/tools/ai-bullet-rewriter', label: 'AI bullet rewriter' },
        { href: '/tailor-resume-to-job-description', label: 'Tailor resume to a JD' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <AtsScoreCheckerAI />
    </AiToolLayout>
  );
}
