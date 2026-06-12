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

export async function validateOpenRouterKey(apiKey: string): Promise<boolean> {
  const response = await fetch(`${OPENROUTER_BASE_URL}/key`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return response.ok;
}

export async function callOpenRouter(options: OpenRouterOptions): Promise<string> {
  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: openRouterHeaders(options.apiKey),
    body: JSON.stringify({
      model: options.model ?? DEFAULT_MODEL,
      max_tokens: options.maxTokens ?? 1000,
      response_format: options.jsonMode ? { type: 'json_object' } : undefined,
      messages: options.messages,
    }),
  });

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
