import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const scannedRoots = [
  'app/(marketing)',
  'components/marketing',
  'public/llm.txt',
  'public/llms.txt',
];

function collectFiles(path: string): string[] {
  const absolute = join(process.cwd(), path);
  const stat = statSync(absolute);

  if (stat.isFile()) {
    return [absolute];
  }

  return readdirSync(absolute).flatMap((entry) => collectFiles(join(path, entry)));
}

describe('public payment provider references', () => {
  it('does not expose provider names in public-facing copy', () => {
    const offenders = scannedRoots
      .flatMap(collectFiles)
      .filter((file) => /\.(tsx|ts|txt|md|json)$/.test(file))
      .filter((file) => /Razorpay|Cashfree|\/api\/cashfree|webhooks\/cashfree/i.test(readFileSync(file, 'utf8')));

    expect(offenders).toEqual([]);
  });
});

describe('AI-citation file consistency', () => {
  it('keeps llm.txt and llms.txt byte-identical so AI crawlers never see stale/conflicting facts', () => {
    const llmTxt = readFileSync(join(process.cwd(), 'public/llm.txt'), 'utf8');
    const llmsTxt = readFileSync(join(process.cwd(), 'public/llms.txt'), 'utf8');

    expect(llmsTxt).toEqual(llmTxt);
  });
});
