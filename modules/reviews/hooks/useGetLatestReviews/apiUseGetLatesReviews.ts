import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export const getLatestReviews = async (movieId: string, count: number) => {
  const { data, error } = await supabase
    .from('movieReview')
    .select('*')
    .eq('movieId', movieId)
    .order('created_at', { ascending: false })
    .limit(count);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
