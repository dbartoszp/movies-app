'use client';

import { Text } from '@/modules/ui/Text/Text';
import { useGetMoviesListsByUserId } from '../../hooks/useGetListsByUserId/useGetListsByUserId';
import { HiMiniTrash } from 'react-icons/hi2';
import { useDeleteMoviesList } from '../../hooks/useDeleteMoviesList/useDeleteMoviesList';
import { MoviePreviewSmall } from './MoviePreviewSmall/MoviePreviewSmall';
import { Link } from '@/modules/ui/Button/Link';

type ListPreviewProps = {
  listId: number;
  movieIds: (string | null)[] | null;
  description: string;
  listName: string;
};

export const ListPreview = ({
  listId,
  movieIds,
  description,
  listName,
}: ListPreviewProps) => {
  const deleteMoviesList = useDeleteMoviesList();
  const handleDeleteMoviesList = () => {
    deleteMoviesList.mutate(listId);
  };

  return (
    <div className='flex flex-row justify-between bg-dark-blue p-2 pb-4 '>
      <Link href={`/list/${listId}`}>
        <div className='flex flex-col'>
          <Text variant='title'>{listName}</Text>
          <Text variant='subtitle'>
            <span className='italic'>&quot;{listName}&quot;</span>
          </Text>
          <div className='flex flex-col space-y-4'>
            {!movieIds ||
            movieIds.length === 0 ||
            movieIds.every((id) => id === null) ? (
              <Text>No movies in this list yet!</Text>
            ) : (
              movieIds
                .filter((id): id is string => id !== null)
                .map((movieId, index) => (
                  <MoviePreviewSmall
                    key={`${movieId}-${index}`}
                    movieId={movieId}
                  />
                ))
            )}
          </div>
        </div>
      </Link>
      <div
        onClick={handleDeleteMoviesList}
        className='my-auto cursor-pointer hover:bg-light-blue'
      >
        <span className='text-red-500'>
          <HiMiniTrash size={30} />
        </span>
      </div>
    </div>
  );
};
