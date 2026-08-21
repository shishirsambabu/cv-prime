import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
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
    q: 'What does a "fit score" actually mean here?',
    a: 'For each suggested role, the AI estimates how competitive your current resume makes you for it, explains why it is a match, and lists the specific gaps you would need to close to be a strong candidate.',
  },
  {
    q: "Will it suggest roles outside what I'm already searching for?",
    a: "Yes — that's the point. It's meant to surface roles you're already competitive for but might not have considered, based on your actual experience rather than just your last job title.",
  },
  {
    q: 'What should I do with the gaps it identifies?',
    a: 'Feed a specific gap into the AI Skills Gap Finder for a concrete learning plan, or start there directly if you already know your target role.',
  },
];

export default function AiRoleFitPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI Role-Fit Finder"
        path="/tools/ai-role-fit"
        description="AI tool that suggests the roles you are most competitive for from your resume, with a fit score and the gaps to close for each. Runs on your own AI key."
        breadcrumbLabel="AI Role-Fit Finder"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Find your best-fit"
        highlight="roles"
        subtitle="Paste your resume and the AI maps the roles you're most competitive for today — each with a fit score, why it matches, and the gaps to close to become a strong candidate."
      >
        <RoleFitAI />
        <AiToolFaq heading="AI role-fit finder — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
