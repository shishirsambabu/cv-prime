import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { rateLimit } from '@/lib/rateLimit';
import { consumeCvCreation } from '@/lib/billingQuota';
import { createDefaultCVData } from '@/lib/cv';
import type { Database } from '@/types/database.types';

const createSchema = z.object({
  title: z.string().trim().min(1).max(80).optional(),
});

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const limited = await rateLimit(user.id, 'cvs-create', 10, '1h');
  if (limited) {
    return NextResponse.json({ error: 'Rate limited' }, { status: 429 });
  }

  const body = createSchema.safeParse(await req.json().catch(() => ({})));
  if (!body.success) {
    return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
  }

  const quota = await consumeCvCreation(user.id);
  if (!quota.allowed) {
    return NextResponse.json(
      {
        error: 'PLAN_GATE',
        message: 'You have used your 3 free resume drafts. Upgrade for unlimited resumes.',
        used: quota.used,
        limit: quota.limit,
      },
      { status: 403 }
    );
  }

  const payload: Database['public']['Tables']['cvs']['Insert'] = {
    user_id: user.id,
    title: body.data.title ?? 'Untitled CV',
    template_id: 'classic',
    data: createDefaultCVData() as unknown as Database['public']['Tables']['cvs']['Insert']['data'],
  };

  const { data, error } = await supabase
    .from('cvs')
    .insert([payload] as never)
    .select('*')
    .single();

  if (error || !data) {
    return NextResponse.json({ error: error?.message ?? 'Failed to create CV' }, { status: 500 });
  }

  return NextResponse.json({ cv: data }, { status: 201 });
}
