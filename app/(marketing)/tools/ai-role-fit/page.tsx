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

export default function AiRoleFitPage(): JSX.Element {
  return (
    <AiToolLayout
      slug="ai-role-fit"
      name="AI Role-Fit Finder"
      eyebrow="AI tool · your key"
      title="Find your best-fit"
      highlight="roles"
      subtitle="Paste your resume and the AI maps the roles you're most competitive for today — each with a fit score, why it matches, and the gaps to close to become a strong candidate."
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
