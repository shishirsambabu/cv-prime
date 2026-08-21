import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { AiToolSchema } from '@/components/tools/ai/AiToolSchema';
import { AiToolFaq } from '@/components/tools/ai/AiToolFaq';
import { SalaryNegotiationAI } from '@/components/tools/SalaryNegotiationAI';

export const metadata: Metadata = {
  title: 'AI Salary Negotiation Coach — Scripts & Talking Points (India) | CV Prime',
  description:
    'Enter your role and offer details and get evidence-based talking points, ready-to-say scripts for tricky moments, and practical do/don\'t tips — tuned for Indian CTC negotiations. Runs on your own AI key.',
  alternates: { canonical: 'https://cv-prime.in/tools/ai-salary-negotiation' },
  openGraph: {
    title: 'AI Salary Negotiation Coach',
    description: 'Talking points and ready-to-say scripts for Indian salary negotiations.',
    url: 'https://cv-prime.in/tools/ai-salary-negotiation',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Salary Negotiation Coach — CV Prime' }],
  },
};

const faqs = [
  {
    q: 'Is this coach specific to Indian salary negotiations?',
    a: 'Yes — the scripts, talking points, and tips are tuned for how CTC (cost-to-company) negotiations actually work in India, not generic base-salary negotiation advice built for other markets.',
  },
  {
    q: 'What do I need to enter to get useful talking points?',
    a: 'Your role and your current offer details (or current CTC, if negotiating a raise) — the more specific the numbers and role, the more concrete and usable the scripts.',
  },
  {
    q: 'Does it just give generic tips, or actual scripts?',
    a: 'Both — it gives evidence-based talking points for why you deserve what you are asking for, plus ready-to-say scripts for tricky moments like being asked for a number first or handling a lowball offer.',
  },
];

export default function AiSalaryNegotiationPage(): JSX.Element {
  return (
    <>
      <AiToolSchema
        name="CV Prime AI Salary Negotiation Coach"
        path="/tools/ai-salary-negotiation"
        description="AI tool that generates evidence-based talking points and ready-to-say scripts for Indian CTC salary negotiations. Runs on your own AI key."
        breadcrumbLabel="AI Salary Negotiation Coach"
        faqs={faqs}
      />
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Negotiate your"
        highlight="offer"
        subtitle="Enter the role and your offer details. The AI builds evidence-based talking points, ready-to-say scripts for the tricky moments, and practical tips — tuned for Indian CTC negotiations."
      >
        <SalaryNegotiationAI />
        <AiToolFaq heading="AI salary negotiation coach — FAQ" faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
