import {
  appUrl,
  esc,
  layout,
  primaryButton,
  progressCard,
  receiptRow,
  receiptTable,
  textBlock,
} from './base';

export type EmailCategory =
  | 'transactional'
  | 'career_tips'
  | 'product_updates'
  | 'offers'
  | 'newsletter';

export interface RenderedEmail {
  emailType: string;
  category: EmailCategory;
  templateVersion: string;
  subject: string;
  html: string;
  text: string;
}

export interface TemplateContext {
  firstName: string;
  unsubscribeUrl?: string | null;
}

// --- Account welcome ------------------------------------------------------
export function welcomeEmail(ctx: TemplateContext): RenderedEmail {
  const cta = appUrl('/dashboard');
  const heading = "Welcome to CV Prime — let's build something strong";
  const bodyHtml = `
    <p>Hi ${esc(ctx.firstName)}, welcome aboard 👋</p>
    <p>CV Prime helps you build a clean, ATS-ready resume, score it against any job description, and tailor it in minutes — so your experience lands the way it should.</p>
    <p>The best first step is simply to create your resume. You can refine it as much as you like afterwards.</p>
    ${primaryButton('Create My Resume', cta)}
    <p style="color:#64748b;font-size:14px;">No pressure to finish in one sitting — your work saves automatically.</p>`;
  return {
    emailType: 'welcome',
    category: 'transactional',
    templateVersion: 'welcome-v1',
    subject: "Welcome to CV Prime — let's build something strong",
    html: layout({ preheader: 'Your account is ready. Build your first resume in minutes.', heading, bodyHtml, firstName: ctx.firstName, unsubscribeUrl: null }),
    text: textBlock([
      `Hi ${ctx.firstName}, welcome to CV Prime.`,
      '',
      'CV Prime helps you build an ATS-ready resume, score it against any job description, and tailor it in minutes.',
      '',
      `Create your first resume: ${cta}`,
      '',
      'Questions? Just reply to this email.',
    ]),
  };
}

// --- Purchase success (CRITICAL) -----------------------------------------
export interface PurchaseContext extends TemplateContext {
  planName: string;
  amountFormatted?: string | null;
  purchaseDate?: string | null;
}

export function purchaseSuccessEmail(ctx: PurchaseContext): RenderedEmail {
  const cta = appUrl('/dashboard');
  const manage = appUrl('/settings');
  const heading = `You're officially on ${ctx.planName} 🎉`;
  const receipt = receiptTable(
    [
      receiptRow('Plan', ctx.planName),
      ctx.amountFormatted ? receiptRow('Amount', ctx.amountFormatted) : '',
      ctx.purchaseDate ? receiptRow('Date', ctx.purchaseDate) : '',
      receiptRow('Status', 'Active'),
    ].join('')
  );
  const bodyHtml = `
    <p>Thank you for choosing CV Prime, ${esc(ctx.firstName)}. Your <strong>${ctx.planName}</strong> access is now active.</p>
    <p>Job searching takes persistence, and we're glad to be part of the process. Use your new tools to strengthen your resume, tailor each application, and present your experience with real confidence.</p>
    ${receipt}
    <p>We're wishing you the very best with the opportunities ahead. 💪</p>
    ${primaryButton('Continue Building My Resume', cta)}
    <p style="color:#64748b;font-size:14px;">Manage your subscription any time from your <a href="${manage}" style="color:#4a41c9;">account settings</a>.</p>`;
  return {
    emailType: 'purchase_success',
    category: 'transactional',
    templateVersion: 'purchase-v1',
    subject: `You're officially on ${ctx.planName} 🎉`,
    html: layout({ preheader: `Your ${ctx.planName} access is active. Here's to the road ahead.`, heading, bodyHtml, firstName: ctx.firstName, unsubscribeUrl: null }),
    text: textBlock([
      `Thank you for choosing CV Prime, ${ctx.firstName}.`,
      `Your ${ctx.planName} access is now active.`,
      '',
      `Plan: ${ctx.planName}`,
      ctx.amountFormatted ? `Amount: ${ctx.amountFormatted}` : '',
      ctx.purchaseDate ? `Date: ${ctx.purchaseDate}` : '',
      'Status: Active',
      '',
      'Use your new tools to strengthen your resume, tailor each application, and apply with confidence. Wishing you the very best ahead.',
      '',
      `Continue building: ${cta}`,
      `Manage subscription: ${manage}`,
    ]),
  };
}

// --- Payment failed -------------------------------------------------------
export function paymentFailedEmail(ctx: TemplateContext): RenderedEmail {
  const cta = appUrl('/pricing');
  const heading = 'We couldn’t process your payment';
  const bodyHtml = `
    <p>Hi ${esc(ctx.firstName)}, we tried to process your CV Prime payment but it didn’t go through, so no charge was made.</p>
    <p>This usually happens for a small reason — an expired card, a bank decline, or a temporary network issue. Your account and resumes are safe and unchanged.</p>
    ${primaryButton('Update Payment', cta)}
    <p style="color:#64748b;font-size:14px;">If you think this is a mistake, just reply and we’ll help sort it out.</p>`;
  return {
    emailType: 'payment_failed',
    category: 'transactional',
    templateVersion: 'payment-failed-v1',
    subject: 'Your CV Prime payment didn’t go through',
    html: layout({ preheader: 'No charge was made — here’s how to fix it.', heading, bodyHtml, firstName: ctx.firstName, unsubscribeUrl: null }),
    text: textBlock([
      `Hi ${ctx.firstName}, we tried to process your CV Prime payment but it didn't go through, so no charge was made.`,
      '',
      'Your account and resumes are safe. To try again, update your payment:',
      cta,
      '',
      'Reply to this email if you need a hand.',
    ]),
  };
}

