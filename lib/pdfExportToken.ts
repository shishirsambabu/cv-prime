import { createHmac, timingSafeEqual } from 'node:crypto';
import { z } from 'zod';

const TOKEN_VERSION = 'v1';
const TOKEN_TTL_MS = 10 * 60 * 1000;

const payloadSchema = z.object({
  userId: z.string().uuid(),
  cvId: z.string().uuid(),
  expiresAt: z.number().int().positive(),
});

interface PdfExportTokenInput {
  userId: string;
  cvId: string;
  now?: number;
}

function getSigningSecret(): Buffer {
  const secret = process.env.ENCRYPTION_SECRET;

  if (!secret || !/^[0-9a-fA-F]{64}$/.test(secret)) {
    throw new Error('ENCRYPTION_SECRET must be 64 hex characters');
  }

  return Buffer.from(secret, 'hex');
}

function sign(value: string): string {
  return createHmac('sha256', getSigningSecret()).update(value).digest('base64url');
}

export function createPdfExportAccessToken({
  userId,
  cvId,
  now = Date.now(),
}: PdfExportTokenInput): string {
  const payload = Buffer.from(
    JSON.stringify({ userId, cvId, expiresAt: now + TOKEN_TTL_MS }),
    'utf8',
  ).toString('base64url');
  const unsignedToken = `${TOKEN_VERSION}.${payload}`;

  return `${unsignedToken}.${sign(unsignedToken)}`;
}

export function verifyPdfExportAccessToken({
  token,
  userId,
  cvId,
  now = Date.now(),
}: PdfExportTokenInput & { token: string }): boolean {
  const [version, encodedPayload, providedSignature, ...extra] = token.split('.');

  if (
    version !== TOKEN_VERSION ||
    !encodedPayload ||
    !providedSignature ||
    extra.length > 0
  ) {
    return false;
  }

  const unsignedToken = `${version}.${encodedPayload}`;
  const expectedSignature = Buffer.from(sign(unsignedToken), 'base64url');
  const actualSignature = Buffer.from(providedSignature, 'base64url');

  if (
    expectedSignature.length !== actualSignature.length ||
    !timingSafeEqual(expectedSignature, actualSignature)
  ) {
    return false;
  }

  try {
    const payload = payloadSchema.parse(
      JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8')) as unknown,
    );

    return payload.userId === userId && payload.cvId === cvId && payload.expiresAt > now;
  } catch {
    return false;
  }
}

export function isStatelessPdfExportToken(token: string): boolean {
  return token.startsWith(`${TOKEN_VERSION}.`);
}
