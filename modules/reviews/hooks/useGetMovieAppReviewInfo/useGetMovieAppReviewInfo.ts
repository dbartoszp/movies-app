import { useQuery } from '@tanstack/react-query';
import { getMovieReviewInfo } from './apiUseGetMovieAppReviewInfo';

export const useGetMovieAppReviewInfo = (movieId: string) => {
  return useQuery({
    queryKey: ['movieReviewInfo', movieId],
    queryFn: () => getMovieReviewInfo(movieId),
    refetchOnWindowFocus: true,
  });
};
