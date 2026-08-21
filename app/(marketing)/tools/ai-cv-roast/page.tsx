import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
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
    q: 'Is the AI CV Roast actually useful, or just for entertainment?',
    a: 'Both — it is blunt on purpose because vague feedback like "looks good!" does not fix resumes. Every criticism comes paired with a concrete fix, so the roast format is really a fast way to surface what a real recruiter would silently reject you for.',
  },
  {
    q: 'What does the roast actually score?',
    a: "It gives you an honest overall read, calls out what's genuinely working so you don't cut it, and flags every red flag — formatting, weak bullets, missing keywords, unclear impact — with a specific fix for each.",
  },
  {
    q: 'Should I use this before or after the ATS score checker?',
    a: 'Either order works, but most people roast first to fix structural and content issues, then run the AI ATS score checker against a specific job description to close keyword gaps for that role.',
  },
];

export default function AiCvRoastPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI CV Roast"
        path="/tools/ai-cv-roast"
        description="AI tool that gives a brutally honest, recruiter-style critique of your resume with a score and a concrete fix for every red flag. Runs on your own AI key."
        breadcrumbLabel="AI CV Roast"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Get your CV"
        highlight="roasted"
        subtitle="Paste your resume and get a brutally honest, recruiter-style critique — an honest score, what's genuinely working, and every red flag paired with a concrete fix."
      >
        <CvRoastAI />
        <AiToolFaq heading="AI CV roast — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
