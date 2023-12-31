import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { moviesListSchema } from '../moviesListSchema.schema';

export const getMoviesListByListId = async (id: number) => {
  const supabase = createClientComponentClient();

  const { data } = await supabase
    .from('moviesList')
    .select('*')
    .eq('id', id)
    .single();
  console.log(data);
  const moviesList = moviesListSchema.safeParse(data);

  if (moviesList.success) {
    return moviesList.data;
  }

  console.log(moviesList);
  throw moviesList.error;
};
