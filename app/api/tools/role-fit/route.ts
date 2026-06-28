import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  resumeText: z.string().min(50, 'Paste your resume.').max(25_000),
});

const resultSchema = z.object({
  summary: z.string(),
  roles: z
    .array(
      z.object({
        title: z.string(),
        fit: z.number().int().min(0).max(100),
        why: z.string(),
        gaps: z.array(z.string()).max(5),
      })
    )
    .max(6),
});

export const POST = createAiToolRoute({
  name: 'tool-role-fit',
  limitPerHour: 20,
  inputSchema,
  resultSchema,
  maxTokens: 1300,
  temperature: 0.4,
  system:
    'You are a career advisor for the Indian job market. From this resume, identify the roles/titles the candidate is most competitive for right now. Return ONLY valid JSON:\n- summary (string): 1-2 sentence read of where this candidate fits best.\n- roles (array, up to 6) of { title (a realistic role/title to target), fit (integer 0-100 = how competitive they are today), why (1 line on the match), gaps (up to 5 things to add/learn to be a strong candidate) }.\nOrder by fit, highest first. Be realistic, not flattering. No commentary outside the JSON.',
  buildUser: (i) => `Resume:\n${i.resumeText}`,
});
