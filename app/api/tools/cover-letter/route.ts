import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  resumeText: z.string().min(50, 'Paste your resume.').max(25_000),
  jobDescription: z.string().min(50, 'Paste the job description.').max(15_000),
  company: z.string().max(120).optional(),
  role: z.string().max(120).optional(),
  tone: z.enum(['professional', 'friendly', 'executive']).default('professional'),
});

const resultSchema = z.object({
  coverLetter: z.string(),
});

const toneInstruction: Record<'professional' | 'friendly' | 'executive', string> = {
  professional: 'Use a clear, polished, professional tone.',
  friendly: 'Use a warm, confident, approachable tone.',
  executive: 'Use a concise, senior, commercially focused tone.',
};

export const POST = createAiToolRoute({
  name: 'tool-cover-letter',
  limitPerHour: 20,
  inputSchema,
  resultSchema,
  maxTokens: 900,
  temperature: 0.6,
  system:
    'You are an expert cover-letter writer for the Indian job market. Using the candidate\'s real resume and the job description, write a tailored cover letter of 180-250 words. Open with a specific hook (not "I am writing to apply"), tie 2-3 concrete, real achievements to the role\'s needs, and close with a confident call to action. Never fabricate employers, titles, or metrics. Return ONLY valid JSON: { "coverLetter": "<the full letter as plain text with paragraph breaks as \\n\\n>" }. No commentary outside the JSON.',
  buildUser: (i) =>
    `${toneInstruction[i.tone ?? 'professional']}\n${i.role ? `Role: ${i.role}\n` : ''}${i.company ? `Company: ${i.company}\n` : ''}\nResume:\n${i.resumeText}\n\nJob description:\n${i.jobDescription}`,
});
