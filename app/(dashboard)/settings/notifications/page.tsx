import { redirect } from 'next/navigation';

// Email footers and the unsubscribe flow link here; the preference center lives
// on the main settings page.
export default function NotificationsRedirect(): never {
  redirect('/settings');
}
