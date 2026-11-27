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
  /** Total time allowed for the call, including its one retry (default: 28 000 ms). */
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
    // 402 = the key is valid but its account is out of credits. Retrying can
    // never succeed, so it must surface as a key problem, not "try again".
    response.status === 402 ||
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

const KEY_VALIDATION_TIMEOUT_MS = 10_000;

/**
 * Resolves true/false only when OpenRouter actually judged the key (2xx, or
 * 401/403). Anything else - a 429, a 5xx, a timeout, a network error - throws,
 * which the save route reports as VALIDATION_UNAVAILABLE ("try again") rather
 * than telling the user a working key was rejected.
 */
export async function validateOpenRouterKey(apiKey: string): Promise<boolean> {
  const response = await fetch(`${OPENROUTER_BASE_URL}/key`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    signal: AbortSignal.timeout(KEY_VALIDATION_TIMEOUT_MS),
  });

  if (response.ok) return true;
  if (response.status === 401 || response.status === 403) return false;
  throw new Error(`OpenRouter key check unavailable (${response.status})`);
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

/** Wait before the single retry of a 5xx answer. */
const RETRY_DELAY_MS = 1_000;
/** A retry with less time than this left cannot produce an answer; fail fast instead. */
const MIN_RETRY_BUDGET_MS = 5_000;

/**
 * One completion request, aborted after `budgetMs`. The timer stays armed
 * until the body has been read: OpenRouter answers non-streaming requests
 * with headers (and keep-alive whitespace) straight away and only then
 * generates, so a timer cleared when `fetch` resolves bounded nothing and a
 * slow model ran on until the platform killed the function.
 */
async function attemptCompletion(
  options: OpenRouterOptions,
  budgetMs: number,
  allowRetry: boolean
): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), budgetMs);

  try {
    const response = await fetchCompletion(options, controller.signal);

    if (!response.ok) {
      const errMsg = await readOpenRouterError(response);
      // Only retry on transient server errors, never on auth / quota failures.
      if (allowRetry && response.status >= 500 && errMsg !== 'KEY_INVALID') {
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
  } finally {
    clearTimeout(timer);
  }
}

/**
 * `timeoutMs` is the budget for the whole call, retry included. Routes set it
 * just under their `maxDuration` (60 s); a per-attempt timeout let a slow
 * first attempt plus a retry run to ~2x that, so Vercel killed the function
 * and the browser got a bare 504 instead of the route's AI_FAILED answer.
 */
export async function callOpenRouter(options: OpenRouterOptions): Promise<string> {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const deadline = Date.now() + timeoutMs;

  try {
    return await attemptCompletion(options, timeoutMs, true);
  } catch (err) {
    if (!(err instanceof RetryableError)) throw err;

    // Single retry after 1 s on 5xx transient errors, inside what is left.
    await delay(RETRY_DELAY_MS);
    const remaining = deadline - Date.now();
    if (remaining < MIN_RETRY_BUDGET_MS) {
      throw new Error(err.message);
    }
    return attemptCompletion(options, remaining, false);
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
