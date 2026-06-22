import Link from 'next/link';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  GaugeCircle,
  Layers3,
  Sparkles,
  Target,
  Wand2,
} from 'lucide-react';
import { CreateCVButton } from '@/components/dashboard/CreateCVButton';
import { CVCard } from '@/components/dashboard/CVCard';
import { createClient } from '@/lib/supabase/server';
import { upgradeToPro } from '@/lib/plan';
import type { TemplateId } from '@/types/cv.types';
import type { Database } from '@/types/database.types';

export const dynamic = 'force-dynamic';

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID ?? '';
const CASHFREE_SECRET = process.env.CASHFREE_SECRET_KEY ?? '';
const CASHFREE_API_VERSION = process.env.CASHFREE_API_VERSION ?? '2023-08-01';
const IS_PROD = (process.env.CASHFREE_ENVIRONMENT ?? 'production').toLowerCase() !== 'sandbox';
const CASHFREE_BASE = IS_PROD ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';
const SUCCESS_PAYMENT_STATUSES = new Set(['SUCCESS', 'PAID', 'CAPTURED', 'COMPLETED']);

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

function asString(value: unknown): string | null {
  if (typeof value === 'string' && value.length > 0) return value;
  if (typeof value === 'number') return String(value);
  return null;
}

function normalizeCustomerId(userId: string): string {
  return userId.replace(/-/g, '').slice(0, 36);
}

function orderBelongsToUser(order: Record<string, unknown>, userId: string): boolean {
  const tags = asRecord(order.order_tags);
  const customer = asRecord(order.customer_details);
  const tagUserId = asString(tags.userId ?? tags.user_id);
  const customerId = asString(customer.customer_id);

  return tagUserId === userId || customerId === normalizeCustomerId(userId);
}

