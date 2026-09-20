import '@testing-library/jest-dom';
import { randomUUID } from 'crypto';
import { TextDecoder, TextEncoder } from 'util';

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

// jsdom does not expose TextEncoder/TextDecoder, which every real browser and
// Node do. react-dom/server reaches for TextEncoder at import time, so without
// this any test that server-renders a component to check what the browser
// paints before hydration fails to even load.
if (typeof globalThis.TextEncoder !== 'function') {
  Object.assign(globalThis, { TextEncoder, TextDecoder });
}

// jsdom does not expose structuredClone even though every real browser and
// Node itself do. App code (lib/cv.ts setNestedValue, used by the CV store's
// updateField) calls it directly, so without this every test that touches
// updateField crashes with "structuredClone is not defined" in jsdom only.
if (typeof globalThis.structuredClone !== 'function') {
  globalThis.structuredClone = (value: unknown) => JSON.parse(JSON.stringify(value));
}
