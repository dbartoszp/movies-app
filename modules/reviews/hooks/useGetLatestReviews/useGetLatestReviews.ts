import { useQuery } from '@tanstack/react-query';
import { getLatestReviews } from './apiUseGetLatesReviews';

export const useGetLatestReviews = (movieId: string, count: number) => {
  return useQuery({
    queryKey: ['movieReview', movieId],
    queryFn: () => getLatestReviews(movieId, count),
    refetchOnWindowFocus: true,
  });
};
