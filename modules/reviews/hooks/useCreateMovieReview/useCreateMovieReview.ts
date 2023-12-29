import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { createMovieReview } from './apiCreateMovieReview';
import { useRouter } from 'next/navigation';

type MovieReview = {
  rating: number;
  writtenReview?: string;
  movieId: string;
};

export const useCreateMovieReview = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ rating, writtenReview, movieId }: MovieReview) =>
      createMovieReview({
        rating: rating,
        writtenReview: writtenReview,
        movieId: movieId,
      }),
    onSuccess: () => {
      toast.success('Succesfully created a review!');
      router.push('/account');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Could not create a review');
    },
  });
};
