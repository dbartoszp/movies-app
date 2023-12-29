import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { createMovieReview } from './apiCreateMovieReview';

type MovieReview = {
  rating: number;
  writtenReview?: string;
  //   userId: string;
  movieId: string;
};

export const useCreateMovieReview = () => {
  return useMutation({
    mutationFn: ({ rating, writtenReview, movieId }: MovieReview) =>
      createMovieReview({
        rating: rating,
        writtenReview: writtenReview,
        movieId: movieId,
      }),
    onSuccess: () => {
      toast.success('Succesfully created a review!');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Could not create a review');
    },
  });
};
