import { MyReviews } from '@/modules/accountPage/Dashboard/MyReviews/MyReviews';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Text } from '@/modules/ui/Text/Text';
import { GoBackButton } from '@/modules/ui/GoBackButton/GoBackButton';

export default async function MyReviewsPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className='flex min-h-screen flex-col px-2'>
      <div className='mx-auto my-6'>
        <GoBackButton />
      </div>
      <Text variant='title'>All your reviews, sorted from the newest:</Text>
      <MyReviews userId={session.user.id} limit={0} />
    </div>
  );
}
