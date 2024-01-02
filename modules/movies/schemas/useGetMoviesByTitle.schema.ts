import { z } from 'zod';

const movieResultSchema = z.object({
  id: z.string(),
  resultType: z.literal('Movie'),
  image: z.union([z.string().url(), z.literal('')]),
  title: z.string(),
  description: z.string(),
});

const searchResultsSchema = z.object({
  searchType: z.literal('Movie'),
  expression: z.string().nullable(),
  results: z.array(movieResultSchema),
  errorMessage: z.string().optional().nullable(),
});

export const useGetMoviesByTitleReturnSchema = searchResultsSchema;
