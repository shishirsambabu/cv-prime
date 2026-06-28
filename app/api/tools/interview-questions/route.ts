import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z
  .object({
    role: z.string().max(160).optional(),
    jobDescription: z.string().max(15_000).optional(),
    resumeText: z.string().max(25_000).optional(),
  })
  .refine((v) => (v.role && v.role.trim().length > 1) || (v.jobDescription && v.jobDescription.trim().length > 30), {
    message: 'Provide a role or a job description.',
  });

const resultSchema = z.object({
  questions: z
    .array(
      z.object({
        question: z.string(),
        category: z.string(),
        tip: z.string(),
      })
    )
    .max(16),
});

export const POST = createAiToolRoute({
  name: 'tool-interview-questions',
  limitPerHour: 25,
  inputSchema,
  resultSchema,
  maxTokens: 1500,
  temperature: 0.5,
  system:
    'You are an experienced interviewer for Indian companies and MNCs. Generate the most likely interview questions for this role, mixing categories (Behavioural, Role-specific/Technical, Situational, About-you). If a resume is provided, target some questions at the candidate\'s actual experience and likely gaps. Return ONLY valid JSON: { "questions": [ { "question": "...", "category": "Behavioural|Technical|Situational|About you", "tip": "a one-line, specific tip on how to answer (use STAR where relevant)" } ] }. Provide 10-14 questions. No commentary outside the JSON.',
  buildUser: (i) =>
    `${i.role ? `Role: ${i.role}\n` : ''}${i.jobDescription ? `\nJob description:\n${i.jobDescription}\n` : ''}${i.resumeText ? `\nCandidate resume:\n${i.resumeText}` : ''}`,
});
