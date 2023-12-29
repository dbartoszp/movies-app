import { z } from 'zod';

const reviewSchema = z.object({
  id: z.number().int(),
  created_at: z.string(),
  rating: z.number().int(),
  writtenReview: z.string(),
  userId: z.string().uuid(),
  movieId: z.string(),
});

export const reviewsArraySchema = z.array(reviewSchema);
