import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AtsScoreCheckerAI } from '@/components/tools/AtsScoreCheckerAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

export const metadata: Metadata = {
  title: 'AI ATS Score Checker — Score Your Resume vs a Job (Free) | CV Prime',
  description:
    'Paste your resume and a job description and get an AI ATS match score (0–100), the exact keywords you are missing, and concrete fixes. Runs on your own AI key — free to use.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-ats-score' },
  openGraph: {
    title: 'AI ATS Score Checker — Free, India-Ready',
    description: 'Get an AI ATS match score, missing keywords, and fixes for any job description.',
    url: 'https://cv-prime.in/tools/ai-ats-score',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI ATS Score Checker — CV Prime' }],
  },
};

const faqs: AiToolFaqItem[] = [
  {
    q: 'How is this different from the free keyword matcher tool?',
    a: 'The free ATS keyword matcher does simple text overlap with no AI. This tool uses an AI model to actually understand context — it scores your real ATS match, explains why keywords matter for the specific role, and gives fixes worded for your resume rather than a generic list.',
  },
  {
    q: 'What AI key do I need, and does it cost anything?',
    a: 'You bring your own OpenRouter API key, saved encrypted in your free CV Prime account. Each ATS score check costs a few paise on your key — there is no CV Prime subscription required to use this tool.',
  },
  {
    q: 'What score should I aim for before applying?',
    a: 'Aim for 80+ before you submit an application. Below 65 usually means the ATS is likely to rank you low or filter you out entirely — the missing-keyword list tells you exactly what to add to close the gap honestly.',
  },
  {
    q: 'Will the AI ever add false claims to raise my score?',
    a: 'No. The tool only tells you which real keywords and skills to surface from your actual experience — it never invents qualifications you do not have. If a keyword genuinely does not apply to you, the fix is to skip it, not fabricate it.',
  },
];

export default function AiAtsScorePage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI ATS Score Checker',
    path: '/tools/ai-ats-score',
    breadcrumbName: 'AI ATS Score Checker',
    description: 'AI tool that scores a resume against a job description 0-100, lists missing keywords, and gives concrete fixes.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="AI ATS score"
        highlight="checker"
        subtitle="Paste your resume and the job description. The AI scores your ATS match 0–100, shows the exact keywords you're missing, and gives you concrete fixes — calibrated for the systems Indian employers use."
      >
        <AtsScoreCheckerAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
