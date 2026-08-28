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
    q: 'What makes a resume bullet "weak" in the first place?',
    a: 'Bullets that describe a duty ("Responsible for managing a team") instead of an outcome, bury the action verb, or have no sense of scale or result. The rewriter restructures each one to lead with a strong verb and surface the impact.',
  },
  {
    q: 'Will the AI invent numbers I didn\'t provide?',
    a: 'No — it only strengthens the phrasing and structure of what you paste in. If a metric is implied by your wording it may be made explicit, but it will not fabricate figures, titles, or outcomes you didn\'t give it.',
  },
  {
    q: 'How many bullets can I rewrite at once?',
    a: 'Paste as many as you like, one per line — the AI rewrites the full batch in a single run. It\'s free to use with your own connected AI key, capped only by a fair per-hour rate limit.',
  },
  {
    q: 'Do I need an account to use this?',
    a: 'Yes, a free CV Prime account plus your own OpenRouter API key (also free to obtain) connected in settings. This keeps the tool free for everyone — you pay only the tiny per-run token cost directly to OpenRouter.',
  },
];

export default function AiBulletRewriterPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Rewrite weak bullets into"
      highlight="impact"
      subtitle="Paste your bullets, one per line. The AI rewrites each into a stronger, outcome-led line — action verb first, metrics where implied, ATS-friendly, and under 22 words."
      slug="ai-bullet-rewriter"
      appName="CV Prime AI Resume Bullet Rewriter"
      appDescription="AI tool that rewrites weak resume bullets into outcome-driven, ATS-friendly impact lines. Runs on the user's own AI key."
      faqs={faqs}
    >
      <BulletRewriterAI />
    </AiToolLayout>
  );
}
