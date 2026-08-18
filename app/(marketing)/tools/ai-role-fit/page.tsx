import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { RoleFitAI } from '@/components/tools/RoleFitAI';

export const metadata: Metadata = {
  title: 'AI Role-Fit Finder — Which Jobs Am I Competitive For? | CV Prime',
  description:
    'Paste your resume and the AI suggests the roles you are most competitive for right now, with a fit score and the gaps to close for each. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-role-fit' },
  openGraph: {
    title: 'AI Role-Fit Finder',
    description: 'Which roles are you competitive for? Fit scores and gaps from your resume.',
    url: 'https://cv-prime.in/tools/ai-role-fit',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Role-Fit Finder — CV Prime' }],
  },
};

const faqs = [
  { q: 'How does the AI decide which roles fit me?', a: 'It reads your resume for your actual skills, seniority, and achievements, then matches those against what different roles typically require — no guessing based on job titles alone.' },
  { q: 'What is a "fit score"?', a: 'A 0–100 estimate of how competitive you would be for that specific role today, based only on what is in your resume, along with a short reason for the score.' },
  { q: 'Does it also tell me what is missing?', a: 'Yes — for each suggested role it lists the concrete gaps to close to become a strong candidate, not just a yes/no verdict.' },
  { q: 'Is it free to use?', a: 'It needs a free CV Prime account and your own OpenRouter AI key. Running it costs a few paise in AI usage.' },
];

export default function AiRoleFitPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Find your best-fit"
      highlight="roles"
      subtitle="Paste your resume and the AI maps the roles you're most competitive for today — each with a fit score, why it matches, and the gaps to close to become a strong candidate."
      path="/tools/ai-role-fit"
      appName="AI Role-Fit Finder"
      faqs={faqs}
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
