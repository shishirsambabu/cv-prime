import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
import { BulletRewriterAI } from '@/components/tools/BulletRewriterAI';

export const metadata: Metadata = {
  title: 'AI Resume Bullet Rewriter — Turn Duties into Impact | CV Prime',
  description:
    'Paste your weak resume bullets and get stronger, outcome-driven rewrites — action verb first, metrics where implied, ATS-friendly, under 22 words. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-bullet-rewriter' },
  openGraph: {
    title: 'AI Resume Bullet Rewriter',
    description: 'Turn responsibility bullets into outcome-driven, ATS-friendly impact lines.',
    url: 'https://cv-prime.in/tools/ai-bullet-rewriter',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Resume Bullet Rewriter — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'What does the bullet rewriter actually change?',
    a: 'It takes duty-based bullets like "Responsible for managing a team" and rewrites each into an outcome-led line that starts with an action verb, adds metrics where the outcome is implied, and stays under 22 words — the format ATS parsers and recruiters both scan fastest.',
  },
  {
    q: "Will it invent numbers or achievements I didn't have?",
    a: 'No. It sharpens the language and structure around what you actually did — it does not fabricate metrics or results you have not provided. If a number matters, add it in your input and the rewrite will use it.',
  },
  {
    q: 'How many bullets can I rewrite at once?',
    a: 'Paste as many as you like, one per line — the tool rewrites the full list in a single pass, so you can process an entire experience section together rather than bullet by bullet.',
  },
];

export default function AiBulletRewriterPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI Resume Bullet Rewriter"
        path="/tools/ai-bullet-rewriter"
        description="AI tool that rewrites weak, duty-based resume bullets into outcome-driven, ATS-friendly lines under 22 words. Runs on your own AI key."
        breadcrumbLabel="AI Resume Bullet Rewriter"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Rewrite weak bullets into"
        highlight="impact"
        subtitle="Paste your bullets, one per line. The AI rewrites each into a stronger, outcome-led line — action verb first, metrics where implied, ATS-friendly, and under 22 words."
      >
        <BulletRewriterAI />
        <AiToolFaq heading="AI bullet rewriter — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
