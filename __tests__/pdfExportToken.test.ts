/**
 * @jest-environment node
 */

import {
  createPdfExportAccessToken,
  verifyPdfExportAccessToken,
} from '@/lib/pdfExportToken';

describe('PDF export access tokens', () => {
  const originalSecret = process.env.ENCRYPTION_SECRET;
  const userId = '11111111-1111-4111-8111-111111111111';
  const cvId = '22222222-2222-4222-8222-222222222222';

  beforeEach(() => {
    process.env.ENCRYPTION_SECRET =
      '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';
  });

  afterEach(() => {
    process.env.ENCRYPTION_SECRET = originalSecret;
  });

  it('accepts a valid token only for the intended user and CV', () => {
    const now = 1_000_000;
    const token = createPdfExportAccessToken({ userId, cvId, now });

    expect(verifyPdfExportAccessToken({ token, userId, cvId, now: now + 1 })).toBe(true);
    expect(
      verifyPdfExportAccessToken({
        token,
        userId,
        cvId: '33333333-3333-4333-8333-333333333333',
        now: now + 1,
      }),
    ).toBe(false);
  });

  it('rejects tampered and expired tokens', () => {
    const now = 1_000_000;
    const token = createPdfExportAccessToken({ userId, cvId, now });
    const tampered = `${token.slice(0, -1)}${token.endsWith('a') ? 'b' : 'a'}`;

    expect(verifyPdfExportAccessToken({ token: tampered, userId, cvId, now: now + 1 })).toBe(
      false,
    );
    expect(
      verifyPdfExportAccessToken({ token, userId, cvId, now: now + 10 * 60 * 1000 }),
    ).toBe(false);
  });
});
