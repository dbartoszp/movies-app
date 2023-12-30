import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getCurrentUser } from '@/modules/users/utils/getCurrentUser/getCurrentUser';

type DeleteFromMovieListParams = {
  listId: number;
  movieIdToRemove: string;
};

export const deleteFromMoviesList = async ({
  listId,
  movieIdToRemove,
}: DeleteFromMovieListParams) => {
  const user = await getCurrentUser();
  if (!user) throw new Error('User not found');

  const supabase = createClientComponentClient();

  const { data: currentList, error: fetchError } = await supabase
    .from('moviesList')
    .select('movieIds')
    .eq('id', listId)
    .single();

  if (fetchError) throw fetchError;

  const indexToRemove = currentList.movieIds.indexOf(movieIdToRemove);
  if (indexToRemove !== -1) {
    currentList.movieIds.splice(indexToRemove, 1);
  }

  const { error: updateError } = await supabase
    .from('moviesList')
    .update({ movieIds: currentList.movieIds })
    .eq('id', listId)
    .single();

  if (updateError) throw updateError;

  return { message: 'Movie removed from list successfully' };
};
