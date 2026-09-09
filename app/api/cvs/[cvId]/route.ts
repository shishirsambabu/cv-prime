import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { rateLimit } from '@/lib/rateLimit';
import { cvPatchSchema } from '@/lib/cv.schema';
import { getUserPlan } from '@/lib/plan';
import { PRO_TEMPLATES } from '@/lib/constants';
import type { Database } from '@/types/database.types';

const paramsSchema = z.object({
  cvId: z.string().uuid(),
});

export async function GET(
  _req: Request,
  context: { params: { cvId: string } }
): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { cvId } = paramsSchema.parse(context.params);

  const { data, error } = await supabase
    .from('cvs')
    .select('*')
    .eq('id', cvId)
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ cv: data });
}

export async function PATCH(
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

  const limited = await rateLimit(user.id, 'cvs', 60, '1h');
  if (limited) {
    return NextResponse.json({ error: 'Rate limited' }, { status: 429 });
  }

  const { cvId } = paramsSchema.parse(context.params);
  const body = cvPatchSchema.safeParse(await req.json());
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  // The template picker only hides Pro templates client-side (CVEditor.tsx),
  // so without this check a free-plan user could PATCH straight to a
  // Pro-only template — the editor and live preview would then render it,
  // even though PDF export (app/print/[cvId]) still blocks the download.
  if (body.data.templateId && PRO_TEMPLATES.includes(body.data.templateId)) {
    const plan = await getUserPlan(user.id);
    if (plan === 'free') {
      return NextResponse.json(
        { error: 'PLAN_GATE', message: 'Upgrade to Pro to use this template.' },
        { status: 403 }
      );
    }
  }

  const updates: Database['public']['Tables']['cvs']['Update'] = {
    last_edited: new Date().toISOString(),
  };

  if (body.data.data) {
    updates.data = body.data.data;
  }

  if (body.data.templateId) {
    updates.template_id = body.data.templateId;
  }

  if (body.data.title) {
    updates.title = body.data.title;
  }

  if (body.data.isPublic !== undefined) {
    updates.is_public = body.data.isPublic;
  }

  const { error } = await supabase
    .from('cvs')
    .update(updates as never)
    .eq('id', cvId)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: Request,
  context: { params: { cvId: string } }
): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { cvId } = paramsSchema.parse(context.params);

  const { error } = await supabase
    .from('cvs')
    .delete()
    .eq('id', cvId)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
