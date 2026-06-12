import { NextResponse } from 'next/server';
import { z } from 'zod';
import { callOpenRouter } from '@/lib/openrouter';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';
import type { Database, Json } from '@/types/database.types';

const atsScoreSchema = z.object({
  cvId: z.string().uuid().optional(),
  cvText: z.string().min(50, 'Add enough CV content before scoring.'),
  jobDescription: z.string().min(50, 'Paste a job description before scoring.'),
});

const atsResultSchema = z.object({
  score: z.number().int().min(0).max(100),
  missingKeywords: z.array(z.string()).max(30),
  presentKeywords: z.array(z.string()).max(30),
  suggestions: z.array(z.string()).max(12),
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
      messages: [
        {
          role: 'system',
          content:
            'You are an expert ATS analyst. Return only valid JSON with score, missingKeywords, presentKeywords, and suggestions. Score 90-100 means excellent match, 70-89 good, 50-69 moderate, below 50 poor. Suggestions must be action items under 15 words.',
        },
        {
          role: 'user',
          content: `CV:\n${body.data.cvText}\n\nJob description:\n${body.data.jobDescription}`,
        },
      ],
    });
    const parsed = atsResultSchema.parse(JSON.parse(content) as unknown);
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
