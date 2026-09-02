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
    a: 'It reads your resume for skills, experience level, and achievements, then matches that profile against common role requirements to produce a fit score and a specific reason for each suggested role.',
  },
  {
    q: 'What if none of the roles feel right?',
    a: 'Each suggestion includes the gaps to close — so if a role feels like a stretch, you get a concrete list of what to learn or add to your resume to become competitive for it.',
  },
  {
    q: 'Is this useful for a career change?',
    a: 'Yes — it is especially useful when you are unsure which roles your existing experience transfers to, since it surfaces adjacent roles you might not have considered.',
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
      name="AI Role-Fit Finder"
      description="Free AI tool that suggests the roles a resume is most competitive for, with a fit score and gaps to close for each."
      faqs={faqs}
      relatedLinks={[
        { href: '/tools/ai-skills-gap', label: 'AI skills gap finder' },
        { href: '/tools/ai-interview-questions', label: 'AI interview question generator' },
        { href: '/career-change-resume', label: 'Career change resume guide' },
        { href: '/tools', label: 'All free tools' },
      ]}
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
