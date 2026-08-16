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
    q: 'How does the AI decide which roles I am competitive for?',
    a: 'It reads your actual experience, skills, and achievements, then matches them against the typical requirements for adjacent and related roles — not just the title you have held, but titles where your existing skill set already covers most of the requirements.',
  },
  {
    q: 'What does the "fit score" mean?',
    a: 'It reflects how much of a role\'s typical requirements your current resume already covers, on a comparable basis across the suggested roles — a quick way to rank which roles need the least additional preparation.',
  },
  {
    q: 'Is this useful for a career change, not just a lateral move?',
    a: 'Yes — it is often most useful for career changers, since it surfaces adjacent roles you might not have considered where your transferable skills already carry real weight, along with the specific gaps to close for each.',
  },
  {
    q: 'What should I do with the gaps it lists?',
    a: 'Use the AI skills gap finder for a deeper breakdown of how to close each gap, or aim your next project, certification, or resume rewrite specifically at the highest-fit role it surfaces.',
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
      toolName="AI Role-Fit Finder"
      faqs={faqs}
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
