import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFromMoviesList } from './apiDeleteFromMoviesList';

type DeleteFromMoviesListParams = {
  listId: number;
  movieIdToRemove: string;
};

export const useDeleteFromMoviesList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ listId, movieIdToRemove }: DeleteFromMoviesListParams) =>
      deleteFromMoviesList({
        listId,
        movieIdToRemove,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['moviesList'],
      });
      toast.success('Successfully removed the movie from the list!');
    },
    onError: (err) => {
      toast.error('Could not remove the movie from the list');
    },
  });
};
