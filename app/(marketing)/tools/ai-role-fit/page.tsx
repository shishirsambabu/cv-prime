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
    a: 'It reads your resume\'s actual experience, skills, and seniority signals and matches them against what different roles typically require, returning a fit score and the reasoning behind it for each suggestion.',
  },
  {
    q: 'What does the "gaps to close" section mean?',
    a: 'For each suggested role, the AI lists the specific skills or experience you are missing relative to a strong candidate for that role — so you know exactly what to build next.',
  },
  {
    q: 'Is this useful if I am changing careers?',
    a: 'Yes — it is often most useful for career changers, since it can surface adjacent roles you are more competitive for than you might expect based on transferable experience.',
  },
];

export default function AiRoleFitPage(): JSX.Element {
  return (
    <AiToolLayout
      eyebrow="AI tool · your key"
      title="Find your best-fit"
      highlight="roles"
      subtitle="Paste your resume and the AI maps the roles you're most competitive for today — each with a fit score, why it matches, and the gaps to close to become a strong candidate."
      path="/tools/ai-role-fit"
      schemaName="CV Prime AI Role-Fit Finder"
      schemaDescription="AI tool that maps a resume to the roles a candidate is most competitive for, with a fit score and gaps to close for each. Runs on the user's own AI key."
      faqs={faqs}
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
