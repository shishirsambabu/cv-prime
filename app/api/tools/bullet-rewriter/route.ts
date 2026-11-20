import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';
import { cappedArray } from '@/lib/aiResultSchemas';
import { MAX_REWRITE_BULLETS, firstBullets } from '@/lib/bulletInput';

const inputSchema = z.object({
  bullets: z.string().min(5, 'Add at least one bullet.').max(4_000),
  role: z.string().max(120).optional(),
});

const resultSchema = z.object({
  rewrites: cappedArray(
    z.object({
      original: z.string(),
      options: cappedArray(z.string(), 3),
    }),
    MAX_REWRITE_BULLETS
  ),
});

// Model calls can run up to ~28s; Vercel's short default would cut them off
// as an opaque 504. Must be declared in the route file itself.
export const maxDuration = 60;

export const POST = createAiToolRoute({
  name: 'tool-bullet-rewriter',
  limitPerHour: 25,
  inputSchema,
  resultSchema,
  // ~110 output tokens per bullet (the original echoed back plus two
  // rewrites). 1300 ran out around the 12th bullet, cutting the JSON off
  // mid-string, which failed the whole request.
  maxTokens: 2200,
  timeoutMs: 45_000,
  temperature: 0.5,
  system:
    'You are an expert CV writer. The user provides one resume bullet per line. For EACH input bullet, write 2 stronger rewrites: start with a strong action verb, include a metric where one is implied (use a short [add metric] placeholder if none is given — never invent numbers), keep each under 22 words, and use ATS-friendly, outcome-led language. Return ONLY valid JSON: { "rewrites": [ { "original": "<the input bullet>", "options": ["rewrite 1", "rewrite 2"] } ] }. Preserve the input order, one entry per non-empty line. No commentary outside the JSON.',
  buildUser: (i) => `${i.role ? `Target role: ${i.role}\n\n` : ''}Bullets (one per line):\n${firstBullets(i.bullets).join('\n')}`,
});
