import { Text } from '@/modules/ui/Text/Text';
import { MyReviews } from './MyReviews/MyReviews';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { MyLists } from './MyLists/MyLists';
import { useState } from 'react';

export const Dashboard = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }
  return (
    <div>
      <Text variant='title'>Your most recent reviews:</Text>
      <MyReviews userId={session?.user.id} limit={3} />
      <MyLists />
    </div>
  );
};
