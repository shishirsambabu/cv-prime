import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const runtime = 'nodejs';

const OFF = { career_tips: false, product_updates: false, offers: false, newsletter: false };

function page(title: string, message: string): NextResponse {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head>
  <body style="margin:0;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#f1f5f9;">
  <div style="max-width:520px;margin:64px auto;background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:36px;text-align:center;">
    <div style="font-size:20px;font-weight:800;color:#0f172a;">CV Prime</div>
    <h1 style="font-size:22px;color:#0f172a;margin:20px 0 10px;">${title}</h1>
    <p style="color:#475569;line-height:1.6;">${message}</p>
    <a href="https://cv-prime.in/settings/notifications" style="display:inline-block;margin-top:20px;color:#4a41c9;font-weight:600;">Manage email preferences</a>
  </div></body></html>`;
  return new NextResponse(html, { status: 200, headers: { 'content-type': 'text/html; charset=utf-8' } });
}

/**
 * One-click unsubscribe via signed-out token link (spec §20). Supports both a
 * GET click and the RFC 8058 List-Unsubscribe-Post one-click POST. Turns off
 * all marketing categories immediately; transactional mail is unaffected.
 */
async function handle(token: string | null): Promise<NextResponse> {
  if (!token) {
    return page('Invalid link', 'This unsubscribe link is missing its token. Please use the link from your email.');
  }
  const admin = createAdminClient();
  if (!admin) {
    return page('Something went wrong', 'We could not process your request right now. Please try again shortly.');
  }

  const { data } = await admin
    .from('profiles')
    .select('id')
    .eq('unsubscribe_token', token)
    .maybeSingle();
  const profile = data as { id: string } | null;
  if (!profile) {
    return page('Link expired', 'This unsubscribe link is no longer valid. You can manage preferences from your account.');
  }

  await admin
    .from('profiles')
    .update({
      email_prefs: OFF as never,
      newsletter_status: 'unsubscribed',
      newsletter_unsubscribed_at: new Date().toISOString(),
    } as never)
    .eq('id', profile.id);

  return page('You’re unsubscribed', 'You won’t receive CV Prime marketing emails anymore. You’ll still get essential account and payment notifications.');
}

export async function GET(req: Request): Promise<NextResponse> {
  return handle(new URL(req.url).searchParams.get('token'));
}

export async function POST(req: Request): Promise<NextResponse> {
  return handle(new URL(req.url).searchParams.get('token'));
}
