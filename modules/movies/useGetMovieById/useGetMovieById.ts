import { useQuery } from '@tanstack/react-query';
import { getMovieById } from './apiUseGetMovieById';

export const useGetMovieById = (id: string) => {
  return useQuery({
    queryKey: ['movie'],
    queryFn: () => getMovieById(id),
    refetchOnWindowFocus: true,
  });
};
