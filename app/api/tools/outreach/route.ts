import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  kind: z.enum(['cold', 'followup', 'thankyou']).default('cold'),
  role: z.string().max(160).optional(),
  company: z.string().max(160).optional(),
  recipient: z.string().max(120).optional(),
  context: z.string().min(10, 'Add a little context.').max(8_000),
});

const resultSchema = z.object({
  subject: z.string(),
  email: z.string(),
});

const kindInstruction: Record<'cold' | 'followup' | 'thankyou', string> = {
  cold: 'Write a short cold outreach email to a recruiter/hiring manager expressing interest and fit.',
  followup: 'Write a polite follow-up email after applying / after no response, nudging without being pushy.',
  thankyou: 'Write a concise thank-you email after an interview that reinforces fit and interest.',
};

export const POST = createAiToolRoute({
  name: 'tool-outreach',
  limitPerHour: 25,
  inputSchema,
  resultSchema,
  maxTokens: 700,
  temperature: 0.6,
  system:
    'You are an expert at job-search outreach for the Indian market. Write a crisp, human, non-generic email under 140 words: specific subject line, warm but professional, one concrete reason for fit, clear ask, easy to skim. Never fabricate facts; use only the context provided. Return ONLY valid JSON: { "subject": "..", "email": "<plain text, paragraph breaks as \\n\\n>" }. No commentary outside the JSON.',
  buildUser: (i) =>
    `${kindInstruction[i.kind ?? 'cold']}\n${i.role ? `Role: ${i.role}\n` : ''}${i.company ? `Company: ${i.company}\n` : ''}${i.recipient ? `Recipient: ${i.recipient}\n` : ''}\nContext (about me / the situation):\n${i.context}`,
});
