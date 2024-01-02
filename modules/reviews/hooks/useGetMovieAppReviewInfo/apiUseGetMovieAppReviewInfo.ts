import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type ReviewStats = {
  count: number;
  averageRating: number | null;
};

export const getMovieReviewInfo = async (
  movieId: string
): Promise<ReviewStats> => {
  const supabase = createClientComponentClient();

  const { data: reviewData, error: reviewError } = await supabase
    .from('movieReview')
    .select('rating')
    .eq('movieId', movieId);

  if (reviewError) {
    throw new Error(reviewError.message);
  }

  const count = reviewData.length;
  const averageRating = count
    ? reviewData.reduce((acc, { rating }) => acc + rating, 0) / count
    : null;

  return { count, averageRating };
};
