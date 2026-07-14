import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { JdDecoderAI } from '@/components/tools/JdDecoderAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

export const metadata: Metadata = {
  title: 'AI Job Description Decoder — Must-Haves, Hidden Asks, Red Flags | CV Prime',
  description:
    'Paste a job description and the AI decodes it: real seniority, true must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-jd-decoder' },
  openGraph: {
    title: 'AI Job Description Decoder',
    description: 'Decode any JD: must-haves, hidden requirements, red flags, keywords to mirror.',
    url: 'https://cv-prime.in/tools/ai-jd-decoder',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI JD Decoder — CV Prime' }],
  },
};

const faqs: AiToolFaqItem[] = [
  {
    q: 'Why would I need a JD "decoded" instead of just reading it?',
    a: 'Job descriptions are often written by HR or reused from a template, so the listed requirements do not always match what the hiring manager actually needs. The decoder separates genuine must-haves from boilerplate nice-to-haves and flags unstated expectations most postings leave out.',
  },
  {
    q: 'What counts as a "red flag" in the analysis?',
    a: 'Things like vague or unusually broad responsibilities for the stated seniority, salary/scope mismatches, requirements that suggest understaffing, or language patterns common in postings with high turnover. It is a signal to ask clarifying questions in the interview, not a guarantee something is wrong.',
  },
  {
    q: 'How do I use the keyword output?',
    a: 'The decoder pulls the exact terms the JD emphasizes. Mirror the ones that are genuinely true of your background into your resume\'s skills section and bullet points — this is what most ATS keyword matching and human skimming both respond to.',
  },
  {
    q: 'Can I paste a JD in a different format, like a screenshot description or bullet list?',
    a: 'Paste it as plain text — copy directly from the job posting page. The AI works best with the full original wording rather than a paraphrased summary, since exact phrasing often signals what the employer weighs most.',
  },
];

export default function AiJdDecoderPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI Job Description Decoder',
    path: '/tools/ai-jd-decoder',
    breadcrumbName: 'AI JD Decoder',
    description: 'AI tool that decodes a job description into real must-haves, hidden expectations, red flags, and keywords to mirror.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Decode the job"
        highlight="description"
        subtitle="Paste any JD and the AI reveals what they actually want: real must-haves vs nice-to-haves, unstated expectations, red flags, and the exact keywords to mirror in your resume."
      >
        <JdDecoderAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
