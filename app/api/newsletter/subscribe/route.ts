import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendNewsletterWelcomeEmail } from '@/lib/email/lifecycle';
import { rateLimit } from '@/lib/rateLimit';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const schema = z.object({
  source: z.string().max(60).optional(),
  categories: z
    .object({
      career_tips: z.boolean().optional(),
      product_updates: z.boolean().optional(),
      offers: z.boolean().optional(),
      newsletter: z.boolean().optional(),
    })
    .optional(),
});

/**
 * Explicit newsletter / marketing opt-in for the authenticated user. We never
 * subscribe anyone implicitly — this endpoint requires a deliberate action.
 */
export async function POST(req: Request): Promise<NextResponse> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (await rateLimit(user.id, 'newsletter-subscribe', 10, '1h')) {
    return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
  }

  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createAdminClient();
  if (!admin) {
    return NextResponse.json({ error: 'NO_ADMIN' }, { status: 500 });
  }

  // Default opt-in = career tips + newsletter; caller may specify categories.
  const c = parsed.data.categories ?? { career_tips: true, newsletter: true };
  const prefs = {
    career_tips: c.career_tips ?? true,
    product_updates: c.product_updates ?? false,
    offers: c.offers ?? false,
    newsletter: c.newsletter ?? true,
  };

  const { error } = await admin
    .from('profiles')
    .update({
      email_prefs: prefs as never,
      newsletter_status: 'subscribed',
      newsletter_subscribed_at: new Date().toISOString(),
      newsletter_unsubscribed_at: null,
    } as never)
    .eq('id', user.id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Confirmation email — never blocks the response.
  try {
    await sendNewsletterWelcomeEmail(user.id);
  } catch {
    /* non-fatal */
  }

  return NextResponse.json({ ok: true, prefs });
}
