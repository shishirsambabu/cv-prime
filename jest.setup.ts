import '@testing-library/jest-dom';
import { randomUUID } from 'crypto';

// jsdom's Crypto implementation does not include randomUUID, but app code
// (lib/cv.ts createId, and several components) calls crypto.randomUUID()
// directly. Without this, any test that touches CV data factories throws
// "crypto.randomUUID is not a function" in jsdom, not in real browsers.
if (typeof globalThis.crypto?.randomUUID !== 'function') {
  Object.defineProperty(globalThis.crypto, 'randomUUID', {
    value: randomUUID,
    configurable: true,
  });
}

// jsdom does not expose structuredClone even though every real browser and
// Node itself do. App code (lib/cv.ts setNestedValue, used by the CV store's
// updateField) calls it directly, so without this every test that touches
// updateField crashes with "structuredClone is not defined" in jsdom only.
if (typeof globalThis.structuredClone !== 'function') {
  globalThis.structuredClone = (value: unknown) => JSON.parse(JSON.stringify(value));
}
