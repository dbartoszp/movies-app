import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getCurrentUser } from '@/modules/users/utils/getCurrentUser/getCurrentUser';

type MovieReview = {
  rating: number;
  writtenReview?: string;
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
  console.log(user);
  let { data: reviewedMovie, error: reviewedMovieError } = await supabase
    .from('reviewedMovie')
    .select('id')
    .eq('movieId', movieId);
  console.log(reviewedMovie);

  if (reviewedMovie?.length === 0) {
    const { error: insertError } = await supabase
      .from('reviewedMovie')
      .insert([{ movieId }])
      .single();

    if (insertError) {
      console.error('Error inserting reviewedMovie:', insertError);
      throw insertError;
    }
  }

  const { error } = await supabase
    .from('movieReview')
    .insert([{ rating, writtenReview, movieId, userId: user.user.id }])
    .select();
  if (error) console.log(error);
};
