import { cloneTitle } from '@/lib/cv';

describe('cloneTitle', () => {
  it('appends " copy" to a short title', () => {
    expect(cloneTitle('Product Manager CV')).toBe('Product Manager CV copy');
  });

  // Regression: an 80-character title produced an 85-character copy, longer
  // than create and rename accept.
  it('never exceeds the 80-character title limit', () => {
    const title = cloneTitle('A'.repeat(80));
    expect(title.length).toBeLessThanOrEqual(80);
    expect(title.endsWith(' copy')).toBe(true);
  });

  it('falls back to a name for an empty or missing title', () => {
    expect(cloneTitle('')).toBe('Untitled CV copy');
    expect(cloneTitle(null)).toBe('Untitled CV copy');
  });
});
