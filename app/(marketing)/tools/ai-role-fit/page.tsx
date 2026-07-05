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
    q: 'How does the role-fit finder decide which roles suit me?',
    a: 'It reads your resume — skills, experience, and achievements — and matches the pattern against roles you would realistically be competitive for right now, scoring each on fit rather than just title similarity.',
  },
  {
    q: 'What does the fit score actually mean?',
    a: 'It reflects how closely your current experience lines up with what that role typically requires. A higher score means fewer gaps to close before you would be a strong candidate.',
  },
  {
    q: 'Does it just give a score, or explain why?',
    a: 'Each suggested role includes why it matches your background and the specific gaps to close — so you know exactly what to build toward if the role is not a perfect fit yet.',
  },
  {
    q: 'Is this useful for a career change?',
    a: 'Yes — it is especially useful when you are unsure which adjacent roles your existing experience transfers to, since it surfaces options you might not have considered on your own.',
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
      faqs={faqs}
    >
      <RoleFitAI />
    </AiToolLayout>
  );
}
