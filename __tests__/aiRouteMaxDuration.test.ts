import { readFileSync } from 'fs';
import { join } from 'path';

// Routes that await a slow model call must opt out of Vercel's short default
// function timeout, otherwise long generations die mid-flight as opaque 504s.
const SLOW_ROUTES = ['ai-generate-cv', 'ats-score', 'ats-fix', 'jd-tailor', 'ai-suggest', 'cover-letter'];

describe('slow AI routes declare maxDuration', () => {
  it.each(SLOW_ROUTES)('%s exports maxDuration >= 60', (route) => {
    const source = readFileSync(join(process.cwd(), 'app/api', route, 'route.ts'), 'utf8');
    const match = source.match(/export const maxDuration = (\d+);/);
    expect(match).not.toBeNull();
    expect(Number(match?.[1])).toBeGreaterThanOrEqual(60);
  });
});
