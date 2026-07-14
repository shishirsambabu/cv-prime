import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { CvRoastAI } from '@/components/tools/CvRoastAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

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

const faqs: AiToolFaqItem[] = [
  {
    q: 'Is the CV roast actually harsh, or is it a normal review with a fun name?',
    a: 'It is genuinely blunt — the AI is prompted to critique like a skeptical recruiter seeing your resume for the first time, not to be encouraging. Every criticism comes with a concrete fix, so it is constructive, not just critical.',
  },
  {
    q: 'What does the roast actually check?',
    a: 'It looks at the same things a recruiter scans for in the first six seconds: a clear headline and summary, quantified achievements versus vague duty statements, formatting red flags, weak or missing keywords, and anything that reads as generic or copy-pasted.',
  },
  {
    q: 'Is my resume stored or shared anywhere?',
    a: 'No. The roast runs against your own OpenRouter API key from inside your CV Prime account — CV Prime does not store or review the resume text you paste in for this tool beyond generating your result.',
  },
  {
    q: 'What should I do after getting roasted?',
    a: 'Fix the red flags one at a time, starting with the highest-impact ones the AI flags first. Then either re-run the roast to confirm improvement, or move into the full CV Prime editor to apply AI bullet rewrites and get a matching ATS score.',
  },
];

export default function AiCvRoastPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI CV Roast',
    path: '/tools/ai-cv-roast',
    breadcrumbName: 'AI CV Roast',
    description: 'AI tool that gives a blunt, recruiter-style critique of a resume with a score and concrete fixes.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Get your CV"
        highlight="roasted"
        subtitle="Paste your resume and get a brutally honest, recruiter-style critique — an honest score, what's genuinely working, and every red flag paired with a concrete fix."
      >
        <CvRoastAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
