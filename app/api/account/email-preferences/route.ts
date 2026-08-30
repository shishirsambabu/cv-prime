import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const prefsSchema = z.object({
  career_tips: z.boolean(),
  product_updates: z.boolean(),
  offers: z.boolean(),
  newsletter: z.boolean(),
});

export async function GET(): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const admin = createAdminClient();
  const { data } = admin
    ? await admin.from('profiles').select('email_prefs, newsletter_status').eq('id', user.id).maybeSingle()
    : await supabase.from('profiles').select('email_prefs, newsletter_status').eq('id', user.id).maybeSingle();
  const row = data as { email_prefs?: Record<string, boolean>; newsletter_status?: string | null } | null;
  return NextResponse.json({
    prefs: row?.email_prefs ?? { career_tips: false, product_updates: false, offers: false, newsletter: false },
    newsletterStatus: row?.newsletter_status ?? null,
  });
}

export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const parsed = prefsSchema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const admin = createAdminClient();
  if (!admin) return NextResponse.json({ error: 'NO_ADMIN' }, { status: 500 });

  const anyOn = Object.values(parsed.data).some(Boolean);
  const { error } = await admin
    .from('profiles')
    .update({
      email_prefs: parsed.data as never,
      newsletter_status: anyOn ? 'subscribed' : 'unsubscribed',
    } as never)
    .eq('id', user.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true, prefs: parsed.data });
}
