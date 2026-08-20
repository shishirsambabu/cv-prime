import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
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
    q: 'What is the AI resume bullet rewriter?',
    a: 'A free tool that takes your existing resume bullets — usually written as duties like "responsible for managing a team" — and rewrites each into an outcome-driven line that leads with a strong action verb, surfaces the result or metric where one is implied, and stays under 22 words for scannability.',
  },
  {
    q: 'Why does bullet phrasing matter this much?',
    a: 'Recruiters spend seconds per resume and ATS systems weigh action verbs and quantified results heavily. Two candidates with the same experience can be read very differently depending on whether their bullets say "responsible for" or state a measurable outcome. Rewriting bullets is one of the highest-leverage, lowest-effort resume fixes.',
  },
  {
    q: 'How does the rewriter work?',
    a: 'Paste your bullets, one per line, into the tool. Using your saved OpenRouter key, the AI rewrites each into a stronger version — it will not invent numbers or achievements you did not have; it sharpens phrasing and surfaces metrics only where your original bullet already implies them.',
  },
  {
    q: 'What if the AI adds a number I cannot back up?',
    a: 'Always review every rewritten bullet before using it. If a suggested metric is not accurate, edit it or ask the AI to reframe without a specific number — an honest bullet always beats an inflated one, especially since interviewers will ask you to explain the numbers on your resume.',
  },
  {
    q: 'What is a good next step after rewriting my bullets?',
    a: 'Drop the improved bullets into a full CV Prime resume, run the AI ATS score checker against your target job description, and export a clean, ATS-safe PDF — all inside the same free account and AI key.',
  },
];

export default function AiBulletRewriterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Rewrite weak bullets into"
      highlight="impact"
      subtitle="Paste your bullets, one per line. The AI rewrites each into a stronger, outcome-led line — action verb first, metrics where implied, ATS-friendly, and under 22 words."
      path="/tools/ai-bullet-rewriter"
      appName="CV Prime AI Resume Bullet Rewriter"
      appDescription="Free AI tool that rewrites weak resume bullets into outcome-driven, ATS-friendly impact lines."
      faqs={faqs}
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
