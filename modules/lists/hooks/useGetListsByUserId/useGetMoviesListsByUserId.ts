import { useQuery } from '@tanstack/react-query';
import { getMoviesListsByUserId } from './apiUseGetMoviesListsByUserId';

export const useGetMoviesListsByUserId = (userId: string) => {
  return useQuery({
    queryKey: ['moviesList', userId],
    queryFn: () => getMoviesListsByUserId(userId),
    refetchOnWindowFocus: true,
  });
};
