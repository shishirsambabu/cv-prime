export const runtime = 'nodejs';
export const maxDuration = 60;

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { cappedArray, lenientScore } from '@/lib/aiResultSchemas';
import { callOpenRouter, parseJsonFromModel } from '@/lib/openrouter';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';
import type { Database, Json } from '@/types/database.types';

const atsScoreSchema = z.object({
  cvId: z.string().uuid().optional(),
  // The editor sends the whole CV as text; a long CV is scored on its first
  // 25,000 characters rather than refused with an error the panel cannot explain.
  cvText: z
    .string()
    .min(50, 'Add enough CV content before scoring.')
    .max(200_000)
    .transform((text) => text.slice(0, 25_000)),
  jobDescription: z.string().min(50, 'Paste a job description before scoring.').max(15_000),
});

// Lenient on purpose: a model that answers 74.5 or "74", or lists a 31st
// keyword, gave a usable answer. A strict .max()/.number() rejected it as
// AI_FAILED after the user's key had already paid for the call.
const atsResultSchema = z.object({
  score: lenientScore,
  missingKeywords: cappedArray(z.string(), 30),
  presentKeywords: cappedArray(z.string(), 30),
  suggestions: cappedArray(z.string(), 12),
});

type ATSResult = z.infer<typeof atsResultSchema>;

interface ScoreHistoryItem {
  score: number;
  createdAt: string;
}

type CVScoreHistoryView = Pick<
  Database['public']['Tables']['cvs']['Row'],
  'ats_score_history'
>;

function parseScoreHistory(value: Json | null): ScoreHistoryItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is { score: number; createdAt: string } => {
      if (!item || typeof item !== 'object' || Array.isArray(item)) {
        return false;
      }

      return typeof item.score === 'number' && typeof item.createdAt === 'string';
    })
    .slice(-19);
}

async function saveScore(
  userId: string,
  cvId: string | undefined,
  result: ATSResult
): Promise<ScoreHistoryItem[]> {
  if (!cvId) {
    return [{ score: result.score, createdAt: new Date().toISOString() }];
  }

  const supabase = createClient();
  const { data: rawCv } = await supabase
    .from('cvs')
    .select('ats_score_history')
    .eq('id', cvId)
    .eq('user_id', userId)
    .maybeSingle();
  const cv = rawCv as CVScoreHistoryView | null;

  const history = [
    ...parseScoreHistory(cv?.ats_score_history ?? null),
    { score: result.score, createdAt: new Date().toISOString() },
  ];

  const updates: Database['public']['Tables']['cvs']['Update'] = {
    ats_score: result.score,
    ats_score_history: history as unknown as Json,
    last_edited: new Date().toISOString(),
  };

  await supabase
    .from('cvs')
    .update(updates as never)
    .eq('id', cvId)
    .eq('user_id', userId);

  return history;
}

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'ats-score', 20, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = atsScoreSchema.safeParse(await req.json().catch(() => ({})));
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
      maxTokens: 900,
      temperature: 0.2, // Low temperature for consistent, deterministic scoring.
      messages: [
        {
          role: 'system',
          content:
            'You are an expert ATS (Applicant Tracking System) analyst. Evaluate the CV against the job description and return ONLY valid JSON with these exact fields:\n- score (integer 0-100): Honest ATS match score. Rubric: 90-100 = excellent keyword + experience match; 70-89 = good match, minor gaps; 50-69 = moderate, notable missing keywords; 30-49 = weak match, significant gaps; 0-29 = poor, fundamentally misaligned. Base it on keyword overlap, relevant experience, and role seniority. Never inflate.\n- missingKeywords (string[]): Important JD keywords/skills absent from the CV. Max 30.\n- presentKeywords (string[]): Important JD keywords/skills present in the CV. Max 30.\n- suggestions (string[]): Concrete action items to improve the ATS score, each under 15 words. Max 12.\nDo not add any commentary outside the JSON object.',
        },
        {
          role: 'user',
          content: `CV:\n${body.data.cvText}\n\nJob description:\n${body.data.jobDescription}`,
        },
      ],
    });
    const parsed = atsResultSchema.parse(parseJsonFromModel(content));
    const history = await saveScore(user.id, body.data.cvId, parsed);

    return NextResponse.json({ ...parsed, history });
  } catch (error) {
    if (error instanceof Error && error.message === 'KEY_INVALID') {
      return NextResponse.json({ error: 'KEY_INVALID' }, { status: 401 });
    }

    return NextResponse.json(
      { error: 'AI_FAILED', message: 'Could not score this CV. Please try again.' },
      { status: 500 }
    );
  }
}
