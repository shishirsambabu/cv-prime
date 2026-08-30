import { NextResponse } from 'next/server';
import {
  cancellationEmail,
  newsletterWelcomeEmail,
  paymentFailedEmail,
  purchaseSuccessEmail,
  renewalEmail,
  welcomeEmail,
  type RenderedEmail,
} from '@/lib/email/templates';

export const runtime = 'nodejs';

// Developer-only email preview (spec §53). Disabled in production.
const SAMPLE = { firstName: 'Aarav' };

function render(type: string): RenderedEmail | null {
  switch (type) {
    case 'welcome':
      return welcomeEmail(SAMPLE);
    case 'purchase':
      return purchaseSuccessEmail({ ...SAMPLE, planName: 'CV Prime Pro', amountFormatted: '₹999', purchaseDate: '30 August 2026' });
    case 'payment_failed':
      return paymentFailedEmail(SAMPLE);
    case 'renewal':
      return renewalEmail({ ...SAMPLE, planName: 'CV Prime Pro', amountFormatted: '₹999', purchaseDate: '30 August 2026' });
    case 'cancellation':
      return cancellationEmail({ ...SAMPLE, accessEndsOn: '30 September 2026' });
    case 'newsletter':
      return newsletterWelcomeEmail({ ...SAMPLE, unsubscribeUrl: 'https://cv-prime.in/api/newsletter/unsubscribe?token=sample' });
    default:
      return null;
  }
}

export async function GET(req: Request): Promise<NextResponse> {
  if (process.env.NODE_ENV === 'production' && process.env.ALLOW_EMAIL_PREVIEW !== 'true') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 404 });
  }

  const url = new URL(req.url);
  const type = url.searchParams.get('type') ?? 'welcome';
  const format = url.searchParams.get('format') ?? 'html';
  const email = render(type);
  if (!email) {
    return NextResponse.json(
      { error: 'Unknown type', available: ['welcome', 'purchase', 'payment_failed', 'renewal', 'cancellation', 'newsletter'] },
      { status: 400 }
    );
  }

  if (format === 'text') {
    return new NextResponse(email.text, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
  }
  if (format === 'json') {
    return NextResponse.json({ subject: email.subject, emailType: email.emailType, category: email.category });
  }
  return new NextResponse(email.html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
}
