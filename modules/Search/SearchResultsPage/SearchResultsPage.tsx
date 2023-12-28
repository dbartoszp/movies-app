'use client';

import { Text } from '@/modules/Text/Text';
import { MoviesList } from '@/modules/movies/MoviesList/MoviesList';
import { useGetMoviesByTitle } from '@/modules/movies/useGetMoviesByTitle/useGetMoviesByTitle';
import { Button } from '@/modules/ui/Button/Button';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { useSearchParams } from 'next/navigation';

export const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const movies = useGetMoviesByTitle('inception');

  const titleQuery = searchParams.get('query') || '';
  const pageQuery = searchParams.get('page') || 1;

  if (movies.isLoading) return <Text>TODO skeleton</Text>;
  if (!movies.isSuccess) return <ErrorMessage />;

  return (
    <div>
      <Button onClick={() => console.log(movies.data)}>test</Button>
      <MoviesList movies={movies.data.results} />
    </div>
  );
};
