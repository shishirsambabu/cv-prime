import { NextResponse } from 'next/server';
import type { z } from 'zod';
import { callOpenRouter, parseJsonFromModel } from '@/lib/openrouter';
import { rateLimit } from '@/lib/rateLimit';
import { createClient } from '@/lib/supabase/server';
import { getUserOpenRouterKey } from '@/lib/getUserOpenRouterKey';

interface AiToolConfig<I, O> {
  /** Rate-limit bucket name, unique per tool. */
  name: string;
  limitPerHour?: number;
  inputSchema: z.ZodType<I>;
  resultSchema: z.ZodType<O>;
  system: string;
  buildUser: (input: I) => string;
  maxTokens?: number;
  temperature?: number;
}

/**
 * Factory for the standalone BYOK AI tools. Every tool shares the same
 * contract: require auth, rate-limit per user, validate input, read the
 * user's encrypted OpenRouter key, call the model in JSON mode, and
 * validate the JSON result. Tokens are billed to the user's key (₹0 to us).
 *
 * Error codes returned to the client: 401 Unauthorized / KEY_INVALID,
 * 429 RATE_LIMITED, 400 NO_KEY / validation, 500 AI_FAILED.
 */
export function createAiToolRoute<I, O>(config: AiToolConfig<I, O>) {
  return async function POST(req: Request): Promise<NextResponse> {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const limited = await rateLimit(user.id, config.name, config.limitPerHour ?? 20, '1h');
    if (limited) {
      return NextResponse.json({ error: 'RATE_LIMITED' }, { status: 429 });
    }

    const body = config.inputSchema.safeParse(await req.json().catch(() => ({})));
    if (!body.success) {
      return NextResponse.json({ error: body.error.flatten() }, { status: 400 });
    }

    const apiKey = await getUserOpenRouterKey(user.id);
    if (!apiKey) {
      return NextResponse.json({ error: 'NO_KEY' }, { status: 400 });
    }

    try {
      const content = await callOpenRouter({
        apiKey,
        jsonMode: true,
        maxTokens: config.maxTokens ?? 900,
        temperature: config.temperature ?? 0.3,
        messages: [
          { role: 'system', content: config.system },
          { role: 'user', content: config.buildUser(body.data) },
        ],
      });
      const parsed = config.resultSchema.parse(parseJsonFromModel(content));
      return NextResponse.json(parsed);
    } catch (error) {
      if (error instanceof Error && error.message === 'KEY_INVALID') {
        return NextResponse.json({ error: 'KEY_INVALID' }, { status: 401 });
      }

      return NextResponse.json(
        { error: 'AI_FAILED', message: 'The AI request failed. Please try again.' },
        { status: 500 }
      );
    }
  };
}
