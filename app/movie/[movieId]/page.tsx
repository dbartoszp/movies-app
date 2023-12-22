'use client';

import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { MovieDescription } from '@/modules/moviePage/MovieDescription/MovieDescription';
import { MovieMainInfo } from '@/modules/moviePage/MovieMainInfo/MovieMainInfo';
import { MovieRatings } from '@/modules/moviePage/MovieRatings/MovieRatings';
import { FullCastContainer } from '@/modules/moviePage/FullCastContainer/FullCastContainer';
import { MovieAwardsContainer } from '@/modules/moviePage/MovieAwards/MovieAwardsContainer';
import { Text } from '@/modules/Text/Text';
import { MovieImage } from '@/modules/moviePage/MovieImage/MovieImage';
import { MoviePageSkeleton } from '@/modules/moviePage/MoviePageSkeleton/MoviePageSkeleton';
import { GenreList } from '@/modules/moviePage/GenreList/GenreList';
import { BoxOffice } from '@/modules/moviePage/BoxOffice/BoxOffice';
import { SimilarMovies } from '@/modules/moviePage/SimilarMovies/SimilarMovies';

export default function MoviePage({ params }: { params: { movieId: string } }) {
  const movie = useGetMovieById(params.movieId);

  if (movie.isLoading) {
    return <MoviePageSkeleton />;
  }
  if (!movie.isSuccess) {
    console.log(movie.error);
    return <Text variant='danger'>TODO error message</Text>;
  }

  const movieData = movie.data;

  return (
    <div className='flex min-h-screen flex-col items-center justify-center md:mt-36 md:flex-row'>
      <MovieImage image={movieData.image} title={movieData.title} />

      <div className='flex w-full flex-col space-y-4 md:w-1/2 md:items-center'>
        <MovieMainInfo
          title={movieData.title}
          year={movieData.year}
          directors={movieData.directors || 'Unknown'}
          trailer={movieData.trailer}
          runtimeStr={movieData.runtimeStr || 'Unknown runtime'}
        />
        <GenreList genreList={movieData.genreList} />
        <MovieDescription description={movieData.plot} />
        <MovieRatings
          imDbRating={movieData.imDbRating || 'Not yet rated'}
          imDbRatingVotes={movieData.imDbRatingVotes || 'Not yet rated'}
          // moviesappRating={movieData.moviesappRating}
          // moviesappReviewCount={movieData.moviesappReviewCount}
        />
        <FullCastContainer starList={movieData.starList} />
        <MovieAwardsContainer awards={movieData.awards || 'No awards yet'} />
        <BoxOffice boxOffice={movieData.boxOffice} />
        <SimilarMovies similars={movieData.similars} />
      </div>
    </div>
  );
}
