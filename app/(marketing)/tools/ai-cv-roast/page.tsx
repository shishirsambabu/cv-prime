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
    q: 'Is the CV roast actually harsh, or just polite feedback?',
    a: 'It is direct and specific, not generic praise. It calls out weak bullets, vague summaries, formatting risks, and missing sections in plain language — the way a skeptical recruiter would react in the first 6 seconds of reading it — then pairs each criticism with a concrete fix.',
  },
  {
    q: 'How is a "roast" different from the AI ATS score checker?',
    a: 'The ATS score checker focuses narrowly on keyword match against a specific job description. The roast reviews the whole resume on its own merits — clarity, impact, structure, and red flags — even if you have no job description to check it against yet.',
  },
  {
    q: 'Will it just tell me generic resume advice?',
    a: 'No — every critique references your actual bullets, sections, and wording rather than generic tips like "use action verbs." It quotes the weak line and shows what a stronger version looks like.',
  },
  {
    q: 'What should I do after reading the roast?',
    a: 'Fix the highest-severity red flags first, then run the AI bullet rewriter on the specific lines it flagged, and re-check with the ATS score tool before you apply.',
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
      toolName="AI CV Roast"
      faqs={faqs}
    >
      <CvRoastAI />
    </AiToolLayout>
  );
}
