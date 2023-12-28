import { z } from 'zod';

const movieResultSchema = z.object({
  id: z.string(),
  resultType: z.literal('Movie'),
  image: z.union([z.string().url(), z.literal('')]), // Accepts valid URLs or empty strings
  title: z.string(),
  description: z.string(),
});

const searchResultsSchema = z.object({
  searchType: z.literal('Movie'),
  expression: z.string().nullable(), // Accepts string or null
  results: z.array(movieResultSchema), // Should always be an array, based on your provided response
  errorMessage: z.string().optional().nullable(), // Accepts string, undefined, or null
});

export const useGetMoviesByTitleReturnSchema = searchResultsSchema;
