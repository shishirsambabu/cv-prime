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
    q: 'Is the roast actually harsh, or just polite feedback?',
    a: 'It is direct — the AI is prompted to point out real weaknesses the way a busy recruiter would, not soften them. It also tells you what is genuinely working so you know what to keep, and every criticism comes with a specific fix, not just a complaint.',
  },
  {
    q: 'What does the honest score mean?',
    a: 'It is the AI\'s blunt read of how your resume would land with a recruiter in the first 10 seconds — covering clarity, impact, and format. Treat it as a wake-up call, not a final grade; use the paired fixes to raise it.',
  },
  {
    q: 'Should I use the roast before or after the ATS score checker?',
    a: 'Roast first if you want brutal, recruiter-level feedback on impact and clarity. Then run the AI ATS score checker against a specific job description to close the keyword and format gaps before you export.',
  },
];

export default function AiCvRoastPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Get your CV"
      highlight="roasted"
      subtitle="Paste your resume and get a brutally honest, recruiter-style critique — an honest score, what's genuinely working, and every red flag paired with a concrete fix."
      slug="ai-cv-roast"
      schemaName="CV Prime AI CV Roast"
      schemaDescription="Get a brutally honest, recruiter-style AI critique of your resume with an honest score, what's working, and a concrete fix for every red flag."
      faqs={faqs}
    >
      <CvRoastAI />
    </AiToolLayout>
  );
}
