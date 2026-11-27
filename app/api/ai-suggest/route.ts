export const runtime = 'nodejs';
export const maxDuration = 60;

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { describeValidationError, VALIDATION_LABELS } from '@/lib/validationMessage';
import { callOpenRouter, parseJsonFromModel } from '@/lib/openrouter';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';
import { getUserPlan } from '@/lib/plan';
import { MAX_SUGGEST_BULLET_LENGTH } from '@/lib/bulletInput';

// The editor puts no length limit on a bullet, a role or a job title, and
// the panel sends them as typed. A 500-character bullet (a pasted paragraph),
// a 4-character one ("Sales"), or a long title used to fail validation here
// with a 400 that the panel can only show as "Something went wrong. Please
// try again." — on every retry. Role and company are context for the prompt,
// so an over-long one is shortened rather than refused.
const promptContext = z
  .string()
  .trim()
  .min(1)
  .max(2_000)
  .transform((value) => value.slice(0, 120));

const aiSuggestSchema = z.object({
  bullet: z.string().trim().min(1).max(MAX_SUGGEST_BULLET_LENGTH),
  role: promptContext,
  company: promptContext,
});

const aiSuggestResultSchema = z.object({
  // Trimmed to three below. Requiring exactly three threw away a usable
  // answer whenever the model sent two or four.
  alternatives: z.array(z.string().trim().min(1)).min(1),
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
    return NextResponse.json(
      {
        error: body.error.flatten(),
        message: describeValidationError(body.error, VALIDATION_LABELS),
      },
      { status: 400 }
    );
  }

  // The editor only shows this panel on Pro, but that was the only gate: a
  // free account could call the route directly.
  if ((await getUserPlan(user.id)) !== 'pro') {
    return NextResponse.json(
      { error: 'PLAN_GATE', message: 'AI bullet rewrites are part of Pro.' },
      { status: 403 }
    );
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
    const parsed = aiSuggestResultSchema.parse(parseJsonFromModel(content));

    return NextResponse.json({ alternatives: parsed.alternatives.slice(0, 3) });
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
