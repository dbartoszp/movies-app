import { UUID } from 'crypto';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getCurrentUser } from '@/modules/users/utils/getCurrentUser/getCurrentUser';

type MovieReview = {
  rating: number;
  writtenReview?: string;
  // userId: string;
  movieId: string;
};

export const createMovieReview = async ({
  rating,
  writtenReview,
  movieId,
}: MovieReview) => {
  const user = await getCurrentUser();
  if (!user) return;
  const supabase = createClientComponentClient();
  const { error } = await supabase
    .from('movieReview')
    .insert([{ rating, writtenReview, movieId, userId: user.user.id }])
    .select();
  if (error) console.log(error);
};
