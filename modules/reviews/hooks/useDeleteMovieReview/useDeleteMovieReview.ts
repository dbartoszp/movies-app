import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMovieReview } from './apiUseDeleteMovieReview';

export const useDeleteMovieReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => deleteMovieReview(reviewId),
    onSuccess: () => {
      toast.success('Succesfully deleted a review!');
      queryClient.invalidateQueries({
        queryKey: ['movieReview'],
      });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Could not delete a review');
    },
  });
};
