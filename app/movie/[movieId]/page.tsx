'use client';

import { Text } from '@/modules/ui/Text/Text';
import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { MoviePageSkeleton } from '@/modules/moviePage/MoviePageSkeleton/MoviePageSkeleton';
import { MovieDescription } from '@/modules/moviePage/MovieDescription/MovieDescription';
import { MovieMainInfo } from '@/modules/moviePage/MovieMainInfo/MovieMainInfo';
import { MovieRatings } from '@/modules/moviePage/MovieRatings/MovieRatings';
import { FullCastContainer } from '@/modules/moviePage/FullCastContainer/FullCastContainer';
import { MovieAwardsContainer } from '@/modules/moviePage/MovieAwards/MovieAwardsContainer';
import { MovieImage } from '@/modules/moviePage/MovieImage/MovieImage';
import { GenreList } from '@/modules/moviePage/GenreList/GenreList';
import { BoxOffice } from '@/modules/moviePage/BoxOffice/BoxOffice';
import { SimilarMovies } from '@/modules/moviePage/SimilarMovies/SimilarMovies';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { CreateReviewButton } from '@/modules/moviePage/CreateReviewButton/CreateReviewButton';

export default function MoviePage({ params }: { params: { movieId: string } }) {
  const movie = useGetMovieById(params.movieId);

  if (movie.isLoading) {
    return <MoviePageSkeleton />;
  }
  if (!movie.isSuccess) {
    console.log(movie.error);
    return <ErrorMessage />;
  }

  const movieData = movie.data;

  return (
    <main className='flex min-h-screen flex-col items-center justify-center md:mt-20 md:flex-row md:items-start md:justify-around'>
      <MovieImage image={movieData.image} title={movieData.title} />

      <div className='flex w-full flex-col space-y-4 md:w-1/2 '>
        <MovieMainInfo
          title={movieData.title}
          year={movieData.year}
          directors={movieData.directors || 'Unknown'}
          trailer={movieData.trailer}
          runtimeStr={movieData.runtimeStr || 'Unknown runtime'}
        />
        <CreateReviewButton movieId={movieData.id} />
        <GenreList genreList={movieData.genreList} />
        <MovieAwardsContainer awards={movieData.awards || 'No awards yet'} />
        <MovieDescription description={movieData.plot} />
        <MovieRatings
          imDbRating={movieData.imDbRating || 'Not yet rated'}
          imDbRatingVotes={movieData.imDbRatingVotes || 'Not yet rated'}
          // moviesappRating={movieData.moviesappRating}
          // moviesappReviewCount={movieData.moviesappReviewCount}
        />
        <FullCastContainer starList={movieData.starList} />
        <BoxOffice boxOffice={movieData.boxOffice} />
        <SimilarMovies similars={movieData.similars} />
      </div>
    </main>
  );
}
