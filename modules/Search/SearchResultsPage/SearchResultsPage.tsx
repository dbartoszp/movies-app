'use client';

import { Text } from '@/modules/Text/Text';
import { MoviesList } from '@/modules/movies/MoviesList/MoviesList';
import { useGetMoviesByTitle } from '@/modules/movies/useGetMoviesByTitle/useGetMoviesByTitle';
import { Button } from '@/modules/ui/Button/Button';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const SearchResultsPage = () => {
  const searchParams = useSearchParams();

  const titleQuery = searchParams.get('query') || '';
  const pageQuery = searchParams.get('page') || 1;

  const [fetchedMovies, setFetchedMovies] = useState([]);

  const movies = useGetMoviesByTitle(titleQuery);

  if (movies.isLoading) return <Text>TODO skeleton</Text>;
  if (!movies.isSuccess) return <ErrorMessage />;

  return (
    <div>
      <Button onClick={() => console.log(movies.data.results)}>test</Button>
      <MoviesList movies={movies.data.results} />
    </div>
  );
};
