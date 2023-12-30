import { z } from 'zod';

export const moviesListSchema = z.object({
  id: z.number(),
  created_at: z.date(),
  movieIds: z.array(z.string()),
  userId: z.string().uuid(),
  listName: z.string(),
  description: z.string().optional(),
});
