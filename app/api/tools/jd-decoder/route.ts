import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const inputSchema = z.object({
  jobDescription: z.string().min(50, 'Paste a job description.').max(15_000),
});

const resultSchema = z.object({
  seniority: z.string(),
  mustHaves: z.array(z.string()).max(15),
  niceToHaves: z.array(z.string()).max(15),
  hiddenRequirements: z.array(z.string()).max(10),
  redFlags: z.array(z.string()).max(8),
  keywordsToMirror: z.array(z.string()).max(20),
});

export const POST = createAiToolRoute({
  name: 'tool-jd-decoder',
  limitPerHour: 25,
  inputSchema,
  resultSchema,
  maxTokens: 1100,
  temperature: 0.3,
  system:
    'You are an expert recruiter who decodes job descriptions for candidates. Read the JD and return ONLY valid JSON:\n- seniority (string): the real seniority level and a 1-line read of who they actually want.\n- mustHaves (string[]): genuine hard requirements. Max 15.\n- niceToHaves (string[]): preferred-but-optional items. Max 15.\n- hiddenRequirements (string[]): unstated expectations implied by the wording (e.g. "fast-paced" = long hours; "wear many hats" = under-resourced). Max 10.\n- redFlags (string[]): warning signs in the JD a candidate should note. Max 8.\n- keywordsToMirror (string[]): exact keywords/phrases to echo in a resume to pass ATS. Max 20.\nNo commentary outside the JSON.',
  buildUser: (i) => `Job description:\n${i.jobDescription}`,
});
