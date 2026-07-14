import type { Metadata } from 'next';
import { AiToolLayout } from '@/components/tools/ai/AiToolLayout';
import { SalaryNegotiationAI } from '@/components/tools/SalaryNegotiationAI';
import { AiToolFaq, type AiToolFaqItem } from '@/components/tools/ai/AiToolFaq';
import { aiToolSchemas } from '@/lib/aiToolSchemas';

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

const faqs: AiToolFaqItem[] = [
  {
    q: 'Why is this tuned specifically for Indian CTC negotiations?',
    a: 'Indian offers are usually structured as CTC (cost-to-company), which bundles base, variable pay, and benefits in a way that confuses a lot of straight "ask for more money" advice from global sources. The coach talks in CTC terms — base vs. variable vs. joining bonus — not just a single number.',
  },
  {
    q: 'Does it tell me an exact number to ask for?',
    a: 'It builds talking points grounded in what you enter (your current offer, market context, and competing offers if any) rather than pulling a number out of thin air. You still decide your target based on your own research and risk tolerance.',
  },
  {
    q: 'What are the "ready-to-say scripts" for?',
    a: 'The tricky moments in a negotiation call — like being asked "what is your expected CTC" too early, or handling a lowball counter-offer — where having a prepared, natural-sounding response matters more than knowing the theory.',
  },
  {
    q: 'Is this only for a first job offer, or also for internal raises?',
    a: 'It works for both external offer negotiation and internal appraisal/raise conversations — just describe the situation (new offer vs. current role review) so the talking points and scripts match the actual context.',
  },
];

export default function AiSalaryNegotiationPage(): JSX.Element {
  const schemas = aiToolSchemas({
    name: 'CV Prime AI Salary Negotiation Coach',
    path: '/tools/ai-salary-negotiation',
    breadcrumbName: 'AI Salary Negotiation Coach',
    description: 'AI tool that generates evidence-based talking points and scripts for Indian CTC salary negotiations.',
    faqs,
  });
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <AiToolLayout
        eyebrow="AI tool · your key"
        title="Negotiate your"
        highlight="offer"
        subtitle="Enter the role and your offer details. The AI builds evidence-based talking points, ready-to-say scripts for the tricky moments, and practical tips — tuned for Indian CTC negotiations."
      >
        <SalaryNegotiationAI />
        <AiToolFaq faqs={faqs} />
      </AiToolLayout>
    </>
  );
}
