import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  resumeText: z.string().min(50, 'Paste your resume.').max(25_000),
  targetRole: z.string().max(120).optional(),
});

const resultSchema = z.object({
  score: z.number().int().min(0).max(100),
  verdict: z.string(),
  strengths: z.array(z.string()).max(6),
  redFlags: z.array(z.object({ problem: z.string(), fix: z.string() })).max(10),
});

export const POST = createAiToolRoute({
  name: 'tool-cv-roast',
  limitPerHour: 20,
  inputSchema,
  resultSchema,
  maxTokens: 1200,
  temperature: 0.6,
  system:
    'You are a blunt but constructive senior recruiter who has screened 10,000+ CVs. Critique this CV honestly — no flattery, no fluff — but every criticism must come with a concrete fix. Return ONLY valid JSON:\n- score (integer 0-100): overall CV strength for getting interviews. Be honest; most real CVs land 45-70.\n- verdict (string): one punchy 1-2 sentence overall read.\n- strengths (string[]): up to 6 genuine strengths (can be fewer; do not invent).\n- redFlags (array of { problem, fix }): up to 10 specific problems, each with a concrete, actionable fix.\nNo commentary outside the JSON.',
  buildUser: (i) => `${i.targetRole ? `Target role: ${i.targetRole}\n\n` : ''}Resume:\n${i.resumeText}`,
});
