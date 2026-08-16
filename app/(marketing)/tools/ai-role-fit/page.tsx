import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
import { RoleFitAI } from '@/components/tools/RoleFitAI';

const faqs = [
  {
    q: 'What does an AI role-fit finder do?',
    a: 'You paste your resume and the AI maps out the job titles and role types you are most competitive for right now, based on the actual experience, skills, and outcomes in your resume — not just your current job title. Each suggested role comes with a fit score, a short reason it matches, and the specific gaps to close to become a strong candidate.',
  },
  {
    q: 'How is this different from just searching job titles I already know?',
    a: 'Job seekers often stay anchored to their current or most recent title and miss adjacent roles that a hiring manager would consider a natural fit. The tool works from your actual experience rather than your title, so it can surface roles you are qualified for but might not have thought to search for.',
  },
  {
    q: 'What does the fit score mean?',
    a: 'It reflects how closely your demonstrated skills and experience align with the typical requirements for that role type — higher scores mean fewer gaps to close before you would be a competitive applicant. It is a directional signal to prioritise your job search, not a guarantee of an interview or offer.',
  },
  {
    q: 'Is the AI role-fit finder free?',
    a: 'Yes. It runs on your own OpenRouter API key, which costs a few paise per run, and does not require a paid CV Prime plan.',
  },
];

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
      eyebrow="AI tool · your key"
      title="Find your best-fit"
      highlight="roles"
      subtitle="Paste your resume and the AI maps the roles you're most competitive for today — each with a fit score, why it matches, and the gaps to close to become a strong candidate."
    >
      <RoleFitAI />
      <AiToolFaq
        toolName="AI Role-Fit Finder"
        toolUrl="https://cv-prime.in/tools/ai-role-fit"
        description="Paste your resume and get the roles you are most competitive for right now, with a fit score and the gaps to close for each."
        faqs={faqs}
        related={[
          { href: '/tools/ai-skills-gap', label: 'AI skills gap finder' },
          { href: '/tools/ai-ats-score', label: 'AI ATS score checker' },
        ]}
      />
    </AiToolLayout>
  );
}
