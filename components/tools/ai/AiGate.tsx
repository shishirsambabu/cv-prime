'use client';

import Link from 'next/link';
import { ArrowRight, KeyRound, LogIn, RefreshCcw, ShieldCheck } from 'lucide-react';
import type { AiGateCode } from '@/components/tools/ai/useAiTool';

/**
 * Renders the right call-to-action when a gated AI tool can't run yet:
 * not signed in, no AI key connected, an invalid key, a rate limit, or a
 * generic failure. Styled for the dark tool surfaces.
 */
export function AiGate({ code, toolPath }: { code: AiGateCode; toolPath: string }): JSX.Element {
  const loginHref = `/login?next=${encodeURIComponent(toolPath)}`;
  const signupHref = `/signup?next=${encodeURIComponent(toolPath)}`;
  const keyHref = '/settings';

  if (code === 'AUTH') {
    return (
      <Shell
        icon={<LogIn className="h-5 w-5" />}
        title="Sign in to run this AI tool"
        body="This tool runs on your own AI key, so it stays free for you and costs us nothing. Create a free account (or sign in) and connect your key once."
      >
        <Link href={signupHref} className="group inline-flex h-11 items-center gap-2 rounded-pill bg-gradient-to-r from-brand to-cyan-500 px-5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5">
          Create free account
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href={loginHref} className="inline-flex h-11 items-center rounded-pill border border-white/15 bg-white/[0.06] px-5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/[0.12]">
          Sign in
        </Link>
      </Shell>
    );
  }

  if (code === 'NO_KEY') {
    return (
      <Shell
        icon={<KeyRound className="h-5 w-5" />}
        title="Connect your AI key to run this"
        body="Paste a free OpenRouter API key in settings. It's encrypted, used only for your requests, and you pay only your own (tiny) token cost — usually a few paise per run."
      >
        <Link href={keyHref} className="group inline-flex h-11 items-center gap-2 rounded-pill bg-gradient-to-r from-brand to-cyan-500 px-5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5">
          Connect your AI key
          <ArrowRight className="h-4 w-4" />
        </Link>
        <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" /> Encrypted · never shown in the browser
        </span>
      </Shell>
    );
  }

  if (code === 'KEY_INVALID') {
    return (
      <Shell
        icon={<RefreshCcw className="h-5 w-5" />}
        title="Your AI key was rejected"
        body="OpenRouter didn't accept the saved key — it may have been revoked or run out of credit. Update it in settings and try again."
      >
        <Link href={keyHref} className="group inline-flex h-11 items-center gap-2 rounded-pill bg-gradient-to-r from-brand to-cyan-500 px-5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5">
          Update your key
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Shell>
    );
  }

  if (code === 'RATE_LIMITED') {
    return (
      <Shell
        icon={<RefreshCcw className="h-5 w-5" />}
        title="You've hit the hourly limit"
        body="To keep things fair this tool is capped per hour. Give it a little while and try again."
      />
    );
  }

  return (
    <Shell
      icon={<RefreshCcw className="h-5 w-5" />}
      title="Something went wrong"
      body="The AI request didn't complete. Please check your inputs and try again."
    />
  );
}

function Shell({
  icon,
  title,
  body,
  children,
}: {
  icon: JSX.Element;
  title: string;
  body: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-500/20 text-violet-200 ring-1 ring-white/10">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">{body}</p>
      {children ? <div className="mt-5 flex flex-wrap items-center gap-3">{children}</div> : null}
    </div>
  );
}
