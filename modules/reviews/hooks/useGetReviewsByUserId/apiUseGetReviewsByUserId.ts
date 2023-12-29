import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { reviewsArraySchema } from '../reviewsSchema.schema';

export const getReviewsByUserId = async (userId: string) => {
  const supabase = createClientComponentClient();

  const { data } = await supabase
    .from('movieReview')
    .select('*')
    .eq('userId', userId);
  console.log(data);
  const reviews = reviewsArraySchema.safeParse(data);
  if (reviews.success) {
    return reviews.data;
  }

  console.log(reviews);
  throw reviews.error;
};
