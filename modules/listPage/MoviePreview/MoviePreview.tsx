'use client';

import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { Link } from '@/modules/ui/Button/Link';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { Text } from '@/modules/ui/Text/Text';
import Image from 'next/image';

type MoviePreviewProps = {
  movieId: string;
};

export const MoviePreview = ({ movieId }: MoviePreviewProps) => {
  const movie = useGetMovieById(movieId);
  if (movie.isLoading) return <Text>TODO SKELETON MOVIEPREVIEW</Text>;
  if (!movie.isSuccess)
    return <ErrorMessage message='Could not load the movie' />;

  return (
    <Link href={`/movie/${movieId}`}>
      <div className='flex flex-row justify-around space-x-4'>
        <Image
          width={100}
          height={200}
          src={movie.data.image}
          alt={movie.data.title}
        />
        <div className='flex flex-col space-y-3'>
          <Text variant='title'>
            <strong>{movie.data.fullTitle}</strong>
          </Text>
          <Text variant='subtitle'>
            Directed by <strong>{movie.data.directors}</strong>
          </Text>
        </div>
      </div>
    </Link>
  );
};
