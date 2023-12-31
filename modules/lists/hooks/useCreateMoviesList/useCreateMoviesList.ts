import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { createMoviesList } from './apiUseCreateMoviesList';

type MovieList = {
  listName: string;
  description: string;
};

export const useCreateMoviesList = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ listName, description }: MovieList) =>
      createMoviesList({
        listName,
        description,
      }),
    onSuccess: () => {
      toast.success('Succesfully created a movie list!');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Could not create a movie list');
    },
  });
};
