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
  const { data, error } = admin
    ? await admin.from('profiles').select('email_prefs, newsletter_status').eq('id', user.id).maybeSingle()
    : await supabase.from('profiles').select('email_prefs, newsletter_status').eq('id', user.id).maybeSingle();
  // A failed read must not be answered with all-off defaults: the settings
  // page would show every toggle off as if that were the saved state, and the
  // next Save would write those placeholders over the real preferences.
  if (error) return NextResponse.json({ error: 'LOAD_FAILED' }, { status: 500 });
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
  const { data: updated, error } = await admin
    .from('profiles')
    .update({
      email_prefs: parsed.data as never,
      newsletter_status: anyOn ? 'subscribed' : 'unsubscribed',
    } as never)
    .eq('id', user.id)
    .select('id');
  if (error) return NextResponse.json({ error: 'SAVE_FAILED' }, { status: 500 });
  // An update that matches no row is not an error to PostgREST; without this
  // the page said "Saved" for preferences written nowhere.
  if (!updated || (updated as unknown[]).length === 0) {
    return NextResponse.json({ error: 'NOT_FOUND' }, { status: 404 });
  }

  return NextResponse.json({ ok: true, prefs: parsed.data });
}
