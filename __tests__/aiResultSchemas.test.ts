import { z } from 'zod';
import { cappedArray, lenientEnum, lenientScore } from '@/lib/aiResultSchemas';
import { MAX_REWRITE_BULLETS, bulletLines, firstBullets } from '@/lib/bulletInput';

// A usable model answer was rejected as AI_FAILED (after the user's key had
// paid for it) whenever it was slightly off-spec: a score of 74.5, one item
// too many, "High" for "high".
describe('lenientScore', () => {
  it.each([
    [74.5, 75],
    ['74', 74],
    ['81%', 81],
    [140, 100],
    [-3, 0],
  ])('repairs %p to %p', (input, expected) => {
    expect(lenientScore.parse(input)).toBe(expected);
  });

  it('still rejects something that is not a number', () => {
    expect(lenientScore.safeParse('strong').success).toBe(false);
    expect(lenientScore.safeParse(null).success).toBe(false);
  });
});

describe('cappedArray', () => {
  it('keeps the first items instead of failing on one too many', () => {
    expect(cappedArray(z.string(), 2).parse(['a', 'b', 'c'])).toEqual(['a', 'b']);
  });
});

describe('lenientEnum', () => {
  const priority = lenientEnum(['high', 'medium', 'low'], 'medium');

  it('accepts any casing and falls back on an unknown value', () => {
    expect(priority.parse('High')).toBe('high');
    expect(priority.parse(' LOW ')).toBe('low');
    expect(priority.parse('critical')).toBe('medium');
  });
});

describe('bullet rewriter input', () => {
  it('only sends the first batch of non-empty lines to the model', () => {
    const pasted = Array.from({ length: 20 }, (_, i) => `Bullet ${i + 1}`).join('\n\n');
    expect(bulletLines(pasted)).toHaveLength(20);
    expect(firstBullets(pasted)).toHaveLength(MAX_REWRITE_BULLETS);
    expect(firstBullets(pasted)[0]).toBe('Bullet 1');
  });
});
