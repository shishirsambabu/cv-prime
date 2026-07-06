import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { CvRoastAI } from '@/components/tools/CvRoastAI';

export const metadata: Metadata = {
  title: 'AI CV Roast — Brutally Honest Resume Critique (Free) | CV Prime',
  description:
    'Get a brutally honest, recruiter-style critique of your CV: an honest score, what is working, and every red flag with a concrete fix. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-cv-roast' },
  openGraph: {
    title: 'AI CV Roast — Honest Resume Critique',
    description: 'A blunt, constructive recruiter-style critique of your resume with fixes.',
    url: 'https://cv-prime.in/tools/ai-cv-roast',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI CV Roast — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'What is an AI CV roast?',
    a: 'It is a blunt, recruiter-style critique of your resume: an honest overall score, what is genuinely working, and every red flag — weak bullets, formatting issues, missing sections, vague claims — paired with a concrete fix, instead of vague generic feedback.',
  },
  {
    q: 'Why get a CV "roasted" instead of a soft review?',
    a: 'Most friends and family are too polite to tell you your resume opens with a cliche objective statement or buries your best achievement on page two. A blunt AI critique catches what a recruiter would silently judge in the six seconds they spend on your resume — before it costs you the interview.',
  },
  {
    q: 'How does the AI CV roast work?',
    a: 'Paste your resume text. The AI reads it the way a skeptical recruiter would and returns an honest score, a short list of what is actually strong, and every red flag it finds — each one paired with a specific, actionable fix rather than generic advice like "add more keywords."',
  },
  {
    q: 'Is the critique too harsh to be useful?',
    a: 'It is direct, not cruel — the goal is a constructive gut-check, not insults. Every criticism comes with a fix you can act on immediately, so you walk away with a to-do list, not just a lower opinion of your resume.',
  },
  {
    q: 'What should I do after the roast?',
    a: 'Work through the red flags in order, starting with the ones affecting your top third (summary and most recent role, since that is what recruiters scan first). Once you have applied the fixes, re-run the AI ATS score checker against a specific job description to confirm the improvement.',
  },
];

export default function AiCvRoastPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-cv-roast"
      name="AI CV Roast"
      eyebrow="AI tool · your key"
      title="Get your CV"
      highlight="roasted"
      subtitle="Paste your resume and get a brutally honest, recruiter-style critique — an honest score, what's genuinely working, and every red flag paired with a concrete fix."
      faqs={faqs}
    >
      <CvRoastAI />
    </AiToolLayout>
  );
}
