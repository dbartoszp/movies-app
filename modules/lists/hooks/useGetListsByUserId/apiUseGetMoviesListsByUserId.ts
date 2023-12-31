import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { moviesListArraySchema } from '../moviesListSchema.schema';

export const getMoviesListsByUserId = async (userId: string) => {
  const supabase = createClientComponentClient();

  const { data } = await supabase
    .from('moviesList')
    .select('*')
    .eq('userId', userId);
  const moviesList = moviesListArraySchema.safeParse(data);
  if (moviesList.success) {
    return moviesList.data;
  }

  throw moviesList.error;
};
