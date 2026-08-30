import { Resend } from 'resend';

export interface SendResult {
  ok: boolean;
  /** Provider message id when the send was accepted. */
  id: string | null;
  /** True when no provider is configured — the call is a no-op, not a failure. */
  skipped: boolean;
  /** True for transient failures (timeout / 5xx / 429) that are safe to retry. */
  retryable: boolean;
  error: string | null;
}

export interface SendArgs {
  to: string;
  subject: string;
  html: string;
  text: string;
  from?: string;
  replyTo?: string;
  headers?: Record<string, string>;
}

const DEFAULT_FROM = 'CV Prime <hello@cv-prime.in>';
const DEFAULT_REPLY_TO = 'support@cv-prime.in';

let cached: Resend | null | undefined;

function getResend(): Resend | null {
  if (cached !== undefined) {
    return cached;
  }
  const key = process.env.RESEND_API_KEY;
  cached = key ? new Resend(key) : null;
  return cached;
}

function isRetryable(message: string): boolean {
  const m = message.toLowerCase();
  return (
    m.includes('timeout') ||
    m.includes('rate limit') ||
    m.includes('429') ||
    m.includes('500') ||
    m.includes('502') ||
    m.includes('503') ||
    m.includes('504') ||
    m.includes('network') ||
    m.includes('fetch failed') ||
    m.includes('econn')
  );
}

/**
 * Low-level provider send. Never throws — returns a structured result the
 * caller logs. When RESEND_API_KEY is absent the send is skipped (ok=false,
 * skipped=true) so local/dev and un-provisioned environments degrade cleanly
 * instead of crashing the request that triggered the email.
 */
export async function sendViaProvider(args: SendArgs): Promise<SendResult> {
  const resend = getResend();
  if (!resend) {
    return { ok: false, id: null, skipped: true, retryable: false, error: 'RESEND_NOT_CONFIGURED' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: args.from ?? process.env.EMAIL_FROM ?? DEFAULT_FROM,
      to: args.to,
      subject: args.subject,
      html: args.html,
      text: args.text,
      reply_to: args.replyTo ?? process.env.EMAIL_REPLY_TO ?? DEFAULT_REPLY_TO,
      headers: args.headers,
    });

    if (error) {
      const message = error.message ?? 'Unknown provider error';
      return { ok: false, id: null, skipped: false, retryable: isRetryable(message), error: message };
    }

    return { ok: true, id: data?.id ?? null, skipped: false, retryable: false, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Provider send threw';
    return { ok: false, id: null, skipped: false, retryable: isRetryable(message), error: message };
  }
}
