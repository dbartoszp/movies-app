'use client';

import { Text } from '@/modules/Text/Text';
import { MoviesList } from '@/modules/movies/MoviesList/MoviesList';
import { useGetMoviesByTitle } from '@/modules/movies/useGetMoviesByTitle/useGetMoviesByTitle';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { useSearchParams } from 'next/navigation';
import { SearchResultsPageSkeleton } from './SearchResultsPageSkeleton/SearchResultsPageSkeleton';
import { SearchResultsPageEmptyQuery } from './SearchResultsPageEmptyQuery/SearchResultsPageEmptyQuery';

export const SearchResultsPage = () => {
  const searchParams = useSearchParams();

  const titleQuery = searchParams.get('query') || '';
  const pageQuery = searchParams.get('page') || 1;

  const movies = useGetMoviesByTitle(titleQuery);

  if (titleQuery === '') return <SearchResultsPageEmptyQuery />;
  if (movies.isLoading) return <SearchResultsPageSkeleton />;
  if (!movies.isSuccess) return <ErrorMessage />;

  return (
    <div className='bg-dark-blue md:mx-24 md:my-12 md:p-6'>
      <MoviesList movies={movies.data.results} />
    </div>
  );
};
