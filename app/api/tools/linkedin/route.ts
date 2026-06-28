import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  role: z.string().max(160).optional(),
  resumeText: z.string().min(30, 'Add a few lines about your experience.').max(25_000),
});

const resultSchema = z.object({
  headlines: z.array(z.string()).max(6),
  about: z.string(),
});

export const POST = createAiToolRoute({
  name: 'tool-linkedin',
  limitPerHour: 25,
  inputSchema,
  resultSchema,
  maxTokens: 1100,
  temperature: 0.6,
  system:
    'You are a LinkedIn personal-branding expert. From the person\'s experience, write: headlines (4-5 distinct LinkedIn headline options, each UNDER 220 characters, keyword-rich, specific, no generic buzzword soup) and about (a first-person LinkedIn "About" section, 130-200 words: a hook, concrete proof/achievements, and a soft call to action). Never fabricate facts. Return ONLY valid JSON: { "headlines": [..], "about": ".." }. No commentary outside the JSON.',
  buildUser: (i) => `${i.role ? `Target role/positioning: ${i.role}\n\n` : ''}Experience:\n${i.resumeText}`,
});
