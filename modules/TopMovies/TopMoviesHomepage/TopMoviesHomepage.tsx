'use client';
import { Text } from '@/modules/ui/Text/Text';
import { PosterLinkList } from './PosterLinkList/PosterLinkList';
import { useGetLimitedPopularMoviesIDPoster } from '@/modules/movies/useGetLimitedPopularMoviesIDPoster/useGetLimitedPopularMoviesIDPoster';
import { PosterLinkListSkeleton } from './PosterLinkList/PosterLinkListSkeleton/PosterLinkListSkeleton';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';

export const TopMoviesHomepage = () => {
  const popularMovies = useGetLimitedPopularMoviesIDPoster();

  if (popularMovies.isLoading) {
    return (
      <div className='mx-4 my-10'>
        <Text variant='title'>Top movies right now:</Text>
        <PosterLinkListSkeleton />
      </div>
    );
  }
  if (!popularMovies.isSuccess) {
    return (
      <div className='mx-4 my-10'>
        <Text variant='title'>Top movies right now:</Text>
        <ErrorMessage />
      </div>
    );
  }

  return (
    <div className='mx-4 my-10'>
      <Text variant='title'>Top movies right now:</Text>
      <PosterLinkList IDPosters={popularMovies.data} />
    </div>
  );
};
