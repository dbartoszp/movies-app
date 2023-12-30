import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { addToMoviesList } from './apiUseAddToMoviesList';

type AddToMoviesListParams = {
  listId: number;
  movieIdToAdd: string;
};

type MovieIdToAdd = {};

export const useAddToMoviesList = () => {
  return useMutation({
    mutationFn: ({ listId, movieIdToAdd }: AddToMoviesListParams) =>
      addToMoviesList({
        listId,
        movieIdToAdd,
      }),
    onSuccess: () => {
      toast.success('Succesfully added the movie to the list!');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Could not add to the list');
    },
  });
};
