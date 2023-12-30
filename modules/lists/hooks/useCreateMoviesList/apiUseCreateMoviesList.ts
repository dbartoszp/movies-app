import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getCurrentUser } from '@/modules/users/utils/getCurrentUser/getCurrentUser';

type MovieList = {
  listName: string;
  description: string;
};

export const createMoviesList = async ({
  listName,
  description,
}: MovieList) => {
  const user = await getCurrentUser();
  if (!user) return;
  const supabase = createClientComponentClient();
  const { error } = await supabase
    .from('moviesList')
    .insert([{ listName, description, userId: user.user.id }])
    .select();

  if (error) console.log(error);
};
