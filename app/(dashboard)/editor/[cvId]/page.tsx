import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';
import { CVEditor } from '@/components/editor/CVEditor';
import { getUserPlan } from '@/lib/plan';

export const metadata: Metadata = {
  title: 'CV editor',
  description: 'Edit CV sections, switch templates, run AI assists, and export your CV.',
};

interface EditorPageProps {
  params: {
    cvId: string;
  };
}

export default async function EditorPage({
  params,
}: EditorPageProps): Promise<JSX.Element> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    notFound();
  }

  const [{ data: cv }, plan] = await Promise.all([
    supabase
      .from('cvs')
      .select('*')
      .eq('id', params.cvId)
      .eq('user_id', user.id)
      .single<Database['public']['Tables']['cvs']['Row']>(),
    getUserPlan(user.id),
  ]);

  if (!cv) {
    notFound();
  }

  // `key` forces a full remount when the route's cvId changes. Next.js App
  // Router reuses this client component across a client-side navigation from
  // one /editor/[cvId] to another (no full page load), and useCVStore is a
  // module-level singleton — without a remount, the previous CV's data could
  // still be present when the hydrate effect runs, and any field missing
  // from the new CV's stored data would silently keep the old CV's value.
  return <CVEditor key={cv.id} initialCV={cv} plan={plan} />;
}
