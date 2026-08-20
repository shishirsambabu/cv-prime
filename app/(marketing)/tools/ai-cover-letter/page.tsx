import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { CoverLetterAI } from '@/components/tools/CoverLetterAI';

export const metadata: Metadata = {
  title: 'AI Cover Letter Generator — Tailored to the Job (Free) | CV Prime',
  description:
    'Paste your resume and a job description and get a tailored 180–250 word cover letter with a real hook and your concrete achievements — in a professional, friendly, or executive tone. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-cover-letter' },
  openGraph: {
    title: 'AI Cover Letter Generator — Tailored to Any Job',
    description: 'A tailored cover letter from your resume and the job description, in seconds.',
    url: 'https://cv-prime.in/tools/ai-cover-letter',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Cover Letter Generator — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'What does the AI cover letter generator do?',
    a: 'It reads your resume and a specific job description and writes a tailored 180–250 word cover letter — with a genuine hook tied to the role, your real achievements pulled from your resume, and a tone you choose (professional, friendly, or executive).',
  },
  {
    q: 'Why does a tailored cover letter matter?',
    a: 'A generic cover letter that could be sent to any employer signals low effort and is often skipped by recruiters. A letter that references the specific role and company, and backs claims with real achievements from your resume, is far more likely to be read in full and remembered.',
  },
  {
    q: 'How does it work?',
    a: 'Paste your resume and the job description, pick a tone, and the AI — running on your own saved OpenRouter key — drafts the letter in seconds. It only uses achievements and facts present in your resume; it will not invent job titles, companies, or numbers you did not provide.',
  },
  {
    q: 'Can I edit the letter after it is generated?',
    a: 'Yes, and you should. Treat the AI draft as a strong first pass — read it for accuracy, add any personal detail about why you want the role, and adjust the tone until it sounds like you before sending it.',
  },
  {
    q: 'What are the alternatives?',
    a: 'You can write a cover letter manually, use a static template, or use CV Prime\'s full cover letter generator inside the authenticated app, which also saves the letter alongside the matching CV. This free tool is the fastest way to get a first tailored draft without creating a full application record.',
  },
];

export default function AiCoverLetterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Generate a tailored cover"
      highlight="letter"
      subtitle="Paste your resume and the job description. The AI writes a 180–250 word cover letter with a specific hook and your real achievements, in the tone you choose — never fabricating."
      path="/tools/ai-cover-letter"
      appName="CV Prime AI Cover Letter Generator"
      appDescription="Free AI tool that writes a tailored 180-250 word cover letter from a resume and job description."
      faqs={faqs}
    >
      <CoverLetterAI />
    </AiToolLayout>
  );
}
