import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { UnauthorizedBox } from '@/modules/ui/UnauthorizedBox/UnauthorizedBox';

export default async function Unauthenticated() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/');
  }
  return <UnauthorizedBox />;
}
