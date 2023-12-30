import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMoviesList } from './apiUseDeleteMoviesList';

export const useDeleteMoviesList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (moviesListId: number) => deleteMoviesList(moviesListId),
    onSuccess: () => {
      toast.success('Succesfully deleted a list!');
      queryClient.invalidateQueries({
        queryKey: ['moviesList'],
      });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Could not delete a list');
    },
  });
};
