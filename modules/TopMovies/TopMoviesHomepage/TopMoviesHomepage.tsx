'use client';
import { Text } from '@/modules/Text/Text';
import { useGetLimitedPopularMoviesIDPoster } from '@/modules/movies/useGetLimitedPopularMoviesIDPoster/useGetLimitedPopularMoviesIDPoster';
import { Button } from '@/modules/ui/Button/Button';
import { PosterLink } from '@/modules/TopMovies/TopMoviesHomepage/PosterLinkList/PosterLink/PosterLink';
import React from 'react';
import { PosterLinkList } from './PosterLinkList/PosterLinkList';

const testMovie = {
  crew: "Sam Esmail (director), Julia Roberts, Mahershala Ali, Ethan Hawke, Myha'la",
  fullTitle: 'Leave the World Behind (2023)',
  id: 'tt12747748',
  imDbRating: '6.5',
  imDbRatingCount: '91368',
  image:
    'https://m.media-amazon.com/images/M/MV5BMTUzM2I3NDEtMjNhYi00NTQ0LThmZDItZTMyMzM2MjJmZGRjXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_Ratio0.6763_AL_.jpg',
  rank: '1',
  rankUpDown: '+2',
  title: 'Leave the World Behind',
  year: '2023',
};

export const TopMoviesHomepage = () => {
  const popularMovies = useGetLimitedPopularMoviesIDPoster();
  if (popularMovies.isLoading) {
    return <Text variant='red'>TODO skeleton</Text>;
  }
  if (!popularMovies.isSuccess) {
    return <Text variant='red'>TODO error message</Text>;
  }

  return (
    <div>
      {/* <Button onClick={handleClick}>fetch</Button> */}
      <PosterLinkList IDPosters={popularMovies.data} />
      <PosterLink movie={testMovie} />
    </div>
  );
};
