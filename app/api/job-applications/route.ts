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

type RpcClient = {
  rpc(
    fn: 'create_job_application_atomic',
    args: {
      p_user_id: string;
      p_company: string;
      p_role: string;
      p_job_url: string;
      p_applied_date: string;
      p_notes: string;
    }
  ): Promise<{ data: unknown; error: { message: string } | null }>;
};

const createJobRpcResultSchema = z.union([
  z.object({ allowed: z.literal(true), job: z.record(z.unknown()) }),
  z.object({ allowed: z.literal(false), error: z.string().optional() }),
]);

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

  // The free-plan 3-job cap used to be enforced with a separate `count()`
  // read followed by an `insert()` — two round trips with no lock between
  // them. Two concurrent requests (a double-click, two tabs, a retried
  // request) could both read the same pre-insert count, both see it under
  // the limit, and both insert, leaving a free-plan user with more than 3
  // tracked jobs. `create_job_application_atomic` does the count check and
  // the insert inside one function under a row lock on the caller's own
  // `profiles` row, so concurrent calls for the same user serialize instead
  // of racing. See 20260921000000_atomic_job_application_insert.sql.
  const rpcResult = await (
    supabase as unknown as RpcClient
  ).rpc('create_job_application_atomic', {
    p_user_id: user.id,
    p_company: body.data.company,
    p_role: body.data.role,
    p_job_url: body.data.jobUrl || '',
    p_applied_date: body.data.appliedDate || '',
    p_notes: body.data.notes || '',
  });

  if (!rpcResult.error) {
    const parsed = createJobRpcResultSchema.safeParse(rpcResult.data);
    if (parsed.success) {
      if (!parsed.data.allowed) {
        if (parsed.data.error === 'NOT_FOUND') {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        return NextResponse.json(
          { error: 'PLAN_GATE', message: 'Free plan users can track up to 3 jobs.' },
          { status: 403 }
        );
      }
      return NextResponse.json({ job: parsed.data.job }, { status: 201 });
    }
  }

  // Fallback for environments where the RPC migration has not been applied
  // yet: keep the previous (non-atomic) behavior rather than breaking job
  // creation outright. This path still has the original race — it exists
  // only to bridge deployments, not as a permanent second code path.
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
