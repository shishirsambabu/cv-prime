interface OpenRouterMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenRouterOptions {
  apiKey: string;
  model?: string;
  messages: OpenRouterMessage[];
  maxTokens?: number;
  jsonMode?: boolean;
  /** Controls output randomness. Use 0.1–0.2 for scoring/classification, 0.7 for generation. */
  temperature?: number;
  /** Abort the request after this many ms (default: 28 000). */
  timeoutMs?: number;
}

interface OpenRouterErrorPayload {
  error?: {
    code?: string;
    message?: string;
    type?: string;
  };
}

interface OpenRouterChatPayload {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
}

const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
const DEFAULT_MODEL = 'openai/gpt-4o-mini';
const DEFAULT_TIMEOUT_MS = 28_000;

function openRouterHeaders(apiKey: string): HeadersInit {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
    'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3002',
    'X-OpenRouter-Title': 'CV Prime',
  };
}

async function readOpenRouterError(response: Response): Promise<string> {
  const payload = (await response.json().catch(() => ({}))) as OpenRouterErrorPayload;
  const message = payload.error?.message ?? `OpenRouter error ${response.status}`;

  if (
    response.status === 401 ||
    response.status === 403 ||
    payload.error?.code === 'invalid_api_key' ||
    payload.error?.type === 'insufficient_quota'
  ) {
    return 'KEY_INVALID';
  }

  return message;
}

/** Strip ` ```json ` fences that some models emit even when jsonMode is on. */
export function parseJsonFromModel(content: string): unknown {
  const cleaned = content
    .trim()
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
  return JSON.parse(cleaned) as unknown;
}

export async function validateOpenRouterKey(apiKey: string): Promise<boolean> {
  const response = await fetch(`${OPENROUTER_BASE_URL}/key`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return response.ok;
}

async function fetchCompletion(
  options: OpenRouterOptions,
  signal: AbortSignal
): Promise<Response> {
  return fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: openRouterHeaders(options.apiKey),
    signal,
    body: JSON.stringify({
      model: options.model ?? DEFAULT_MODEL,
      max_tokens: options.maxTokens ?? 1000,
      temperature: options.temperature,
      response_format: options.jsonMode ? { type: 'json_object' } : undefined,
      messages: options.messages,
    }),
  });
}

export async function callOpenRouter(options: OpenRouterOptions): Promise<string> {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  const run = async (): Promise<string> => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    let response: Response;
    try {
      response = await fetchCompletion(options, controller.signal);
    } finally {
      clearTimeout(timer);
    }

    if (!response.ok) {
      const errMsg = await readOpenRouterError(response);
      // Only retry on transient server errors, never on auth / quota failures.
      if (response.status >= 500 && errMsg !== 'KEY_INVALID') {
        throw new RetryableError(errMsg);
      }
      throw new Error(errMsg);
    }

    const payload = (await response.json()) as OpenRouterChatPayload;
    const content = payload.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('OpenRouter returned an empty response');
    }

    return content;
  };

  try {
    return await run();
  } catch (err) {
    if (err instanceof RetryableError) {
      // Single retry after 1 s on 5xx transient errors.
      await delay(1000);
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      let response: Response;
      try {
        response = await fetchCompletion(options, controller.signal);
      } finally {
        clearTimeout(timer);
      }
      if (!response.ok) {
        throw new Error(await readOpenRouterError(response));
      }
      const payload = (await response.json()) as OpenRouterChatPayload;
      const content = payload.choices?.[0]?.message?.content;
      if (!content) {
        throw new Error('OpenRouter returned an empty response');
      }
      return content;
    }
    throw err;
  }
}

class RetryableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RetryableError';
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
