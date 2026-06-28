import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  role: z.string().min(2, 'Add the role.').max(160),
  context: z.string().min(10, 'Add the offer details / your situation.').max(8_000),
});

const resultSchema = z.object({
  talkingPoints: z.array(z.string()).max(8),
  scripts: z.array(z.object({ situation: z.string(), script: z.string() })).max(5),
  tips: z.array(z.string()).max(6),
});

export const POST = createAiToolRoute({
  name: 'tool-salary-negotiation',
  limitPerHour: 25,
  inputSchema,
  resultSchema,
  maxTokens: 1200,
  temperature: 0.5,
  system:
    'You are a salary-negotiation coach for the Indian job market (CTC, base vs variable, joining bonus, notice-period buyout, ESOPs are all in scope). Be practical and respectful. Return ONLY valid JSON:\n- talkingPoints (string[]): up to 8 specific, evidence-based points the candidate can make.\n- scripts (array of { situation, script }): up to 5 ready-to-say lines for common moments (e.g. "when asked for current CTC", "countering a low offer", "asking for time").\n- tips (string[]): up to 6 short do/don\'t tips.\nNever invent market numbers; speak in ranges and principles. No commentary outside the JSON.',
  buildUser: (i) => `Role: ${i.role}\n\nOffer details / situation:\n${i.context}`,
});
