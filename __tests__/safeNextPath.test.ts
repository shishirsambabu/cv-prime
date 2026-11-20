import { getSafeNextPath } from '@/lib/auth';

// Regression: `next` was checked for a leading `//` only BEFORE URL parsing.
// Parsing removes dot segments, so these all came back as `//evil.example...`,
// and /login?next=... redirected a signed-in user to another site.
describe('getSafeNextPath', () => {
  it.each([
    '/.//evil.example/phish',
    '/%2e//evil.example',
    '/x/..//evil.example',
    '/./\\evil.example',
    '/\\evil.example',
    '//evil.example',
    'https://evil.example',
    'evil.example',
    '',
  ])('falls back for %j', (value) => {
    expect(getSafeNextPath(value)).toBe('/dashboard');
  });

  it.each([null, undefined])('falls back for %j', (value) => {
    expect(getSafeNextPath(value)).toBe('/dashboard');
  });

  it('keeps ordinary in-app paths, with their query and hash', () => {
    expect(getSafeNextPath('/ai-cv')).toBe('/ai-cv');
    expect(getSafeNextPath('/editor/abc?tab=ats#score')).toBe('/editor/abc?tab=ats#score');
    expect(getSafeNextPath('/settings/../dashboard')).toBe('/dashboard');
  });

  it('never returns a value a browser would read as another origin', () => {
    for (const value of ['/.//a.example', '/a/..//b.example?x=1', '/..//c.example#h']) {
      const result = getSafeNextPath(value);
      expect(new URL(result, 'https://cv-prime.in').origin).toBe('https://cv-prime.in');
    }
  });
});
