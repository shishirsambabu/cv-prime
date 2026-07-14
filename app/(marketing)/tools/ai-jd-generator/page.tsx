import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { JdGeneratorAI } from '@/components/tools/JdGeneratorAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

export const metadata: Metadata = {
  title: 'AI Job Description Generator — Single & Bulk, One Format | CV Prime',
  description:
    'Generate clean, consistent, ready-to-post job descriptions in one format — for a single role or in bulk (up to 8 at once). Pick a tone, then copy or download each as Markdown. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-jd-generator' },
  openGraph: {
    title: 'AI Job Description Generator — Single & Bulk',
    description: 'Structured, consistent job descriptions for one role or many at once. Copy or download each.',
    url: 'https://cv-prime.in/tools/ai-jd-generator',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Job Description Generator — CV Prime' }],
  },
};

const faqs: AiToolFaqItem[] = [
  {
    q: 'Who is this tool for — job seekers or hiring teams?',
    a: 'It is built for hiring teams, recruiters, and founders who need to write or standardize job postings quickly. If you are job hunting rather than hiring, the AI JD Decoder tool is the one built for you — it reads postings instead of writing them.',
  },
  {
    q: 'What does "bulk" mode actually generate?',
    a: 'You can generate up to 8 job descriptions in a single run, each in the same consistent structure and tone — useful when opening multiple roles at once and wanting postings that read as part of one coherent hiring push rather than mismatched one-offs.',
  },
  {
    q: 'Can I control the tone of the postings?',
    a: 'Yes — pick a tone before generating so the output matches your employer brand, whether that is formal/corporate, startup-casual, or something in between. The structure and required sections stay consistent regardless of tone.',
  },
  {
    q: 'What format can I export the result in?',
    a: 'Copy each generated description directly, or download it as Markdown — ready to paste into an applicant tracking system, careers page, or job board without reformatting.',
  },
];

export default function AiJdGeneratorPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI Job Description Generator',
    path: '/tools/ai-jd-generator',
    breadcrumbName: 'AI JD Generator',
    description: 'AI tool that generates clean, consistent job descriptions for a single role or in bulk, downloadable as Markdown.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Generate job"
        highlight="descriptions"
        subtitle="Write polished, consistent job descriptions in one clean format — a single role or up to 8 at once. Pick a tone, then copy or download each as Markdown, ready to post."
      >
        <JdGeneratorAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
