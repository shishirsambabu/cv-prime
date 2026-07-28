import { permanentRedirect } from 'next/navigation';

export default function CreateWithAIRedirectPage(): never {
  permanentRedirect('/signup?next=/ai-cv');
}
