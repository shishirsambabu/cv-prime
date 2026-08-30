'use client';

/**
 * First-touch acquisition attribution.
 *
 * The signup event records how someone authenticated ('email' | 'google'),
 * which says nothing about which of the ~150 SEO pages earned the signup.
 * This module stamps the first landing page, referrer and UTM parameters
 * into localStorage on the visitor's first page view and replays them onto
 * later funnel events, so page -> signup -> CV -> export -> revenue can be
 * attributed to the acquisition asset that started it.
 *
 * First-touch (not last-touch) is deliberate: the question the growth
 * backlog asks is which asset acquires users, and later internal navigation
 * would otherwise overwrite that with an internal page.
 */

const STORAGE_KEY = 'cv-prime-attribution';

export interface Attribution {
  /** Pathname of the first CV Prime page this visitor landed on. */
  landingPath: string;
  /** External referrer host, or 'direct' when there was none. */
  referrerHost: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  /** ISO date (not timestamp) — enough to cohort by, no extra precision. */
  firstSeenDate: string;
}

/** Flattened form that can ride along on a PostHog event. */
export type AttributionProperties = Record<string, string | null>;

function readStored(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const candidate = parsed as Partial<Attribution>;
    if (typeof candidate.landingPath !== 'string') return null;
    return {
      landingPath: candidate.landingPath,
      referrerHost: typeof candidate.referrerHost === 'string' ? candidate.referrerHost : 'direct',
      utmSource: typeof candidate.utmSource === 'string' ? candidate.utmSource : null,
      utmMedium: typeof candidate.utmMedium === 'string' ? candidate.utmMedium : null,
      utmCampaign: typeof candidate.utmCampaign === 'string' ? candidate.utmCampaign : null,
      firstSeenDate:
        typeof candidate.firstSeenDate === 'string' ? candidate.firstSeenDate : 'unknown',
    };
  } catch {
    // Private mode or corrupted value — behave as if nothing was stored.
    return null;
  }
}

function referrerHost(): string {
  const ref = document.referrer;
  if (!ref) return 'direct';
  try {
    const host = new URL(ref).hostname;
    // Internal navigation is not an acquisition source.
    return host === window.location.hostname ? 'direct' : host;
  } catch {
    return 'direct';
  }
}

/**
 * Record first-touch attribution if this visitor has none yet, and return
 * whatever is now stored. Safe to call on every page view — it only writes
 * once per visitor.
 */
export function captureAttribution(pathname: string): Attribution | null {
  if (typeof window === 'undefined') return null;

  const existing = readStored();
  if (existing) return existing;

  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {
    landingPath: pathname,
    referrerHost: referrerHost(),
    utmSource: params.get('utm_source'),
    utmMedium: params.get('utm_medium'),
    utmCampaign: params.get('utm_campaign'),
    firstSeenDate: new Date().toISOString().slice(0, 10),
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Storage unavailable — attribution is best-effort, never a hard failure.
  }

  return attribution;
}

/** Stored attribution, or null when this visitor has none. */
export function getAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null;
  return readStored();
}

/** Attribution flattened onto `attr_*` keys for attaching to an event. */
export function attributionProperties(): AttributionProperties {
  const attribution = getAttribution();
  if (!attribution) return {};
  return {
    attr_landing_path: attribution.landingPath,
    attr_referrer_host: attribution.referrerHost,
    attr_utm_source: attribution.utmSource,
    attr_utm_medium: attribution.utmMedium,
    attr_utm_campaign: attribution.utmCampaign,
    attr_first_seen_date: attribution.firstSeenDate,
  };
}
