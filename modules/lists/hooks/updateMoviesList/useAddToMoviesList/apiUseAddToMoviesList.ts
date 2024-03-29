import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getCurrentUser } from '@/modules/users/utils/getCurrentUser/getCurrentUser';

type AddToMovieListParams = {
  listId: number;
  movieIdToAdd: string;
};

export const addToMoviesList = async ({
  listId,
  movieIdToAdd,
}: AddToMovieListParams) => {
  const user = await getCurrentUser();
  if (!user) throw new Error('User not found');

  const supabase = createClientComponentClient();

  const { data: currentList, error: fetchError } = await supabase
    .from('moviesList')
    .select('movieIds')
    .eq('id', listId)
    .single();

  if (fetchError) throw fetchError;

  const updatedMovieIds = currentList.movieIds
    ? [...currentList.movieIds, movieIdToAdd]
    : [movieIdToAdd];

  const { error: updateError } = await supabase
    .from('moviesList')
    .update({ movieIds: updatedMovieIds })
    .eq('id', listId)
    .single();

  if (updateError) {
    console.log(updateError);
    throw updateError;
  }

  return { message: 'Movie added to list successfully' };
};
