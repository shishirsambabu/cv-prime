import { NextResponse } from 'next/server';
import { z } from 'zod';
import { callOpenRouter } from '@/lib/openrouter';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';

const aiSuggestSchema = z.object({
  bullet: z.string().trim().min(5).max(500),
  role: z.string().trim().min(1).max(120),
  company: z.string().trim().min(1).max(120),
});

const aiSuggestResultSchema = z.object({
  alternatives: z.array(z.string().min(1)).length(3),
});

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'ai-suggest', 20, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = aiSuggestSchema.safeParse(await req.json().catch(() => ({})));
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
      maxTokens: 500,
      messages: [
        {
          role: 'system',
          content:
            'You are an expert CV writer. Rewrite the given CV bullet point. Start with a strong action verb, include metrics where implied, keep under 20 words, use ATS-friendly language, and return only valid JSON: { "alternatives": ["bullet1", "bullet2", "bullet3"] }.',
        },
        {
          role: 'user',
          content: `Role: ${body.data.role}\nCompany: ${body.data.company}\nBullet: ${body.data.bullet}`,
        },
      ],
    });
    const parsed = aiSuggestResultSchema.parse(JSON.parse(content) as unknown);

    return NextResponse.json(parsed);
  } catch (error) {
    if (error instanceof Error && error.message === 'KEY_INVALID') {
      return NextResponse.json({ error: 'KEY_INVALID' }, { status: 401 });
    }

    return NextResponse.json(
      { error: 'AI_FAILED', message: 'Could not rewrite this bullet. Please try again.' },
      { status: 500 }
    );
  }
}
