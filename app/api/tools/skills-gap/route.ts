import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  targetRole: z.string().min(2, 'Add a target role.').max(160),
  resumeText: z.string().min(50, 'Paste your resume.').max(25_000),
});

const resultSchema = z.object({
  summary: z.string(),
  skills: z
    .array(
      z.object({
        skill: z.string(),
        why: z.string(),
        how: z.string(),
        priority: z.enum(['high', 'medium', 'low']),
      })
    )
    .max(10),
});

export const POST = createAiToolRoute({
  name: 'tool-skills-gap',
  limitPerHour: 25,
  inputSchema,
  resultSchema,
  maxTokens: 1300,
  temperature: 0.4,
  system:
    'You are a career-development advisor for the Indian job market. Compare the candidate\'s resume to their target role and identify the highest-leverage skills to learn next. Return ONLY valid JSON:\n- summary (string): 1-2 sentence read of the biggest gap to close.\n- skills (array, up to 10) of { skill, why (1 line on why it matters for this role), how (a concrete way to learn/show it — course type, project, certification), priority ("high"|"medium"|"low") }.\nOrder by priority. Be specific and realistic. No commentary outside the JSON.',
  buildUser: (i) => `Target role: ${i.targetRole}\n\nResume:\n${i.resumeText}`,
});
