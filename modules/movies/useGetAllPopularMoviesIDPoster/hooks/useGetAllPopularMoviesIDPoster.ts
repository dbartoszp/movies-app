import { useQuery } from '@tanstack/react-query';
import { getAllPopularMoviesIDPoster } from '../apiUseGetAllPopularMoviesIDPoster';

export const useGetAllPopularMoviesIDPoster = () => {
  return useQuery({
    queryKey: ['mostPopularMovies'],
    queryFn: getAllPopularMoviesIDPoster,
    refetchOnWindowFocus: true,
  });
};
