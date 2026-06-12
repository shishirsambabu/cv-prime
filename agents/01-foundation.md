# Agent 01 — Foundation & Auth
# Read AGENTS.md first. Then read MEMORY.md. Then execute this file.

---

## YOUR MISSION
Bootstrap the entire project foundation. When you finish, a developer should be
able to clone the repo, add env vars, and have a working auth flow running locally.

---

## STEP 1 — Project initialisation

Run exactly:
```bash
npx create-next-app@latest cv-prime \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd cv-prime
```

Install all dependencies in one shot:
```bash
npm install \
  @supabase/supabase-js @supabase/ssr \
  zustand \
  react-hook-form @hookform/resolvers zod \
  @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities \
  @upstash/redis @upstash/ratelimit \
  razorpay \
  resend \
  posthog-js \
  recharts \
  lucide-react \
  clsx tailwind-merge

npm install --save-dev \
  @types/node \
  jest @types/jest jest-environment-jsdom \
  @testing-library/react @testing-library/jest-dom

npx shadcn-ui@latest init
# Choose: Default style, Neutral base color, CSS variables: yes

npx shadcn-ui@latest add button input label badge card dialog
  dropdown-menu separator sheet skeleton tabs toast tooltip
```

---

## STEP 2 — tsconfig.json

Ensure strict mode. Replace compilerOptions with:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  }
}
```

---

## STEP 3 — Supabase setup

3a. Create project at supabase.com. Note URL and keys.

3b. Run this SQL in the Supabase SQL editor:
```sql
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles (extends auth.users)
create table public.profiles (
  id             uuid references auth.users(id) on delete cascade primary key,
  full_name      text,
  avatar_url     text,
  plan           text not null default 'free' check (plan in ('free','pro')),
  linkedin_url   text,
  openrouter_key_enc text,
  openrouter_key_hint text,
  pdf_exports_used integer default 0,
  created_at     timestamptz default now()
);

-- CVs
create table public.cvs (
  id             uuid primary key default uuid_generate_v4(),
  user_id        uuid references public.profiles(id) on delete cascade not null,
  title          text not null default 'Untitled CV',
  template_id    text not null default 'classic',
  data           jsonb not null default '{}',
  ats_score      int,
  ats_score_history jsonb default '[]',
  is_public      boolean default false,
  last_edited    timestamptz default now(),
  created_at     timestamptz default now()
);

-- Cover letters
create table public.cover_letters (
  id             uuid primary key default uuid_generate_v4(),
  user_id        uuid references public.profiles(id) on delete cascade not null,
  cv_id          uuid references public.cvs(id) on delete set null,
  title          text not null default 'Untitled Cover Letter',
  content        text,
  job_description text,
  created_at     timestamptz default now()
);

-- Job applications (tracker)
create table public.job_applications (
  id             uuid primary key default uuid_generate_v4(),
  user_id        uuid references public.profiles(id) on delete cascade not null,
  cv_id          uuid references public.cvs(id) on delete set null,
  company        text not null,
  role           text not null,
  status         text not null default 'saved'
                   check (status in ('saved','applied','interview','offer','rejected')),
  applied_date   date,
  notes          text,
  job_url        text,
  created_at     timestamptz default now()
);

-- Payments
create table public.payments (
  id               uuid primary key default uuid_generate_v4(),
  user_id          uuid references public.profiles(id) on delete cascade not null,
  gateway          text not null check (gateway = 'razorpay'),
  gateway_order_id text,
  amount           int not null,
  currency         text not null default 'INR',
  status           text not null default 'pending',
  created_at       timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.cvs enable row level security;
alter table public.cover_letters enable row level security;
alter table public.job_applications enable row level security;
alter table public.payments enable row level security;

-- RLS policies (users see only their own rows)
create policy "own profile" on public.profiles
  for all using (auth.uid() = id);

create policy "own cvs" on public.cvs
  for all using (auth.uid() = user_id);

create policy "public cv read" on public.cvs
  for select using (is_public = true);

create policy "own cover letters" on public.cover_letters
  for all using (auth.uid() = user_id);

create policy "own job apps" on public.job_applications
  for all using (auth.uid() = user_id);

create policy "own payments" on public.payments
  for all using (auth.uid() = user_id);
```

3c. Generate TypeScript types:
```bash
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > types/database.types.ts
```

---

## STEP 4 — Core library files

Write these files exactly as specified in AGENTS.md:
- lib/supabase/client.ts
- lib/supabase/server.ts
- lib/crypto.ts
- lib/getUserOpenRouterKey.ts
- lib/rateLimit.ts
- types/cv.types.ts

For cv.types.ts, define the full CV JSON shape:
```typescript
export interface CVPersonal {
  name: string; title: string; email: string; phone: string;
  location: string; linkedin: string; website: string; summary: string;
}
export interface CVExperience {
  id: string; company: string; role: string;
  startDate: string; endDate: string; current: boolean; bullets: string[];
}
export interface CVEducation {
  id: string; institution: string; degree: string;
  field: string; startDate: string; endDate: string; gpa: string;
}
export interface CVSkills {
  technical: string[]; soft: string[]; languages: string[];
}
export interface CVProject {
  id: string; name: string; description: string; tech: string[]; url: string;
}
export interface CVData {
  personal: CVPersonal;
  experience: CVExperience[];
  education: CVEducation[];
  skills: CVSkills;
  projects: CVProject[];
  certifications: string[];
  awards: string[];
}
export type Plan = 'free' | 'pro';
export type TemplateId =
  | 'classic' | 'modern' | 'minimal'        // free
  | 'executive' | 'creative' | 'technical'  // pro
  | 'academic' | 'premium';                  // pro
```

---

## STEP 5 — Middleware

Write middleware.ts in project root:
```typescript
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name) => request.cookies.get(name)?.value,
        set: (name, value, options) => {
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({ request: { headers: request.headers } });
          response.cookies.set({ name, value, ...options });
        },
        remove: (name, options) => {
          request.cookies.set({ name, value: '', ...options });
          response = NextResponse.next({ request: { headers: request.headers } });
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Protect dashboard routes
  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect authed users away from auth pages
  if (user && (
    request.nextUrl.pathname === '/login' ||
    request.nextUrl.pathname === '/signup'
  )) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
```

---

## STEP 6 — Auth pages

Build /app/(auth)/login/page.tsx and /app/(auth)/signup/page.tsx.

Requirements:
- Email + password form (react-hook-form + zod)
- Google OAuth button (supabase.auth.signInWithOAuth)
- Magic link option on login page
- "Forgot password?" link
- Error messages inline below the relevant field
- Loading state on submit button
- Redirect to /dashboard on success

---

## STEP 7 — Verify

Run `npm run build`. It must complete with 0 TypeScript errors.
Run `npm run lint`. Zero warnings allowed.

---

## DONE — Update MEMORY.md

Mark Phase 1 Foundation complete. Log any decisions made.
Tick all Phase 1 boxes in CHECKLIST.md that you completed.
