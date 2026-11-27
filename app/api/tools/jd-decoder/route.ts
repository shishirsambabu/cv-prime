import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';
import { cappedArray } from '@/lib/aiResultSchemas';

const inputSchema = z.object({
  jobDescription: z.string().min(50, 'Paste a job description.').max(15_000),
});

const resultSchema = z.object({
  seniority: z.string(),
  mustHaves: cappedArray(z.string(), 15),
  niceToHaves: cappedArray(z.string(), 15),
  hiddenRequirements: cappedArray(z.string(), 10),
  redFlags: cappedArray(z.string(), 8),
  keywordsToMirror: cappedArray(z.string(), 20),
});

// Model calls can run up to ~28s; Vercel's short default would cut them off
// as an opaque 504. Must be declared in the route file itself.
export const maxDuration = 60;

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
