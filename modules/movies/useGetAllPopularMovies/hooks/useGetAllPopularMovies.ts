import { useQuery } from '@tanstack/react-query';
import { getAllPopularMovies } from '../apiUseGetAllPopularMovies';

export const useGetAllPopularMovies = () => {
  return useQuery({
    queryKey: ['mostPopularMovies'],
    queryFn: getAllPopularMovies,
    refetchOnWindowFocus: true,
  });
};
