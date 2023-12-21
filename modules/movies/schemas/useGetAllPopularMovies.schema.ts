import { z } from 'zod';

export const useGetAllPopularMoviesReturnSchema = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      rank: z.string().optional(),
      rankUpDown: z.string().optional(),
      title: z.string(),
      fullTitle: z.string(),
      year: z.string(),
      image: z.string().url(),
      crew: z.string(),
      imDbRating: z.string().nullable(),
      imDbRatingCount: z.string(),
    })
  ),
  errorMessage: z.string().optional(),
});
