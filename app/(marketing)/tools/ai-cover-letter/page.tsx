import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { CoverLetterAI } from '@/components/tools/CoverLetterAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

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

const faqs: AiToolFaqItem[] = [
  {
    q: 'How long is the generated cover letter?',
    a: 'Each letter runs 180–250 words — long enough to make a specific case for you, short enough that a recruiter actually reads the whole thing. It opens with a real hook tied to the role, not a generic "I am writing to apply" line.',
  },
  {
    q: 'Does it just repeat my resume in paragraph form?',
    a: 'No. The AI picks your most relevant achievements for this specific job description and explains why they matter for the role, rather than restating your whole work history. It is written to complement your resume, not duplicate it.',
  },
  {
    q: 'Can I choose the tone of the letter?',
    a: 'Yes — pick professional, friendly, or executive tone before generating. The facts and achievements stay the same; only the voice and formality change to match the company and seniority you are applying to.',
  },
  {
    q: 'Will the AI make up achievements I did not mention?',
    a: 'No. It only uses the resume and job description you provide — it will not invent projects, titles, or results. If you want a stronger letter, add more detail about your real achievements before generating.',
  },
];

export default function AiCoverLetterPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI Cover Letter Generator',
    path: '/tools/ai-cover-letter',
    breadcrumbName: 'AI Cover Letter Generator',
    description: 'AI tool that generates a tailored 180-250 word cover letter from a resume and job description.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Generate a tailored cover"
        highlight="letter"
        subtitle="Paste your resume and the job description. The AI writes a 180–250 word cover letter with a specific hook and your real achievements, in the tone you choose — never fabricating."
      >
        <CoverLetterAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
