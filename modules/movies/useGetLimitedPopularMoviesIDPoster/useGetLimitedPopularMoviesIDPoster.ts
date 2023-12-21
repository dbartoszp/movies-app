import { useQuery } from '@tanstack/react-query';
import { getLimitedPopularMoviesIDPoster } from './apiUseGetLimitedPopularMoviesIDPoster';

export const useGetLimitedPopularMoviesIDPoster = () => {
  return useQuery({
    queryKey: ['mostPopularMovies'],
    queryFn: getLimitedPopularMoviesIDPoster,
    refetchOnWindowFocus: true,
  });
};
