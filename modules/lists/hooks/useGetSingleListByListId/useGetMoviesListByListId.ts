import { useQuery } from '@tanstack/react-query';
import { getMoviesListByListId } from './apiUseGetMoviesListByListId';

export const useGetMoviesListByListId = (id: number) => {
  return useQuery({
    queryKey: ['moviesList'],
    queryFn: () => getMoviesListByListId(id),
    refetchOnWindowFocus: true,
  });
};
