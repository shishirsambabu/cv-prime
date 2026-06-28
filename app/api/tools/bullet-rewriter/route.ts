import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  bullets: z.string().min(5, 'Add at least one bullet.').max(4_000),
  role: z.string().max(120).optional(),
});

const resultSchema = z.object({
  rewrites: z
    .array(
      z.object({
        original: z.string(),
        options: z.array(z.string()).max(3),
      })
    )
    .max(15),
});

export const POST = createAiToolRoute({
  name: 'tool-bullet-rewriter',
  limitPerHour: 25,
  inputSchema,
  resultSchema,
  maxTokens: 1300,
  temperature: 0.5,
  system:
    'You are an expert CV writer. The user provides one resume bullet per line. For EACH input bullet, write 2 stronger rewrites: start with a strong action verb, include a metric where one is implied (use a short [add metric] placeholder if none is given — never invent numbers), keep each under 22 words, and use ATS-friendly, outcome-led language. Return ONLY valid JSON: { "rewrites": [ { "original": "<the input bullet>", "options": ["rewrite 1", "rewrite 2"] } ] }. Preserve the input order, one entry per non-empty line. No commentary outside the JSON.',
  buildUser: (i) => `${i.role ? `Target role: ${i.role}\n\n` : ''}Bullets (one per line):\n${i.bullets}`,
});
