import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { createMoviesList } from './apiUseCreateMoviesList';

type MovieList = {
  listName: string;
  description: string;
};

export const useCreateMoviesList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ listName, description }: MovieList) =>
      createMoviesList({
        listName,
        description,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['moviesList'],
      });
      toast.success('Succesfully created a movie list!');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Could not create a movie list');
    },
  });
};
