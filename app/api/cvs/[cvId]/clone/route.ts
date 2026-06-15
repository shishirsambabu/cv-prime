import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { rateLimit } from '@/lib/rateLimit';
import type { Database } from '@/types/database.types';

const paramsSchema = z.object({
  cvId: z.string().uuid(),
});

const cloneSchema = z.object({
  title: z.string().trim().min(1).max(80).optional(),
});

type CVCloneView = Pick<
  Database['public']['Tables']['cvs']['Row'],
  'title' | 'template_id' | 'data' | 'ats_score' | 'ats_score_history'
>;

export async function POST(
  req: Request,
  context: { params: { cvId: string } }
): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'cvs-clone', 20, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = cloneSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const { cvId } = paramsSchema.parse(context.params);
  const { data: rawCv, error: fetchError } = await supabase
    .from('cvs')
    .select('title, template_id, data, ats_score, ats_score_history')
    .eq('id', cvId)
    .eq('user_id', user.id)
    .single();
  const cv = rawCv as CVCloneView | null;

  if (fetchError || !cv) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const payload: Database['public']['Tables']['cvs']['Insert'] = {
    user_id: user.id,
    title: body.data.title ?? `${cv.title} copy`,
    template_id: cv.template_id,
    data: cv.data,
    ats_score: cv.ats_score,
    ats_score_history: cv.ats_score_history,
    is_public: false,
    last_edited: new Date().toISOString(),
  };

  const { data: clone, error } = await supabase
    .from('cvs')
    .insert([payload] as never)
    .select('id')
    .single();

  if (error || !clone) {
    return NextResponse.json(
      { error: error?.message ?? 'Could not clone this CV.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ cv: clone }, { status: 201 });
}
