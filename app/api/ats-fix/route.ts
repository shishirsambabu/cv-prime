import { NextResponse } from 'next/server';
import { z } from 'zod';
import { callOpenRouter, parseJsonFromModel } from '@/lib/openrouter';
import { cvDataSchema } from '@/lib/cv.schema';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';

export const runtime = 'nodejs';

const atsFixSchema = z.object({
  cvData: cvDataSchema,
  jobDescription: z.string().min(50, 'Paste a job description before fixing.').max(15_000),
});

const fixResultSchema = z.object({
  cvData: cvDataSchema,
  changes: z.array(z.string()).max(12),
});


export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'ats-fix', 15, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = atsFixSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const apiKey = await getUserOpenRouterKey(user.id);
  if (!apiKey) {
    return NextResponse.json({ error: 'NO_KEY' }, { status: 400 });
  }

  try {
    const content = await callOpenRouter({
      apiKey,
      jsonMode: true,
      maxTokens: 2600,
      messages: [
        {
          role: 'system',
          content:
            'You are an expert ATS resume optimiser. You receive a candidate CV as JSON and a job description. Rewrite the CV to maximise ATS match and recruiter impact WITHOUT inventing facts. Apply these rules: (1) Rewrite every experience bullet to start with a strong action verb and, where the source supports it, add a realistic quantified result (numbers, %, scale, time saved) — never fabricate specific metrics that are not plausibly implied. (2) Weave in important keywords and exact phrasing from the job description wherever truthful. (3) Tighten the professional summary to 3-4 lines aligned to the target role. (4) Keep all names, employers, schools, dates, and certifications exactly as given. (5) Preserve the JSON structure and all ids exactly. Return ONLY valid JSON with this shape: { "cvData": { ...the full updated CV in the same schema as the input... }, "changes": ["short past-tense description of each meaningful improvement, max 12 items"] }. The cvData object must contain every field from the input CV (personal, experience, education, skills, projects, certifications, awards, sectionOrder).',
        },
        {
          role: 'user',
          content: `Job description:\n${body.data.jobDescription}\n\nCurrent CV JSON:\n${JSON.stringify(
            body.data.cvData
          )}`,
        },
      ],
    });

    const parsed = fixResultSchema.parse(parseJsonFromModel(content));

    // Deliberately not persisted here. This call can take several seconds,
    // and by the time it resolves the client may have moved on (or the user
    // may have kept editing another section). The client already snapshots
    // the CV before calling this route and refuses to apply the result if
    // the store changed underneath it (see ATSScorePanel's STALE handling);
    // a blind server-side write using this stale snapshot would silently
    // overwrite newer, already-saved edits in the database even when the
    // client correctly declines to show them. When the client does accept
    // the result, it writes it into the store and the normal autosave path
    // (lib/saveCv.ts's per-CV queue) persists it like any other edit.
    return NextResponse.json(parsed);
  } catch (error) {
    if (error instanceof Error && error.message === 'KEY_INVALID') {
      return NextResponse.json({ error: 'KEY_INVALID' }, { status: 401 });
    }

    return NextResponse.json(
      { error: 'AI_FAILED', message: 'Could not auto-fix this CV. Please try again.' },
      { status: 500 }
    );
  }
}
