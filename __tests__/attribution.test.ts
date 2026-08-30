import {
  attributionProperties,
  captureAttribution,
  getAttribution,
} from '@/lib/growth/attribution';

const KEY = 'cv-prime-attribution';

function setLocation(search: string, hostname = 'cv-prime.in'): void {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: { search, hostname } as Location,
  });
}

function setReferrer(value: string): void {
  Object.defineProperty(document, 'referrer', { configurable: true, value });
}

describe('first-touch attribution', () => {
  beforeEach(() => {
    window.localStorage.clear();
    setLocation('');
    setReferrer('');
  });

  it('stores the landing path on the first visit', () => {
    const attribution = captureAttribution('/ats-checker');

    expect(attribution?.landingPath).toBe('/ats-checker');
    expect(getAttribution()?.landingPath).toBe('/ats-checker');
  });

  it('keeps the first landing page when the visitor navigates on', () => {
    captureAttribution('/ats-checker');
    const later = captureAttribution('/pricing');

    // Last-touch would overwrite here and lose the acquiring page.
    expect(later?.landingPath).toBe('/ats-checker');
  });

  it('records UTM parameters when present', () => {
    setLocation('?utm_source=reddit&utm_medium=social&utm_campaign=ats-thread');
    const attribution = captureAttribution('/tools/ai-cv-roast');

    expect(attribution?.utmSource).toBe('reddit');
    expect(attribution?.utmMedium).toBe('social');
    expect(attribution?.utmCampaign).toBe('ats-thread');
  });

  it('records an external referrer host', () => {
    setReferrer('https://www.google.com/search?q=ats+checker');
    expect(captureAttribution('/ats-checker')?.referrerHost).toBe('www.google.com');
  });

  it('treats internal navigation as direct, not a referral', () => {
    setReferrer('https://cv-prime.in/resume-tips');
    expect(captureAttribution('/ats-checker')?.referrerHost).toBe('direct');
  });

  it('reports direct when there is no referrer', () => {
    expect(captureAttribution('/')?.referrerHost).toBe('direct');
  });

  it('flattens onto attr_ keys for event payloads', () => {
    setReferrer('https://www.google.com/');
    captureAttribution('/fresher-resume');

    expect(attributionProperties()).toMatchObject({
      attr_landing_path: '/fresher-resume',
      attr_referrer_host: 'www.google.com',
      attr_utm_source: null,
    });
  });

  it('returns no properties when the visitor has no stored attribution', () => {
    expect(attributionProperties()).toEqual({});
  });

  it('ignores a corrupted stored value instead of throwing', () => {
    window.localStorage.setItem(KEY, 'not json');

    expect(getAttribution()).toBeNull();
    expect(captureAttribution('/pricing')?.landingPath).toBe('/pricing');
  });
});
