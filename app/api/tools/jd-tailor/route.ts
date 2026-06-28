import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  resumeText: z.string().min(50, 'Paste your resume.').max(25_000),
  jobDescription: z.string().min(50, 'Paste the job description.').max(15_000),
});

const resultSchema = z.object({
  summary: z.string(),
  bullets: z.array(z.string()).max(14),
  keywordsToAdd: z.array(z.string()).max(20),
  notes: z.array(z.string()).max(6),
});

export const POST = createAiToolRoute({
  name: 'tool-jd-tailor',
  limitPerHour: 20,
  inputSchema,
  resultSchema,
  maxTokens: 1300,
  temperature: 0.4,
  system:
    "You are an expert resume writer and ATS specialist for the Indian job market. Tailor the candidate's REAL experience to the target job description. Never invent employers, titles, dates, degrees, or metrics — only reframe and emphasise what is present; where a metric is clearly implied but missing, leave a short [add metric] placeholder. Return ONLY valid JSON with these fields:\n- summary (string): a 2-3 sentence professional summary tailored to the role.\n- bullets (string[]): 8-12 tailored, outcome-led experience bullets, each starting with a strong action verb, under 25 words, weaving in the JD's keywords naturally. Max 14.\n- keywordsToAdd (string[]): important JD keywords/skills to incorporate. Max 20.\n- notes (string[]): 2-4 short, specific tailoring tips. Max 6.\nNo commentary outside the JSON object.",
  buildUser: (i) => `Resume:\n${i.resumeText}\n\nJob description:\n${i.jobDescription}`,
});
