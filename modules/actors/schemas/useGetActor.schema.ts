import { z } from 'zod';

const movieSchema = z.object({
  id: z.string(),
  title: z.string(),
  fullTitle: z.string().optional().nullable(),
  year: z.string().optional().nullable(),
  role: z.string().optional(),
  image: z.string().url().optional(),
});

export const useGetActorReturnSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  image: z.string().url(),
  summary: z.string(),
  birthDate: z.string(),
  deathDate: z.string().nullable(),
  awards: z.string(),
  height: z.string(),
  knownFor: z.array(movieSchema).nullable(),
  castMovies: z.array(
    z.object({
      id: z.string(),
      role: z.string(),
      title: z.string(),
      year: z.string().optional(),
      description: z.string().optional(),
    })
  ),
  errorMessage: z.string().optional(),
});