// --- Renewal confirmation -------------------------------------------------
export function renewalEmail(ctx: PurchaseContext): RenderedEmail {
  const heading = `Your ${ctx.planName} renewed`;
  const receipt = receiptTable(
    [
      receiptRow('Plan', ctx.planName),
      ctx.amountFormatted ? receiptRow('Amount', ctx.amountFormatted) : '',
      ctx.purchaseDate ? receiptRow('Renewed on', ctx.purchaseDate) : '',
      receiptRow('Status', 'Active'),
    ].join('')
  );
  const bodyHtml = `
    <p>Hi ${esc(ctx.firstName)}, your CV Prime <strong>${ctx.planName}</strong> subscription renewed successfully — thanks for staying with us.</p>
    ${receipt}
    <p style="color:#64748b;font-size:14px;">Manage your subscription any time from your <a href="${appUrl('/settings')}" style="color:#4a41c9;">account settings</a>.</p>`;
  return {
    emailType: 'renewal',
    category: 'transactional',
    templateVersion: 'renewal-v1',
    subject: `Your CV Prime ${ctx.planName} renewed`,
    html: layout({ preheader: 'Your subscription renewed successfully.', heading, bodyHtml, firstName: ctx.firstName, unsubscribeUrl: null }),
    text: textBlock([
      `Hi ${ctx.firstName}, your CV Prime ${ctx.planName} subscription renewed successfully.`,
      ctx.amountFormatted ? `Amount: ${ctx.amountFormatted}` : '',
      'Status: Active',
      '',
      `Manage subscription: ${appUrl('/settings')}`,
    ]),
  };
}

// --- Cancellation confirmation -------------------------------------------
export interface CancellationContext extends TemplateContext {
  accessEndsOn?: string | null;
}

export function cancellationEmail(ctx: CancellationContext): RenderedEmail {
  const heading = 'Your subscription is cancelled';
  const endsLine = ctx.accessEndsOn
    ? `You’ll keep full access until <strong>${ctx.accessEndsOn}</strong>, after which your account returns to the free plan.`
    : 'Your account will return to the free plan at the end of the current period.';
  const bodyHtml = `
    <p>Hi ${esc(ctx.firstName)}, we’ve cancelled your CV Prime subscription as requested.</p>
    <p>${endsLine} Your resumes and data stay safe on the free plan — nothing is deleted.</p>
    <p>If you change your mind, you can reactivate any time.</p>
    ${primaryButton('Reactivate CV Prime', appUrl('/pricing'))}
    <p style="color:#64748b;font-size:14px;">Mind sharing why you cancelled? Just reply — it genuinely helps us improve.</p>`;
  return {
    emailType: 'cancellation',
    category: 'transactional',
    templateVersion: 'cancellation-v1',
    subject: 'Your CV Prime subscription is cancelled',
    html: layout({ preheader: 'Your resumes stay safe. Here’s what happens next.', heading, bodyHtml, firstName: ctx.firstName, unsubscribeUrl: null }),
    text: textBlock([
      `Hi ${ctx.firstName}, we've cancelled your CV Prime subscription as requested.`,
      ctx.accessEndsOn ? `You keep full access until ${ctx.accessEndsOn}.` : 'Access continues until the end of the current period.',
      'Your resumes and data stay safe on the free plan.',
      '',
      `Reactivate any time: ${appUrl('/pricing')}`,
    ]),
  };
}

// --- Newsletter opt-in welcome -------------------------------------------
export function newsletterWelcomeEmail(ctx: TemplateContext): RenderedEmail {
  const heading = 'You’re in — welcome to the CV Prime newsletter';
  const bodyHtml = `
    <p>Thanks for subscribing, ${esc(ctx.firstName)}. Once a week we’ll send one genuinely useful thing:</p>
    ${progressCard('What to expect', 'A 1-minute resume fix, an ATS myth busted, or a stronger way to write a bullet point. Practical, never spammy.')}
    <p>Want to get a head start? Score your current resume now:</p>
    ${primaryButton('Check My ATS Score', appUrl('/dashboard'))}`;
  return {
    emailType: 'newsletter_welcome',
    category: 'transactional',
    templateVersion: 'newsletter-welcome-v1',
    subject: 'You’re subscribed to CV Prime career tips',
    html: layout({ preheader: 'One useful job-search tip a week. No spam.', heading, bodyHtml, firstName: ctx.firstName, unsubscribeUrl: ctx.unsubscribeUrl ?? null }),
    text: textBlock([
      `Thanks for subscribing, ${ctx.firstName}.`,
      'Each week we send one useful thing: a 1-minute resume fix, an ATS myth busted, or a stronger bullet point.',
      '',
      `Score your resume: ${appUrl('/dashboard')}`,
    ]),
  };
}
