'use client';

import { useGetMoviesListByListId } from '@/modules/lists/hooks/useGetSingleListByListId/useGetMoviesListByListId';
import { Link } from '@/modules/ui/Button/Link';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { Text } from '@/modules/ui/Text/Text';
import { MoviePreview } from '../MoviePreview/MoviePreview';
import { useDeleteMoviesList } from '@/modules/lists/hooks/useDeleteMoviesList/useDeleteMoviesList';
import { HiMiniTrash } from 'react-icons/hi2';

type ListInfoProps = {
  listId: number;
};

export const ListInfo = ({ listId }: ListInfoProps) => {
  const list = useGetMoviesListByListId(listId);

  const deleteMoviesList = useDeleteMoviesList();
  const handleDeleteMoviesList = () => {
    deleteMoviesList.mutate(listId);
  };

  if (list.isLoading) return <Text>TODO SKELETON LISTINFO</Text>;
  if (!list.isSuccess) return <ErrorMessage message='Incorrect list id!' />;

  const listData = list.data;

  return (
    <div className='flex flex-row items-center justify-center p-2 pb-4  md:min-h-screen'>
      <div className='mt-12 flex flex-col space-y-12 bg-dark-blue px-6 py-4 md:px-36 md:py-12'>
        <div className='flex flex-row justify-between'>
          <div className='mb-7 flex flex-col space-y-4'>
            <div>
              <Text variant='title'>
                Movie list: <strong>{listData.listName}</strong>
              </Text>
              <Text variant='subtitle'>
                <span className='italic'>&quot;{listData.listName}&quot;</span>
              </Text>
            </div>
          </div>
          <div
            onClick={handleDeleteMoviesList}
            className='my-auto cursor-pointer hover:bg-light-blue'
          >
            <span className='text-red-500'>
              <HiMiniTrash size={30} />
            </span>
          </div>
        </div>
        <div className='flex flex-col space-y-6'>
          {!listData.movieIds ||
          listData.movieIds.length === 0 ||
          listData.movieIds.every((id) => id === null) ? (
            <Text>No movies in this list yet!</Text>
          ) : (
            listData.movieIds
              .filter((id): id is string => id !== null)
              .map((movieId, index) => (
                <MoviePreview key={`${movieId}-${index}`} movieId={movieId} />
              ))
          )}
        </div>
      </div>
    </div>
  );
};
