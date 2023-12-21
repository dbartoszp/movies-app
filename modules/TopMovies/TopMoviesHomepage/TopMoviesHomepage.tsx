'use client';
import { Text } from '@/modules/Text/Text';
import { PosterLinkList } from './PosterLinkList/PosterLinkList';
import { useGetLimitedPopularMoviesIDPoster } from '@/modules/movies/useGetLimitedPopularMoviesIDPoster/useGetLimitedPopularMoviesIDPoster';

export const TopMoviesHomepage = () => {
  const popularMovies = useGetLimitedPopularMoviesIDPoster();
  if (popularMovies.isLoading) {
    return <Text variant='red'>TODO skeleton</Text>;
  }
  if (!popularMovies.isSuccess) {
    return <Text variant='red'>TODO error message</Text>;
  }

  return (
    <div className='mx-4 my-10'>
      <Text variant='title'>Top movies right now:</Text>
      <PosterLinkList IDPosters={popularMovies.data} />
    </div>
  );
};
