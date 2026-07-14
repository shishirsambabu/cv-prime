import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { RoleFitAI } from '@/components/tools/RoleFitAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

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

const faqs: AiToolFaqItem[] = [
  {
    q: 'What does the "fit score" actually measure?',
    a: 'It reflects how competitive your current resume is for each suggested role right now — combining your matching skills, relevant experience level, and typical requirements for that title. It is a starting-point estimate, not a guarantee of getting shortlisted.',
  },
  {
    q: 'Will it only suggest roles I have already done?',
    a: 'No — it also surfaces adjacent roles your existing skills transfer well into, which is often where career-changers find their next move. Each suggestion explains why it matches, not just that it does.',
  },
  {
    q: 'What do I do with the "gaps to close"?',
    a: 'These are the specific skills or experience missing between your current resume and a strong candidate for that role. Closing the highest-impact ones first — and reflecting them honestly in your resume once true — raises your fit score for that role.',
  },
  {
    q: 'Is this useful if I already know what role I want?',
    a: 'It is most useful when you are unsure or open to multiple directions. If you already have a specific target role and JD, the AI ATS Score Checker or JD Decoder will give you more direct, JD-specific feedback.',
  },
];

export default function AiRoleFitPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI Role-Fit Finder',
    path: '/tools/ai-role-fit',
    breadcrumbName: 'AI Role-Fit Finder',
    description: 'AI tool that suggests roles a resume is competitive for, with a fit score and gaps to close for each.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Find your best-fit"
        highlight="roles"
        subtitle="Paste your resume and the AI maps the roles you're most competitive for today — each with a fit score, why it matches, and the gaps to close to become a strong candidate."
      >
        <RoleFitAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
