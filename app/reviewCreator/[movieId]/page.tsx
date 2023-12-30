import { ReviewCreator } from '@/modules/reviewCreatorPage/ReviewCreator/ReviewCreator';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ReviewCreatorPage({
  params,
}: {
  params: { movieId: string };
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return (
      <main>
        <ErrorMessage message='You need to be logged in to do that!' />
      </main>
    );
  }

  return (
    <main className='flex flex-col space-y-6 p-6 md:mx-auto md:mt-32 md:w-1/2 md:space-y-8'>
      <ReviewCreator movieId={params.movieId} />
    </main>
  );
}
