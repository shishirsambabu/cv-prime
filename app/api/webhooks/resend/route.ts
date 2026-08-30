import { createHmac, timingSafeEqual } from 'crypto';
import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export const runtime = 'nodejs';

/** Verify a Svix-signed Resend webhook without pulling in the svix SDK. */
function verifySvix(headers: Headers, body: string): boolean {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret) return false;
  const id = headers.get('svix-id');
  const timestamp = headers.get('svix-timestamp');
  const signatureHeader = headers.get('svix-signature');
  if (!id || !timestamp || !signatureHeader) return false;

  const key = Buffer.from(secret.replace(/^whsec_/, ''), 'base64');
  const signed = `${id}.${timestamp}.${body}`;
  const expected = createHmac('sha256', key).update(signed).digest('base64');

  // Header format: "v1,<sig> v1,<sig2>" — accept if any version matches.
  return signatureHeader.split(' ').some((part) => {
    const sig = part.includes(',') ? part.split(',')[1] : part;
    if (!sig) return false;
    try {
      const a = Buffer.from(sig);
      const b = Buffer.from(expected);
      return a.length === b.length && timingSafeEqual(a, b);
    } catch {
      return false;
    }
  });
}

interface ResendEvent {
  type: string;
  data?: { email_id?: string; to?: string | string[] };
}

async function suppress(email: string, reason: string): Promise<void> {
  const admin = createAdminClient();
  if (!admin) return;
  await admin
    .from('email_suppressions')
    .upsert([{ email: email.toLowerCase(), reason }] as never, { onConflict: 'email', ignoreDuplicates: true });
}

export async function POST(req: Request): Promise<NextResponse> {
  const body = await req.text();
  if (!verifySvix(req.headers, body)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  let event: ResendEvent;
  try {
    event = JSON.parse(body) as ResendEvent;
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const admin = createAdminClient();
  if (!admin) {
    return NextResponse.json({ error: 'NO_ADMIN' }, { status: 500 });
  }

  const messageId = event.data?.email_id ?? null;
  const to = Array.isArray(event.data?.to) ? event.data?.to?.[0] : event.data?.to;
  const now = new Date().toISOString();

  const patch: Record<string, string> = {};
  switch (event.type) {
    case 'email.sent':
      patch.status = 'sent';
      patch.sent_at = now;
      break;
    case 'email.delivered':
      patch.status = 'delivered';
      patch.delivered_at = now;
      break;
    case 'email.bounced':
      patch.status = 'bounced';
      patch.bounced_at = now;
      if (to) await suppress(to, 'hard_bounce');
      break;
    case 'email.complained':
      patch.status = 'complained';
      if (to) await suppress(to, 'complaint');
      break;
    case 'email.clicked':
      patch.clicked_at = now;
      break;
    default:
      return NextResponse.json({ ok: true, ignored: event.type });
  }

  if (messageId && Object.keys(patch).length > 0) {
    await admin.from('email_messages').update(patch as never).eq('provider_message_id', messageId);
  }

  return NextResponse.json({ ok: true });
}
