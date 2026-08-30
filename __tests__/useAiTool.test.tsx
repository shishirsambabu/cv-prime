import { act, renderHook, waitFor } from '@testing-library/react';

// The `@/` alias isn't resolvable from jest.mock in this setup, so mock the
// underlying analytics SDK instead. That also exercises the real
// captureClientEvent path (consent gate + attribution merge) rather than
// stubbing it out.
jest.mock('posthog-js', () => ({
  __esModule: true,
  default: { init: jest.fn(), capture: jest.fn() },
}));

import posthog from 'posthog-js';
import { useAiTool } from '@/components/tools/ai/useAiTool';

const mockCapture = posthog.capture as jest.Mock;

describe('useAiTool funnel instrumentation', () => {
  const originalFetch = global.fetch;

  function response(status: number, payload: unknown): Response {
    return { ok: status >= 200 && status < 300, status, json: async () => payload } as Response;
  }

  beforeEach(() => {
    mockCapture.mockClear();
    window.localStorage.clear();
    // Analytics only fire for a visitor who accepted the consent banner.
    window.localStorage.setItem('cv-prime-analytics-consent', 'accepted');
    process.env.NEXT_PUBLIC_POSTHOG_KEY = 'test-key';
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('reports a started and completed run with the tool name', async () => {
    global.fetch = jest.fn().mockResolvedValue(response(200, { result: 'ok' })) as typeof fetch;
    const { result } = renderHook(() => useAiTool<{ result: string }>('/api/tools/jd-decoder'));

    await act(async () => {
      await result.current.run({ jd: 'text' });
    });

    expect(mockCapture).toHaveBeenCalledWith('tool_run_started', { tool: 'jd-decoder' });
    expect(mockCapture).toHaveBeenCalledWith(
      'tool_run_completed',
      expect.objectContaining({ tool: 'jd-decoder' })
    );
    await waitFor(() => expect(result.current.data).toEqual({ result: 'ok' }));
  });

  it.each([
    [401, {}, 'AUTH'],
    [429, {}, 'RATE_LIMITED'],
    [400, { error: 'NO_KEY' }, 'NO_KEY'],
    [400, { error: 'KEY_INVALID' }, 'KEY_INVALID'],
    [500, {}, 'ERROR'],
  ])('reports the gate that stopped a %s run', async (status, payload, gate) => {
    global.fetch = jest.fn().mockResolvedValue(response(status, payload)) as typeof fetch;
    const { result } = renderHook(() => useAiTool('/api/tools/cv-roast'));

    await act(async () => {
      await result.current.run({});
    });

    expect(result.current.gate).toBe(gate);
    expect(mockCapture).toHaveBeenCalledWith('tool_run_gated', { tool: 'cv-roast', gate });
    // A gated run is not a completed run — that distinction is the whole
    // point of measuring where tool visitors drop out.
    expect(mockCapture).not.toHaveBeenCalledWith('tool_run_completed', expect.anything());
  });

  it('reports a gate when the request throws', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('offline')) as typeof fetch;
    const { result } = renderHook(() => useAiTool('/api/tools/role-fit'));

    await act(async () => {
      await result.current.run({});
    });

    expect(mockCapture).toHaveBeenCalledWith('tool_run_gated', {
      tool: 'role-fit',
      gate: 'ERROR',
    });
  });

  it('attaches first-touch attribution to a completed run', async () => {
    window.localStorage.setItem(
      'cv-prime-attribution',
      JSON.stringify({ landingPath: '/ats-checker', referrerHost: 'www.google.com' })
    );
    global.fetch = jest.fn().mockResolvedValue(response(200, {})) as typeof fetch;
    const { result } = renderHook(() => useAiTool('/api/tools/skills-gap'));

    await act(async () => {
      await result.current.run({});
    });

    expect(mockCapture).toHaveBeenCalledWith(
      'tool_run_completed',
      expect.objectContaining({ attr_landing_path: '/ats-checker' })
    );
    // A started event is not attributed — only outcomes are.
    expect(mockCapture).toHaveBeenCalledWith('tool_run_started', { tool: 'skills-gap' });
  });
});
