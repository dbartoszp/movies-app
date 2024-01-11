'use client';

import { useGetMoviesListByListId } from '@/modules/lists/hooks/useGetSingleListByListId/useGetMoviesListByListId';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { Text } from '@/modules/ui/Text/Text';
import { MoviePreview } from '../MoviePreview/MoviePreview';
import { useDeleteMoviesList } from '@/modules/lists/hooks/useDeleteMoviesList/useDeleteMoviesList';
import { HiMiniTrash } from 'react-icons/hi2';
import { Button } from '@/modules/ui/Button/Button';
import { useDeleteFromMoviesList } from '@/modules/lists/hooks/updateMoviesList/useDeleteFromMoviesList/useDeleteFromMoviesList';
import { ListInfoSkeleton } from './ListInfoSkeleton/ListInfoSkeleton';

type ListInfoProps = {
  listId: number;
  userId?: string;
};

export const ListInfo = ({ listId, userId = '' }: ListInfoProps) => {
  const list = useGetMoviesListByListId(listId);

  const deleteMoviesList = useDeleteMoviesList();
  const deleteFromMoviesList = useDeleteFromMoviesList();
  const handleDeleteMoviesList = () => {
    deleteMoviesList.mutate(listId);
  };

  const handleDeleteFromMoviesList = (movieId: string) => {
    deleteFromMoviesList.mutate({ movieIdToRemove: movieId, listId });
  };

  if (list.isLoading) return <ListInfoSkeleton />;
  if (!list.isSuccess) return <ErrorMessage message='Incorrect list id!' />;

  const listData = list.data;

  return (
    <div className='flex flex-row items-center justify-center p-2 pb-72  md:min-h-screen'>
      <div className='mt-12 flex flex-col space-y-12 bg-dark-blue px-6 py-4 md:px-36 md:py-12'>
        <div className='flex flex-row items-center justify-between'>
          <div className='mb-7 flex flex-col space-y-4'>
            <div>
              <Text variant='title'>
                Movie list: <strong>{listData.listName}</strong>
              </Text>
              <Text variant='subtitle'>
                <span className='italic'>
                  &quot;{listData.description}&quot;
                </span>
              </Text>
            </div>
          </div>
          {listData.userId === userId && (
            <Button size='lg' onClick={handleDeleteMoviesList}>
              <Text variant='danger'>Delete the list</Text>
            </Button>
          )}
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
                <div
                  className='flex flex-row justify-between'
                  key={`${movieId}-${index}`}
                >
                  <MoviePreview movieId={movieId} />
                  {listData.userId === userId && (
                    <div
                      onClick={() => handleDeleteFromMoviesList(movieId)}
                      className='my-auto cursor-pointer hover:bg-light-blue'
                    >
                      <span className='text-red-500'>
                        <HiMiniTrash size={30} />
                      </span>
                    </div>
                  )}
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};
