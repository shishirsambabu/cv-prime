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
  {
    q: 'How does the AI decide which roles I\'m competitive for?',
    a: 'It reads your actual experience, skills, and progression from your resume and matches that against what different roles typically require, scoring fit rather than just matching job titles you\'ve already held.',
  },
  {
    q: 'What does the "fit score" mean?',
    a: 'A relative measure of how strong a candidate you\'d be for that role today, given your current resume — not a guarantee of an interview or offer. Each suggested role also comes with the specific gaps to close.',
  },
  {
    q: 'Is this useful if I\'m looking to change industries or functions?',
    a: 'Yes — it\'s often most useful there, since it surfaces roles you might not have considered by matching your underlying skills and experience rather than just your current job title.',
  },
  {
    q: 'What do I need to run it?',
    a: 'A free CV Prime account and your own OpenRouter API key connected in settings (free to obtain). You pay only OpenRouter\'s tiny per-run token cost.',
  },
];

export default function AiRoleFitPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Find your best-fit"
      highlight="roles"
      subtitle="Paste your resume and the AI maps the roles you're most competitive for today — each with a fit score, why it matches, and the gaps to close to become a strong candidate."
      slug="ai-role-fit"
      appName="CV Prime AI Role-Fit Finder"
      appDescription="AI tool that suggests the roles a candidate is most competitive for from their resume, with a fit score and gaps to close for each. Runs on the user's own AI key."
      faqs={faqs}
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
