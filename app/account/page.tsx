import '../globals.css';
import { LogoutButton } from '@/modules/auth/LogoutButton/LogoutButton';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Dashboard } from '@/modules/accountPage/Dashboard/Dashboard';
import { Text } from '@/modules/ui/Text/Text';

export default async function AccountPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <main className='flex min-h-screen flex-col items-center px-7 sm:mt-24'>
      <div className='flex flex-row items-center justify-around pt-8 sm:space-x-36'>
        <Text variant='title'>Dashboard</Text>
        <LogoutButton />
      </div>
      <Dashboard userId={session.user.id} />
    </main>
  );
}
