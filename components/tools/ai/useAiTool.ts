'use client';

import { useState } from 'react';

export type AiGateCode = 'AUTH' | 'NO_KEY' | 'KEY_INVALID' | 'RATE_LIMITED' | 'ERROR';

interface AiToolState<T> {
  run: (body: unknown) => Promise<void>;
  reset: () => void;
  loading: boolean;
  gate: AiGateCode | null;
  data: T | null;
}

/**
 * Client hook for the gated BYOK AI tools. POSTs the body to the tool's
 * endpoint and maps the response into a result or a gate code that the
 * shared <AiGate> renders (sign in, connect key, rate limited, etc.).
 */
export function useAiTool<T>(endpoint: string): AiToolState<T> {
  const [loading, setLoading] = useState(false);
  const [gate, setGate] = useState<AiGateCode | null>(null);
  const [data, setData] = useState<T | null>(null);

  async function run(body: unknown): Promise<void> {
    setLoading(true);
    setGate(null);
    setData(null);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setData((await res.json()) as T);
        return;
      }

      const payload = (await res.json().catch(() => ({}))) as { error?: string };
      if (res.status === 429) {
        setGate('RATE_LIMITED');
      } else if (payload.error === 'KEY_INVALID') {
        setGate('KEY_INVALID');
      } else if (res.status === 401) {
        setGate('AUTH');
      } else if (payload.error === 'NO_KEY') {
        setGate('NO_KEY');
      } else {
        setGate('ERROR');
      }
    } catch {
      setGate('ERROR');
    } finally {
      setLoading(false);
    }
  }

  return {
    run,
    reset: () => {
      setGate(null);
      setData(null);
    },
    loading,
    gate,
    data,
  };
}
