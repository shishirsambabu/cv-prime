import { redirect } from 'next/navigation';

export default function CreateWithAIRedirectPage(): never {
  redirect('/signup?next=/ai-cv');
}
