import { useQuery } from '@tanstack/react-query';
import { getActorById } from './apiUseGetActorById';

export const useGetActorById = (id: string) => {
  return useQuery({
    queryKey: ['actor'],
    queryFn: () => getActorById(id),
    refetchOnWindowFocus: true,
  });
};

// import { useQuery } from '@tanstack/react-query';
// import { getMovieById } from './apiUseGetMovieById';

// export const useGetMovieById = (id: string) => {
//   return useQuery({
//     queryKey: ['movie'],
//     queryFn: () => getMovieById(id),
//     refetchOnWindowFocus: true,
//   });
// };
