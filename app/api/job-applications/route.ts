import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { rateLimit } from '@/lib/rateLimit';
import type { Database } from '@/types/database.types';

const createJobSchema = z.object({
  company: z.string().trim().min(1).max(120),
  role: z.string().trim().min(1).max(120),
  jobUrl: z.string().trim().url().optional().or(z.literal('')),
  appliedDate: z.string().trim().optional().or(z.literal('')),
  notes: z.string().trim().max(1000).optional(),
});

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'job-applications-create', 30, '1h');
  if (limited) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const body = createJobSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const [{ data: profile }, { count }] = await Promise.all([
    supabase.from('profiles').select('plan').eq('id', user.id).maybeSingle(),
    supabase
      .from('job_applications')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id),
  ]);
  const plan = ((profile as { plan?: 'free' | 'pro' } | null)?.plan ?? 'free') as
    | 'free'
    | 'pro';

  if (plan === 'free' && (count ?? 0) >= 3) {
    return NextResponse.json(
      { error: 'PLAN_GATE', message: 'Free plan users can track up to 3 jobs.' },
      { status: 403 }
    );
  }

  const payload: Database['public']['Tables']['job_applications']['Insert'] = {
    user_id: user.id,
    company: body.data.company,
    role: body.data.role,
    job_url: body.data.jobUrl || null,
    applied_date: body.data.appliedDate || null,
    notes: body.data.notes || null,
    status: 'saved',
  };

  const { data, error } = await supabase
    .from('job_applications')
    .insert([payload] as never)
    .select('*')
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: error?.message ?? 'Could not add this job.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ job: data }, { status: 201 });
}
