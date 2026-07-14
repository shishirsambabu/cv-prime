import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { LinkedInOptimizerAI } from '@/components/tools/LinkedInOptimizerAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

export const metadata: Metadata = {
  title: 'AI LinkedIn Headline & About Generator (Free) | CV Prime',
  description:
    'Generate keyword-rich LinkedIn headline options (under 220 characters) and a compelling first-person About section from your experience. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-linkedin' },
  openGraph: {
    title: 'AI LinkedIn Headline & About Generator',
    description: 'Keyword-rich LinkedIn headlines and a compelling About section in seconds.',
    url: 'https://cv-prime.in/tools/ai-linkedin',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI LinkedIn Generator — CV Prime' }],
  },
};

const faqs: AiToolFaqItem[] = [
  {
    q: 'Why does the LinkedIn headline character limit matter?',
    a: 'LinkedIn truncates headlines beyond 220 characters in most views, and recruiters searching LinkedIn typically only see the first 60-80 characters before scrolling. The generator keeps every option within the hard limit and front-loads the strongest keywords.',
  },
  {
    q: 'How many headline options do I get?',
    a: 'Multiple keyword-rich variations generated from the same input, so you can pick the phrasing that best matches your voice and the roles you are targeting, rather than being stuck with one AI-chosen version.',
  },
  {
    q: 'Is the About section written in first person?',
    a: 'Yes — it reads like you wrote it, not like a resume summary copy-pasted onto your profile. LinkedIn About sections perform better in first person because that is what the platform and recruiters browsing it expect.',
  },
  {
    q: 'Do I need to already have a LinkedIn profile written out?',
    a: 'No — paste your work experience, skills, and career direction in any form (even rough notes or your resume text) and the AI structures it into a headline and About section from scratch.',
  },
];

export default function AiLinkedInPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI LinkedIn Headline & About Generator',
    path: '/tools/ai-linkedin',
    breadcrumbName: 'AI LinkedIn Generator',
    description: 'AI tool that generates keyword-rich LinkedIn headline options and a first-person About section from work experience.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Optimize your"
        highlight="LinkedIn"
        subtitle="Paste your experience and get keyword-rich headline options (under LinkedIn's 220-character limit) plus a compelling, first-person About section — recruiter-ready."
      >
        <LinkedInOptimizerAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
