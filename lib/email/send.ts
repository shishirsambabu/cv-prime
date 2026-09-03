import { createAdminClient } from '@/lib/supabase/admin';
import { sendViaProvider } from '@/lib/email/client';
import { getRecipient } from '@/lib/email/recipient';
import type { EmailCategory, RenderedEmail } from '@/lib/email/templates';
import type { Database } from '@/types/database.types';

export interface SendOutcome {
  status: 'sent' | 'skipped' | 'duplicate' | 'suppressed' | 'failed' | 'no_recipient' | 'no_admin';
  messageId?: string | null;
  reason?: string;
}

type EmailInsert = Database['public']['Tables']['email_messages']['Insert'];
type EmailUpdate = Database['public']['Tables']['email_messages']['Update'];

// How long a 'queued' claim must sit before another request may take it over.
// Shorter than the email-health cron's 10min sweep, longer than any in-flight
// provider call, so concurrent duplicates never both send.
const STALE_CLAIM_MS = 5 * 60 * 1000;

const MARKETING_PREF_KEYS: Record<EmailCategory, string | null> = {
  transactional: null,
  career_tips: 'career_tips',
  product_updates: 'product_updates',
  offers: 'offers',
  newsletter: 'newsletter',
};

interface SendParams {
  userId: string | null;
  email: RenderedEmail;
  /** Stable key — a repeated send with the same key is a guaranteed no-op. */
  idempotencyKey: string;
  /** Skip the recipient lookup (e.g. cron already has the address). */
  toOverride?: string | null;
  lifecycleEventId?: string | null;
  unsubscribeToken?: string | null;
}

/**
 * The single funnel every email passes through. Guarantees:
 *  - Idempotency: the unique idempotency_key row is inserted FIRST; a duplicate
 *    insert (concurrent webhook, retry, redeploy) loses the race and no-ops.
 *  - Consent: marketing categories are gated on the user's email_prefs;
 *    transactional mail always sends.
 *  - Suppression: known hard-bounced / complained / unsubscribed addresses are
 *    never emailed again.
 *  - Observability: every attempt is logged with its provider message id and
 *    final status.
 * Never throws — returns a structured outcome the caller can log/alert on.
 */
export async function sendEmail(params: SendParams): Promise<SendOutcome> {
  const admin = createAdminClient();
  if (!admin) {
    return { status: 'no_admin', reason: 'SUPABASE_SERVICE_ROLE_KEY missing' };
  }

  // Resolve recipient + preferences.
  let recipientEmail = params.toOverride ?? null;
  let unsubscribeToken = params.unsubscribeToken ?? null;
  if (!recipientEmail && params.userId) {
    const recipient = await getRecipient(params.userId);
    recipientEmail = recipient.email;
    unsubscribeToken = unsubscribeToken ?? recipient.unsubscribeToken;
  }
  if (!recipientEmail) {
    return { status: 'no_recipient' };
  }

  // Consent gate for marketing categories.
  const prefKey = MARKETING_PREF_KEYS[params.email.category];
  if (prefKey && params.userId) {
    const { data } = await admin
      .from('profiles')
      .select('email_prefs')
      .eq('id', params.userId)
      .maybeSingle();
    const prefs = ((data as { email_prefs?: Record<string, boolean> } | null)?.email_prefs ?? {}) as Record<string, boolean>;
    if (!prefs[prefKey]) {
      return { status: 'suppressed', reason: `not opted in: ${prefKey}` };
    }
  }

  // Global suppression list (bounces / complaints / unsubscribe-all).
  const { data: suppressed } = await admin
    .from('email_suppressions')
    .select('email')
    .eq('email', recipientEmail.toLowerCase())
    .maybeSingle();
  if (suppressed) {
    return { status: 'suppressed', reason: 'address suppressed' };
  }

  // Idempotency: claim the key by inserting the log row first.
  const insert: EmailInsert = {
    user_id: params.userId,
    recipient: recipientEmail,
    email_type: params.email.emailType,
    category: params.email.category,
    lifecycle_event_id: params.lifecycleEventId ?? null,
    template_version: params.email.templateVersion,
    status: 'queued',
    idempotency_key: params.idempotencyKey,
  };
  const { data: claimed, error: claimError } = await admin
    .from('email_messages')
    .insert([insert] as never)
    .select('id, status')
    .maybeSingle();

  let messageRowId = (claimed as { id: string } | null)?.id ?? null;

  if (claimError) {
    // 23505 = unique_violation → a row for this key already exists.
    if ((claimError as { code?: string }).code === '23505') {
      const { data: existing } = await admin
        .from('email_messages')
        .select('id, status, provider_message_id, created_at')
        .eq('idempotency_key', params.idempotencyKey)
        .maybeSingle();
      const row = existing as {
        id: string;
        status: string;
        provider_message_id: string | null;
        created_at: string;
      } | null;
      // Already delivered/sent → genuine duplicate, do nothing.
      // Also treat a row that already carries a provider message id as sent: the
      // provider accepted it even if we lost the response (timeout), so retrying
      // would deliver the same email twice.
      if (!row || row.status === 'sent' || row.status === 'delivered' || row.provider_message_id) {
        return { status: 'duplicate' };
      }
      // A recently-claimed 'queued' row means another request is very likely
      // mid-flight on the provider call right now (a webhook retry arriving
      // seconds after the first). Re-driving it here would deliver twice, so
      // only take over a row that has been stuck long enough to be abandoned.
      const claimedAgoMs = Date.now() - new Date(row.created_at).getTime();
      if (!Number.isFinite(claimedAgoMs) || claimedAgoMs < STALE_CLAIM_MS) {
        return { status: 'duplicate' };
      }
      // Still queued or previously failed → this is a retry; re-drive that row.
      messageRowId = row.id;
    } else {
      return { status: 'failed', reason: claimError.message };
    }
  }

  // Build an unsubscribe link for marketing categories.
  // Gate on the token, not the category: only newsletter/marketing senders pass
  // an unsubscribeToken, while receipts and account mail never do. Gating on
  // category !== 'transactional' meant the newsletter opt-in confirmation — the
  // one message that must carry List-Unsubscribe — shipped without it.
  const unsubUrl = unsubscribeToken
    ? `${(process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in').replace(/\/$/, '')}/api/newsletter/unsubscribe?token=${unsubscribeToken}`
    : null;
  const headers = unsubUrl
    ? { 'List-Unsubscribe': `<${unsubUrl}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' }
    : undefined;

  // Send.
  const result = await sendViaProvider({
    to: recipientEmail,
    subject: params.email.subject,
    html: params.email.html,
    text: params.email.text,
    headers,
  });

  const now = new Date().toISOString();
  const update: EmailUpdate = result.ok
    ? { status: 'sent', provider_message_id: result.id, sent_at: now }
    : result.skipped
      ? // No provider configured yet — nothing was transmitted and nothing is
        // wrong with the message, so keep it QUEUED (not terminal) and let the
        // email-health cron deliver it once RESEND_API_KEY exists.
        { status: 'queued', error: 'RESEND_NOT_CONFIGURED', failed_at: null }
      : { status: result.retryable ? 'queued' : 'failed', error: result.error, failed_at: result.retryable ? null : now };

  if (messageRowId) {
    await admin.from('email_messages').update(update as never).eq('id', messageRowId);
  }

  if (result.ok) {
    return { status: 'sent', messageId: result.id };
  }
  if (result.skipped) {
    return { status: 'skipped', reason: 'RESEND_NOT_CONFIGURED' };
  }
  return { status: 'failed', reason: result.error ?? 'send failed' };
}
