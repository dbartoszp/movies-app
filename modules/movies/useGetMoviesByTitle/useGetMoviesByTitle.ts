import { useQuery } from '@tanstack/react-query';
import { getMoviesByTitle } from './apiUseGetMoviesByTitle';

export const useGetMoviesByTitle = (title: string) => {
  return useQuery({
    queryKey: ['movieSearch', title],
    queryFn: () => getMoviesByTitle(title),
    refetchOnWindowFocus: true,
  });
};