async function fetchBillingJson(path: string): Promise<unknown | null> {
  const res = await fetch(`${CASHFREE_BASE}${path}`, {
    headers: {
      'x-client-id': CASHFREE_APP_ID,
      'x-client-secret': CASHFREE_SECRET,
      'x-api-version': CASHFREE_API_VERSION,
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) return null;
  return res.json().catch(() => null) as Promise<unknown | null>;
}

async function verifyAndUpgrade(orderId: string, userId: string): Promise<boolean> {
  if (!CASHFREE_APP_ID || !CASHFREE_SECRET || !orderId) return false;
  try {
    const order = asRecord(await fetchBillingJson(`/orders/${encodeURIComponent(orderId)}`));
    if (!orderBelongsToUser(order, userId)) return false;

    const orderStatus = asString(order.order_status)?.toUpperCase();
    const paymentsPayload = await fetchBillingJson(`/orders/${encodeURIComponent(orderId)}/payments`);
    const payments = Array.isArray(paymentsPayload) ? paymentsPayload.map(asRecord) : [];
    const hasSuccessfulPayment = payments.some((payment) => {
      const status = asString(payment.payment_status ?? payment.status)?.toUpperCase();
      return status ? SUCCESS_PAYMENT_STATUSES.has(status) : false;
    });

    if (orderStatus === 'PAID' || hasSuccessfulPayment) {
      await upgradeToPro(userId);
      return true;
    }
  } catch {
    // Fail silently; webhook will handle it as fallback.
  }

  return false;
}

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Create, review, clone, share, and manage your CV Prime drafts.',
};

const nextActions = [
  {
    title: 'Create the master CV',
    body: 'Use one strong source CV, then make role-specific versions from it.',
    icon: FileText,
  },
  {
    title: 'Choose the right template',
    body: 'Match the visual system to the role, company, and seniority level.',
    icon: Layers3,
  },
  {
    title: 'Tailor before sending',
    body: 'Paste a JD and upload your CV to generate a role-ready version with AI.',
    icon: Sparkles,
  },
];

function readinessLabel(bestScore: number | null): string {
  if (bestScore === null) {
    return 'Not scored yet';
  }

  if (bestScore >= 80) {
    return 'Strong draft';
  }

  if (bestScore >= 60) {
    return 'Needs polish';
  }

  return 'High risk';
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: { payment?: string; order_id?: string; upgraded?: string };
}): Promise<JSX.Element> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Verify payment server-side on return from Cashfree — upgrades user immediately
  // regardless of whether the webhook has fired yet.
  if (searchParams?.payment === 'success') {
    const orderId =
      searchParams.order_id ?? cookies().get('cv_prime_pending_order_id')?.value ?? null;
    const upgraded = orderId ? await verifyAndUpgrade(orderId, user.id) : false;
    redirect(upgraded ? '/dashboard?upgraded=1' : '/dashboard?payment=pending');
  }

  const [{ data: profile }, { data: cvs }] = await Promise.all([
    supabase
      .from('profiles')
      .select('plan, pdf_exports_used')
      .eq('id', user.id)
      .maybeSingle(),
    supabase
      .from('cvs')
      .select('id, title, template_id, ats_score, last_edited, is_public')
      .eq('user_id', user.id)
      .order('last_edited', { ascending: false }),
  ]);

  const typedProfile = profile as
    | { plan?: 'free' | 'pro'; pdf_exports_used?: number | null }
    | null;
  const plan = (typedProfile?.plan ?? 'free') as
    | 'free'
    | 'pro';
  const pdfExportsUsed = typedProfile?.pdf_exports_used ?? 0;
  const cvList = (cvs ?? []) as Array<
    Pick<
      Database['public']['Tables']['cvs']['Row'],
      'id' | 'title' | 'template_id' | 'ats_score' | 'last_edited' | 'is_public'
    >
  >;
  const bestScore = cvList.reduce<number | null>((best, cv) => {
    if (cv.ats_score === null) {
      return best;
    }

    return best === null ? cv.ats_score : Math.max(best, cv.ats_score);
  }, null);

  const upgraded = searchParams?.upgraded === '1' && plan === 'pro';
  const upgradeNotApplied = searchParams?.upgraded === '1' && plan !== 'pro';
  const paymentPending = searchParams?.payment === 'pending';

  return (
    <div className="space-y-8">
      {upgraded && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-4">
          <p className="text-sm font-bold text-emerald-800">
            Welcome to Pro! Your account has been upgraded. Enjoy unlimited exports and all premium features.
          </p>
        </div>
      )}
      {paymentPending && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4">
          <p className="text-sm font-bold text-amber-900">
            Payment received, but Pro is still syncing. Please refresh in a minute or contact support with your order id.
          </p>
        </div>
      )}
      {upgradeNotApplied && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-6 py-4">
          <p className="text-sm font-bold text-rose-900">
            Payment verification returned, but Pro was not applied to this account. Please contact support with your order id.
          </p>
        </div>
      )}
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
              Workspace
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1] tracking-[-0.045em] sm:text-5xl">
              Build a sharper CV, then tailor it for every serious application.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Your command center for CV versions, template choices, ATS readiness, AI rewrites, and recruiter-ready exports.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CreateCVButton />
              <Link
                href="/ai-cv"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[0.12]"
              >
                Generate with AI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-300">
                Current plan
              </p>
              <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold capitalize text-brand-foreground">
                {plan}
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/[0.08] p-4">
                <p className="text-xs font-semibold text-slate-400">Resume drafts</p>
                <p className="mt-2 font-display text-3xl font-bold">
                  Unlimited
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.08] p-4">
                <p className="text-xs font-semibold text-slate-400">PDF exports</p>
                <p className="mt-2 font-display text-3xl font-bold">
                  {plan === 'pro' ? 'Unlimited' : `${pdfExportsUsed}/3`}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              {plan === 'pro'
                ? 'Unlimited CVs, clean exports, and all templates are unlocked.'
                : 'Free users get unlimited drafts and 3 PDF exports before upgrading.'}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-slate-500">Readiness</p>
            <GaugeCircle className="h-5 w-5 text-cyan-700" />
          </div>
          <p className="mt-4 font-display text-3xl font-bold tracking-[-0.03em]">
            {readinessLabel(bestScore)}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {bestScore === null ? 'Run AI scoring from the AI job CV flow.' : `Best score is ${bestScore}/100.`}
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-slate-500">Templates</p>
            <Layers3 className="h-5 w-5 text-amber-600" />
          </div>
          <p className="mt-4 font-display text-3xl font-bold tracking-[-0.03em]">8 styles</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Three free templates and five Pro visual systems.
          </p>
        </article>
        <article className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-slate-500">Next unlock</p>
            <Wand2 className="h-5 w-5 text-emerald-700" />
          </div>
          <p className="mt-4 font-display text-3xl font-bold tracking-[-0.03em]">AI repair</p>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Paste a JD, upload a CV, then generate a role-ready version.
          </p>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div>
          {cvList.length === 0 ? (
            <section className="overflow-hidden rounded-[2rem] border border-dashed border-slate-300 bg-white shadow-sm">
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_340px] lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
                    No CVs yet
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">
                    Create the master CV first.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                    Start with the AI flow if you already have a CV. Paste a JD, upload your current CV, and CV Prime will create the first tailored draft.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/ai-cv"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-black"
                    >
                      Generate with AI
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <CreateCVButton />
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-[#eef3f8] p-4">
                  <div className="min-h-[380px] rounded-xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-950/10">
                    <div className="h-4 w-40 rounded-full bg-slate-950" />
                    <div className="mt-3 h-2 w-28 rounded-full bg-cyan-500" />
                    <div className="mt-9 space-y-2">
                      <div className="h-2 w-full rounded-full bg-slate-200" />
                      <div className="h-2 w-5/6 rounded-full bg-slate-200" />
                      <div className="h-2 w-3/4 rounded-full bg-slate-200" />
                    </div>
                    <div className="mt-10 grid grid-cols-[0.75fr_1.25fr] gap-5">
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded-full bg-slate-300" />
                        <div className="h-2 w-4/5 rounded-full bg-slate-200" />
                        <div className="h-2 w-3/5 rounded-full bg-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded-full bg-slate-200" />
                        <div className="h-2 w-11/12 rounded-full bg-slate-200" />
                        <div className="h-2 w-4/5 rounded-full bg-slate-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section>
              <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
                    CV library
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em]">
                    Your application drafts
                  </h2>
                </div>
                <Link
                  href="/templates"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700"
                >
                  Template gallery
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                {cvList.map((cv) => (
                  <CVCard
                    key={cv.id}
                    id={cv.id}
                    title={cv.title}
                    templateId={cv.template_id as TemplateId}
                    lastEdited={cv.last_edited}
                    atsScore={cv.ats_score}
                    isPublic={Boolean(cv.is_public)}
                    plan={plan}
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">Next best actions</h2>
                <p className="text-sm text-slate-500">Move from draft to send-ready.</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {nextActions.map((action) => {
                const Icon = action.icon;

                return (
                  <div key={action.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-slate-500" />
                      <p className="text-sm font-bold text-slate-800">{action.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{action.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-card border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="h-5 w-5 text-emerald-700" />
              <h2 className="font-display text-xl font-bold text-emerald-950">
                Pro tip
              </h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-emerald-900">
              Keep one strong master CV, then clone it for each role and tailor with AI. Recruiters respond to specifics — lead every bullet with a measurable outcome.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
