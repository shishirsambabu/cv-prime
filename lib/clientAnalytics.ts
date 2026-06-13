import posthog from 'posthog-js';

let initialized = false;

export type AnalyticsEvent =
  | 'user_signed_up'
  | 'cv_created'
  | 'ats_score_checked'
  | 'ats_fix_applied'
  | 'ai_bullet_rewritten'
  | 'cover_letter_generated'
  | 'jd_tailor_used'
  | 'pdf_exported'
  | 'upgrade_modal_opened'
  | 'user_upgraded'
  | 'page_viewed';

export type AnalyticsProperties = Record<string, string | number | boolean | null>;

const consentKey = 'cv-prime-analytics-consent';

function analyticsEnabled(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) {
    return false;
  }

  return window.localStorage.getItem(consentKey) === 'granted';
}

export function initAnalytics(): void {
  if (initialized || !analyticsEnabled()) {
    return;
  }

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) {
    return;
  }

  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://app.posthog.com',
    capture_pageview: false,
    persistence: 'localStorage',
  });
  initialized = true;
}

export function grantAnalyticsConsent(): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(consentKey, 'granted');
  initAnalytics();
}

export function revokeAnalyticsConsent(): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(consentKey, 'denied');

  if (initialized) {
    posthog.opt_out_capturing();
  }
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(consentKey) === 'granted';
}

export function captureClientEvent(
  event: AnalyticsEvent,
  properties?: AnalyticsProperties
): void {
  if (!analyticsEnabled() || !initialized) {
    return;
  }

  posthog.capture(event, properties);
}
