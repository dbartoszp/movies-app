import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getCurrentUser } from '@/modules/users/utils/getCurrentUser/getCurrentUser';

export const deleteMovieReview = async (reviewId: number) => {
  const user = await getCurrentUser();
  if (!user) return;
  const supabase = createClientComponentClient();

  const { error } = await supabase
    .from('movieReview')
    .delete()
    .eq('id', reviewId);

  if (error) console.log(error);
};
