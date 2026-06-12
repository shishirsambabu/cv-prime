import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';
import { CVEditor } from '@/components/editor/CVEditor';

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

  const { data: cv } = await supabase
    .from('cvs')
    .select('*')
    .eq('id', params.cvId)
    .eq('user_id', user.id)
    .single<Database['public']['Tables']['cvs']['Row']>();

  if (!cv) {
    notFound();
  }

  return <CVEditor initialCV={cv} />;
}
