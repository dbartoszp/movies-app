'use client';

import Image from 'next/image';
import { MovieDescription } from '@/modules/moviePage/MovieDescription/MovieDescription';
import { MovieMainInfo } from '@/modules/moviePage/MovieMainInfo/MovieMainInfo';
import { MovieRatings } from '@/modules/moviePage/MovieRatings/MovieRatings';
import { FullCastContainer } from '@/modules/moviePage/FullCastContainer/FullCastContainer';
import { MovieAwardsContainer } from '@/modules/moviePage/MovieAwards/MovieAwardsContainer';
import { Button } from '@/modules/ui/Button/Button';
import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { Text } from '@/modules/Text/Text';

export default function MoviePage({ params }: { params: { movieId: string } }) {
  const movie = useGetMovieById(params.movieId);

  if (movie.isLoading) {
    return <Text variant='red'>TODO skeleton</Text>;
  }
  if (!movie.isSuccess) {
    console.log(movie.error);
    return <Text variant='red'>TODO error message</Text>;
  }

  const movieData = movie.data;

  return (
    <div className='flex min-h-screen flex-col items-center justify-center md:mt-36 md:flex-row'>
      <div className='mb-8 w-full md:mb-0 md:w-1/5'>
        <Image
          src={movieData.image}
          width={600}
          height={1000}
          alt={`${movieData.title} poster`}
          layout='responsive'
        />
      </div>

      <div className='flex w-full flex-col space-y-4 md:w-1/2 md:items-center'>
        <MovieMainInfo
          title={movieData.title}
          year={movieData.year}
          directors={movieData.directors || 'Unkown'}
          trailer={movieData.trailer}
          runtimeStr={movieData.runtimeStr || 'Unknown runtime'}
        />
        <MovieDescription description={movieData.plot} />
        <MovieRatings
          imDbRating={movieData.imDbRating || 'Not yet rated'}
          imDbRatingVotes={movieData.imDbRatingVotes || 'Not yet rated'}
          // moviesappRating={movieData.moviesappRating}
          // moviesappReviewCount={movieData.moviesappReviewCount}
        />
        <FullCastContainer starList={movieData.starList} />
        <MovieAwardsContainer awards={movieData.awards || 'No awards yet'} />
      </div>
    </div>
  );
}
