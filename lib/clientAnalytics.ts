'use client';

import posthog from 'posthog-js';

export type AnalyticsEvent =
  | 'user_signed_up'
  | 'cv_created'
  | 'ats_score_checked'
  | 'ai_bullet_rewritten'
  | 'cover_letter_generated'
  | 'jd_tailor_used'
  | 'pdf_exported'
  | 'upgrade_modal_opened'
  | 'user_upgraded'
  | 'page_viewed';

export type AnalyticsProperties = Record<string, string | number | boolean | null>;

const consentKey = 'cv-prime-analytics-consent';
let analyticsStarted = false;

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(consentKey) === 'accepted';
}

export function setAnalyticsConsent(value: 'accepted' | 'declined'): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(consentKey, value);
}

export function getAnalyticsConsent(): 'accepted' | 'declined' | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = window.localStorage.getItem(consentKey);
  return value === 'accepted' || value === 'declined' ? value : null;
}

export function initAnalytics(): void {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) {
    return;
  }

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key || analyticsStarted) {
    return;
  }

  posthog.init(key, {
    api_host: 'https://app.posthog.com',
    capture_pageview: false,
    persistence: 'localStorage+cookie',
  });
  analyticsStarted = true;
}

export function captureClientEvent(
  event: AnalyticsEvent,
  properties: AnalyticsProperties = {}
): void {
  if (typeof window === 'undefined' || !hasAnalyticsConsent()) {
    return;
  }

  initAnalytics();

  if (!analyticsStarted) {
    return;
  }

  posthog.capture(event, properties);
}
