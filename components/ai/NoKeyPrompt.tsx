import Link from 'next/link';
import { KeyRound } from 'lucide-react';

interface NoKeyPromptProps {
  message?: string;
}

export function NoKeyPrompt({
  message = 'Connect your OpenRouter key to unlock AI features.',
}: NoKeyPromptProps): JSX.Element {
  return (
    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-950">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-800">
          <KeyRound className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-base font-bold">Connect your OpenRouter key</h3>
          <p className="mt-1 text-sm leading-6 text-cyan-900">{message}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="/settings"
              className="rounded-full bg-cyan-900 px-3 py-1.5 text-xs font-bold text-white"
            >
              Open settings
            </Link>
            <a
              href="https://openrouter.ai/settings/keys"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-300 bg-white px-3 py-1.5 text-xs font-bold text-cyan-900"
            >
              Get an OpenRouter key
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
