import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { deleteMovieReview } from './apiUseDeleteMovieReview';

export const useDeleteMovieReview = () => {
  return useMutation({
    mutationFn: (reviewId: number) => deleteMovieReview(reviewId),
    onSuccess: () => {
      toast.success('Succesfully deleted a review!');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Could not delete a review');
    },
  });
};
