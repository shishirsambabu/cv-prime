import { z } from 'zod';
import { createAiToolRoute } from '@/lib/aiToolHandler';

const roleSpec = z.object({
  title: z.string().min(2, 'Add a role title.').max(120),
  company: z.string().max(120).optional(),
  location: z.string().max(120).optional(),
  seniority: z.string().max(60).optional(),
  employmentType: z.string().max(60).optional(),
  skills: z.string().max(600).optional(),
  notes: z.string().max(1_200).optional(),
});

const inputSchema = z.object({
  roles: z.array(roleSpec).min(1, 'Add at least one role.').max(8),
  tone: z.enum(['professional', 'friendly', 'inclusive', 'startup']).default('professional'),
});

const jd = z.object({
  title: z.string(),
  company: z.string().optional(),
  location: z.string().optional(),
  employmentType: z.string().optional(),
  summary: z.string(),
  responsibilities: z.array(z.string()).max(12),
  requirements: z.array(z.string()).max(12),
  niceToHaves: z.array(z.string()).max(8),
  skills: z.array(z.string()).max(20),
  whatWeOffer: z.array(z.string()).max(8),
});

const resultSchema = z.object({
  jds: z.array(jd).max(8),
});

const TONE: Record<'professional' | 'friendly' | 'inclusive' | 'startup', string> = {
  professional: 'Polished, corporate, and clear.',
  friendly: 'Warm, human, and approachable.',
  inclusive: 'Inclusive and bias-free: avoid gendered or ageist language and unnecessary "rockstar/ninja" hype.',
  startup: 'Energetic, concise, and startup-flavoured, while staying specific.',
};

export const POST = createAiToolRoute({
  name: 'tool-jd-generator',
  limitPerHour: 20,
  inputSchema,
  resultSchema,
  maxTokens: 4000,
  temperature: 0.5,
  system:
    'You are an expert technical recruiter and HR copywriter. Generate clean, consistent, ready-to-post job descriptions for the Indian job market. Return ONLY valid JSON: { "jds": [ ... ] } with exactly one JD object per role given, IN THE SAME ORDER. Each JD object must include EVERY field (use an empty array [] when there is nothing to add):\n- title (string): the role title.\n- company (string): the company name if provided, else "".\n- location (string): location/work mode if provided, else "".\n- employmentType (string): e.g. "Full-time" if provided/obvious, else "".\n- summary (string): a 2–3 sentence "About the role" overview.\n- responsibilities (string[]): 5–8 concrete responsibilities, each a crisp action-led line. Max 12.\n- requirements (string[]): 4–8 genuine must-have qualifications/experience. Max 12.\n- niceToHaves (string[]): 2–5 preferred-but-optional items. Max 8.\n- skills (string[]): the hard + soft skills/keywords (ATS-relevant). Max 20.\n- whatWeOffer (string[]): 3–5 realistic benefits/perks (generic if unknown — never invent specific salary numbers). Max 8.\nKeep every JD in a single consistent structure and tone. Use Indian context where natural (CTC, notice period, hybrid/remote norms). Do not invent a real salary figure. No commentary outside the JSON.',
  buildUser: (i) => {
    const tone = TONE[i.tone ?? 'professional'];
    const blocks = i.roles
      .map((r, idx) => {
        const lines = [
          `Role ${idx + 1}:`,
          `- Title: ${r.title}`,
          r.company ? `- Company: ${r.company}` : null,
          r.location ? `- Location / work mode: ${r.location}` : null,
          r.seniority ? `- Seniority: ${r.seniority}` : null,
          r.employmentType ? `- Employment type: ${r.employmentType}` : null,
          r.skills ? `- Key skills to emphasise: ${r.skills}` : null,
          r.notes ? `- Extra context: ${r.notes}` : null,
        ].filter(Boolean);
        return lines.join('\n');
      })
      .join('\n\n');
    return `Tone: ${tone}\n\nGenerate ${i.roles.length} job description(s), one per role below, in order:\n\n${blocks}`;
  },
});
