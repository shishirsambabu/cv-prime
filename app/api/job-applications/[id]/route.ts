import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { rateLimit } from '@/lib/rateLimit';
import { parseRouteParams } from '@/lib/apiParams';
import type { Database } from '@/types/database.types';

const paramsSchema = z.object({
  id: z.string().uuid(),
});

const patchJobSchema = z.object({
  status: z.enum(['saved', 'applied', 'interview', 'offer', 'rejected']).optional(),
  company: z.string().trim().min(1).max(120).optional(),
  role: z.string().trim().min(1).max(120).optional(),
  jobUrl: z.string().trim().url().optional().or(z.literal('')),
  appliedDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Use a YYYY-MM-DD date.')
    .refine((value) => !Number.isNaN(Date.parse(value)), 'Use a real calendar date.')
    .optional()
    .or(z.literal('')),
  notes: z.string().trim().max(1000).optional(),
}).refine(
  (value) =>
    value.status !== undefined ||
    value.company !== undefined ||
    value.role !== undefined ||
    value.jobUrl !== undefined ||
    value.appliedDate !== undefined ||
    value.notes !== undefined,
  { message: 'Provide at least one job update.' }
);

export async function PATCH(
  req: Request,
  context: { params: { id: string } }
): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'job-applications-update', 80, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const parsedParams = parseRouteParams(paramsSchema, context.params);
  if (!parsedParams.ok) {
    return parsedParams.response;
  }
  const { id } = parsedParams.data;
  const body = patchJobSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const updates: Database['public']['Tables']['job_applications']['Update'] = {};

  if (body.data.status) {
    updates.status = body.data.status;
  }

  if (body.data.company) {
    updates.company = body.data.company;
  }

  if (body.data.role) {
    updates.role = body.data.role;
  }

  if (body.data.jobUrl !== undefined) {
    updates.job_url = body.data.jobUrl || null;
  }

  if (body.data.appliedDate !== undefined) {
    updates.applied_date = body.data.appliedDate || null;
  }

  if (body.data.notes !== undefined) {
    updates.notes = body.data.notes || null;
  }

  const { data: updated, error } = await supabase
    .from('job_applications')
    .update(updates as never)
    .eq('id', id)
    .eq('user_id', user.id)
    .select('id');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // An update that matches no row is not an error to PostgREST. Without this
  // the board showed a move/edit as done when the job had been deleted in
  // another tab and nothing was written.
  if (!updated || updated.length === 0) {
    return NextResponse.json({ error: 'Job application not found' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: Request,
  context: { params: { id: string } }
): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const parsedParams = parseRouteParams(paramsSchema, context.params);
  if (!parsedParams.ok) {
    return parsedParams.response;
  }
  const { id } = parsedParams.data;
  const { error } = await supabase
    .from('job_applications')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
