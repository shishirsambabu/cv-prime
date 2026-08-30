'use client';

import posthog from 'posthog-js';

import { attributionProperties } from '@/lib/growth/attribution';

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
  | 'ltd_checkout_started'
  | 'ltd_checkout_completed'
  | 'page_viewed'
  // Free-tool funnel: the ~150 SEO pages and 19 free tools are the top of
  // the acquisition funnel, so tool usage has to be measurable end to end.
  | 'tool_run_started'
  | 'tool_run_completed'
  | 'tool_run_gated'
  | 'cta_clicked'
  | 'cv_completed';

export type AnalyticsProperties = Record<string, string | number | boolean | null>;

/**
 * Events that answer "which acquisition asset produced this outcome?".
 * These carry first-touch attribution so a funnel step can be traced back
 * to the landing page that earned the visitor.
 */
const ATTRIBUTED_EVENTS: ReadonlySet<AnalyticsEvent> = new Set<AnalyticsEvent>([
  'user_signed_up',
  'cv_created',
  'cv_completed',
  'pdf_exported',
  'user_upgraded',
  'ltd_checkout_completed',
  'tool_run_completed',
]);

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

  posthog.capture(
    event,
    ATTRIBUTED_EVENTS.has(event) ? { ...attributionProperties(), ...properties } : properties
  );
}
