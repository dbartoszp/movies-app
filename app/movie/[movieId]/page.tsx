import { MovieInfo } from '@/modules/moviePage/MovieInfo';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function MoviePage({
  params,
}: {
  params: { movieId: string };
}) {
  let isAuth = false;
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) isAuth = true;

  return <MovieInfo isAuth={isAuth} movieId={params.movieId} />;
}
