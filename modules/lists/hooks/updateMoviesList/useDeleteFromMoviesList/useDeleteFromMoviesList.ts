import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { deleteFromMoviesList } from './apiDeleteFromMoviesList';

type DeleteFromMoviesListParams = {
  listId: number;
  movieIdToRemove: string;
};

export const useDeleteFromMoviesList = () => {
  return useMutation({
    mutationFn: ({ listId, movieIdToRemove }: DeleteFromMoviesListParams) =>
      deleteFromMoviesList({
        listId,
        movieIdToRemove,
      }),
    onSuccess: () => {
      toast.success('Successfully removed the movie from the list!');
    },
    onError: (err) => {
      toast.error('Could not remove the movie from the list');
    },
  });
};
