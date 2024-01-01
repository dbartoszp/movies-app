'use client';

import { useAddToMoviesList } from '@/modules/lists/hooks/updateMoviesList/useAddToMoviesList/useAddToMoviesList';
import { useGetMoviesListByListId } from '@/modules/lists/hooks/useGetSingleListByListId/useGetMoviesListByListId';
import { Button } from '@/modules/ui/Button/Button';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { Text } from '@/modules/ui/Text/Text';
import { HiPlus, HiPlusCircle } from 'react-icons/hi2';
import { SingleListAddSkeleton } from './SingleListAddSkeleton/SingleListAddSkeleton';

type SingleListAdd = {
  listId: number;
  movieId: string;
};

export const SingleListAdd = ({ listId, movieId }: SingleListAdd) => {
  const list = useGetMoviesListByListId(listId);
  const addToList = useAddToMoviesList();

  const handleAddToMoviesList = () => {
    addToList.mutate({ listId, movieIdToAdd: movieId });
  };

  if (list.isLoading) return <SingleListAddSkeleton />;
  if (!list.isSuccess) return <ErrorMessage />;

  return (
    <div className='flex flex-row justify-between bg-dark-blue p-2'>
      <div>
        <Text>{list.data.listName}</Text>
        <Text variant='subtitle'>
          <span className='italic'>&quot;{list.data.description}&quot;</span>
        </Text>
      </div>
      <Button onClick={handleAddToMoviesList}>
        <Text variant='green'>
          <HiPlusCircle size={30} />
        </Text>
      </Button>
    </div>
  );
};
