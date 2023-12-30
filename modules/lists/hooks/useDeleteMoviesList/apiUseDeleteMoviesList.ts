import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getCurrentUser } from '@/modules/users/utils/getCurrentUser/getCurrentUser';

export const deleteMoviesList = async (movieListId: number) => {
  const user = await getCurrentUser();
  if (!user) return;
  const supabase = createClientComponentClient();

  const { error } = await supabase
    .from('moviesList')
    .delete()
    .eq('id', movieListId);

  if (error) console.log(error);
};
