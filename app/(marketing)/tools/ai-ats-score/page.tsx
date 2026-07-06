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
    q: 'What is an AI ATS score checker?',
    a: 'It is a tool that compares your resume against a specific job description the way an applicant tracking system (ATS) does, then returns a 0–100 match score, the keywords the job needs that your resume is missing, and concrete fixes — instead of a generic grammar or format check.',
  },
  {
    q: 'Why does my ATS score matter?',
    a: 'Most mid-size and large employers filter or rank resumes with an ATS before a human ever reads them. A resume that is a strong fit for the role but is missing the exact terms the JD screens for can be scored low and never reach a recruiter. Closing that gap is often the single highest-leverage fix you can make.',
  },
  {
    q: 'How does the AI ATS score checker work?',
    a: 'Paste your resume text and the job description. The AI reads both, scores your match 0–100, lists the specific keywords and phrases present in the JD but absent from your resume, and gives you fixes calibrated for the ATS platforms (like Naukri, Workday, and Greenhouse) Indian employers commonly use.',
  },
  {
    q: 'Do I need my own AI key to use this?',
    a: 'Yes. This tool runs on your own OpenRouter key inside your free CV Prime account, which costs a few paise per run and keeps your resume data under your control rather than a shared company key.',
  },
  {
    q: 'How is this different from the free ATS keyword matcher?',
    a: 'The free keyword matcher (no login) checks keyword overlap only, instantly, in your browser. This AI version goes further: it scores format and structure too, explains why each missing keyword matters, and suggests concrete rewrites — then you can build the fixes straight into a CV Prime resume and export it.',
  },
];

export default function AiAtsScorePage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-ats-score"
      name="AI ATS Score Checker"
      eyebrow="AI tool · your key"
      title="AI ATS score"
      highlight="checker"
      subtitle="Paste your resume and the job description. The AI scores your ATS match 0–100, shows the exact keywords you're missing, and gives you concrete fixes — calibrated for the systems Indian employers use."
      faqs={faqs}
    >
      <AtsScoreCheckerAI />
    </AiToolLayout>
  );
}
