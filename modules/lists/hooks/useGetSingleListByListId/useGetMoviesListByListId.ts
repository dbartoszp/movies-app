import { useQuery } from '@tanstack/react-query';
import { getMoviesListByListId } from './apiUseGetMoviesListByListId';

export const useGetMoviesListByListId = (id: number) => {
  return useQuery({
    queryKey: ['moviesList', id],
    queryFn: () => getMoviesListByListId(id),
    refetchOnWindowFocus: true,
  });
};
