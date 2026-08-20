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
    q: 'What is the AI CV roast?',
    a: 'A free tool that gives your resume a blunt, recruiter-style critique: an honest overall score, what is genuinely working, and every weak spot or red flag — each paired with a concrete fix, not vague encouragement.',
  },
  {
    q: 'Why get a "roast" instead of gentle feedback?',
    a: 'Friends and family are usually too polite to point out the real problems in a resume. Recruiters are not — they reject in seconds for reasons candidates rarely hear about. A blunt critique surfaces the same objections a real recruiter would have, before you apply, not after a rejection.',
  },
  {
    q: 'How does it work?',
    a: 'Paste your resume text into the tool. Using your saved OpenRouter key, the AI reads it the way a skeptical recruiter would and returns a score plus a specific, constructive list of what to fix — weak bullets, formatting issues, missing sections, vague claims, and more.',
  },
  {
    q: 'Is the feedback exaggerated for effect?',
    a: 'No. The tone is direct, but every point is meant to be actionable and accurate — the goal is a resume that survives real screening, not a joke roast. Treat every flagged issue as something worth genuinely fixing.',
  },
  {
    q: 'What should I do with the results?',
    a: 'Work through the fixes one by one — many candidates find CV Prime\'s AI bullet rewriter useful for the weak-bullet flags specifically. Then re-run the roast (or the AI ATS score checker against a real job description) to confirm the resume has actually improved.',
  },
];

export default function AiCvRoastPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Get your CV"
      highlight="roasted"
      subtitle="Paste your resume and get a brutally honest, recruiter-style critique — an honest score, what's genuinely working, and every red flag paired with a concrete fix."
      path="/tools/ai-cv-roast"
      appName="CV Prime AI CV Roast"
      appDescription="Free AI tool that gives a blunt, recruiter-style critique of a resume with a score and concrete fixes."
      faqs={faqs}
    >
      <CvRoastAI />
    </AiToolLayout>
  );
}
