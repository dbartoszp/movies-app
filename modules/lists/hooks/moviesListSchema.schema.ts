import { z } from 'zod';

const moviesListSchema = z.object({
  id: z.number(),
  created_at: z.string(),
  movieIds: z.array(z.union([z.string(), z.null()])).nullable(),
  userId: z.string().uuid(),
  listName: z.string(),
  description: z.string(),
});

export const moviesListArraySchema = z.array(moviesListSchema);
