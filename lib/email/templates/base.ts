// Lightweight, dependency-free email component system. Every template composes
// these helpers so all CV Prime mail shares one branded, responsive, email-
// client-safe design (inline styles, table-free where possible, dark-friendly).

export const BRAND = '#5b50e6';
export const BRAND_STRONG = '#4a41c9';
const INK = '#0f172a';
const MUTED = '#64748b';
const BORDER = '#e2e8f0';
const BG = '#f1f5f9';

export function appUrl(path = ''): string {
  const base = (process.env.NEXT_PUBLIC_APP_URL ?? 'https://cv-prime.in').replace(/\/$/, '');
  return path ? `${base}${path.startsWith('/') ? '' : '/'}${path}` : base;
}

/** Append UTM params to a marketing/lifecycle link (never to sensitive links). */
export function withUtm(url: string, campaign: string): string {
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}utm_source=lifecycle_email&utm_medium=email&utm_campaign=${encodeURIComponent(campaign)}`;
}

/**
 * Escape any value interpolated into email HTML. Recipient names come from
 * user_metadata / profiles and are attacker-controlled, so every template must
 * run untrusted text through this before embedding it in a body.
 */
export function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function primaryButton(label: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0;">
    <tr><td style="border-radius:10px;background:${BRAND};">
      <a href="${esc(href)}" style="display:inline-block;padding:14px 30px;font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:10px;">${esc(label)}</a>
    </td></tr>
  </table>`;
}

export function progressCard(title: string, body: string): string {
  return `<div style="border:1px solid ${BORDER};border-radius:12px;padding:18px 20px;margin:20px 0;background:#f8fafc;">
    <p style="margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:${BRAND_STRONG};">${esc(title)}</p>
    <p style="margin:0;font-size:15px;line-height:1.6;color:${INK};">${body}</p>
  </div>`;
}

export function receiptRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 0;font-size:14px;color:${MUTED};">${esc(label)}</td>
    <td style="padding:8px 0;font-size:14px;color:${INK};text-align:right;font-weight:600;">${esc(value)}</td>
  </tr>`;
}

export function receiptTable(rows: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${BORDER};border-bottom:1px solid ${BORDER};margin:20px 0;">${rows}</table>`;
}

interface LayoutArgs {
  preheader: string;
  heading: string;
  bodyHtml: string;
  firstName: string;
  /** Unsubscribe link is added only for marketing/lifecycle categories. */
  unsubscribeUrl?: string | null;
}

/**
 * Wrap body content in the branded shell. Returns HTML. `unsubscribeUrl` is
 * required by CAN-SPAM-style rules for marketing mail; transactional mail
 * passes null and shows only a support line.
 */
export function layout({ preheader, heading, bodyHtml, unsubscribeUrl }: LayoutArgs): string {
  const year = new Date().getFullYear();
  const manage = unsubscribeUrl
    ? `<p style="margin:6px 0 0;">You're receiving CV Prime tips because you opted in. <a href="${esc(unsubscribeUrl)}" style="color:${MUTED};text-decoration:underline;">Unsubscribe</a> or <a href="${esc(appUrl('/settings/notifications'))}" style="color:${MUTED};text-decoration:underline;">manage preferences</a>.</p>`
    : `<p style="margin:6px 0 0;">Questions? Just reply to this email — a human reads it.</p>`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>${esc(heading)}</title>
</head>
<body style="margin:0;padding:0;background:${BG};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:32px 12px;">
  <tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BORDER};">
      <tr><td style="padding:28px 32px 8px;">
        <a href="${esc(appUrl())}" style="text-decoration:none;font-size:20px;font-weight:800;color:${INK};letter-spacing:-.02em;">CV&nbsp;Prime</a>
      </td></tr>
      <tr><td style="padding:8px 32px 32px;">
        <h1 style="margin:12px 0 16px;font-size:24px;line-height:1.25;color:${INK};font-weight:800;letter-spacing:-.02em;">${esc(heading)}</h1>
        <div style="font-size:16px;line-height:1.65;color:#334155;">${bodyHtml}</div>
      </td></tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
      <tr><td style="padding:20px 32px;text-align:center;font-size:12px;line-height:1.6;color:${MUTED};">
        <p style="margin:0;">CV Prime — AI resume builder, ATS scoring &amp; tailoring.</p>
        ${manage}
        <p style="margin:10px 0 0;">© ${year} CV Prime · <a href="${esc(appUrl('/privacy'))}" style="color:${MUTED};text-decoration:underline;">Privacy</a></p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/** Plain-text alternative builder — every template must ship one. */
export function textBlock(lines: string[]): string {
  return lines.filter((l) => l !== undefined).join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
