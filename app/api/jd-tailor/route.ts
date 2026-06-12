import { NextResponse } from 'next/server';
import { z } from 'zod';
import { callOpenRouter } from '@/lib/openrouter';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { cvDataSchema } from '@/lib/cv.schema';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';

const jdTailorSchema = z.object({
  cvData: cvDataSchema,
  jobDescription: z.string().min(50),
});

const jdTailorResultSchema = z.object({
  tailoredSummary: z.string().min(1),
  tailoredBullets: z.record(z.array(z.string().min(1)).max(3)),
});

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'jd-tailor', 20, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = jdTailorSchema.safeParse(await req.json().catch(() => ({})));
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
      maxTokens: 1200,
      messages: [
        {
          role: 'system',
          content:
            'You are an expert CV optimisation specialist. Rewrite the professional summary and the 3 most relevant bullet points per job experience to match the job description. Return only valid JSON: { "tailoredSummary": "...", "tailoredBullets": { "<experience_id>": ["bullet1", "bullet2", "bullet3"] } }. Keep all rewrites truthful to the original content and never fabricate.',
        },
        {
          role: 'user',
          content: `CV JSON:\n${JSON.stringify(body.data.cvData)}\n\nJob description:\n${body.data.jobDescription}`,
        },
      ],
    });
    const parsed = jdTailorResultSchema.parse(JSON.parse(content) as unknown);

    return NextResponse.json(parsed);
  } catch (error) {
    if (error instanceof Error && error.message === 'KEY_INVALID') {
      return NextResponse.json({ error: 'KEY_INVALID' }, { status: 401 });
    }

    return NextResponse.json(
      { error: 'AI_FAILED', message: 'Could not tailor this CV.' },
      { status: 500 }
    );
  }
}
