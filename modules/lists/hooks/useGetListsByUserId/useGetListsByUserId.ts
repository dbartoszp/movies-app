import { useQuery } from '@tanstack/react-query';
import { getMoviesListsByUserId } from './apiUseGetListsByUserId';

export const useGetMoviesListsByUserId = (userId: string) => {
  return useQuery({
    queryKey: ['moviesList'],
    queryFn: () => getMoviesListsByUserId(userId),
    refetchOnWindowFocus: true,
  });
};
