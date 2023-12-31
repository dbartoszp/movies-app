'use client';

import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { Text } from '@/modules/ui/Text/Text';

type MoviePreviewSmallProps = {
  movieId: string;
};

export const MoviePreviewSmall = ({ movieId }: MoviePreviewSmallProps) => {
  const movie = useGetMovieById(movieId);
  if (movie.isLoading) return <Text>TODO MOVIEPREVIEWSMALL SKELETON</Text>;
  if (!movie.isSuccess) return <ErrorMessage />;
  return (
    <div className='mx-4 my-2 border-b border-b-light-blue py-1'>
      <Text>{movie.data.fullTitle}</Text>
    </div>
  );
};
