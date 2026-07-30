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
    q: 'How does the AI decide which roles fit me?',
    a: 'It reads your actual experience, skills, and achievements from your resume and matches them against what different roles typically require, scoring each on how competitive you would be for it today — not on generic career-ladder assumptions.',
  },
  {
    q: 'What does the fit score mean?',
    a: 'A rough read on how strong an applicant you\'d be for that role right now, based only on what is in your resume. It is directional, not a guarantee — use the paired gaps to see exactly what would raise your odds.',
  },
  {
    q: 'What should I do after seeing my results?',
    a: 'For roles with a high fit score, tailor your resume to that specific JD using the AI CV builder. For roles with real gaps, use the AI skills gap finder to see the highest-leverage thing to learn next.',
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
      schemaName="CV Prime AI Role-Fit Finder"
      schemaDescription="Find the roles you are most competitive for right now from your resume, with an AI-generated fit score and the gaps to close for each."
      faqs={faqs}
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
