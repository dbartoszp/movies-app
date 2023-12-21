import Image from 'next/image';
import { MovieDescription } from '@/modules/moviePage/MovieDescription/MovieDescription';
import { MovieMainInfo } from '@/modules/moviePage/MovieMainInfo/MovieMainInfo';
import { MovieRatings } from '@/modules/moviePage/MovieRatings/MovieRatings';
import { FullCastContainer } from '@/modules/moviePage/FullCastContainer/FullCastContainer';
import { MovieAwardsContainer } from '@/modules/moviePage/MovieAwards/MovieAwardsContainer';

const testMovieData = {
  poster:
    'https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
  title: 'The Boy and the Heron',
  year: '2023',
  director: 'Hayao Miyazaki',
  length: 124,
  trailer: 'https://www.youtube.com/watch?v=t5khm-VjEu4',
  actors: [
    { name: 'Soma Santoki', id: 'nm0001067', asCharacter: 'testChar1' },
    { name: 'Masaki Suda', id: 'nm0001068', asCharacter: 'testChar2' },
    { name: 'Masaki Suda', id: 'nm0001068', asCharacter: 'testChar2' },
    { name: 'Masaki Suda', id: 'nm0001068', asCharacter: 'testChar2' },
    { name: 'Masaki Suda', id: 'nm0001068', asCharacter: 'testChar2' },
    { name: 'Masaki Suda', id: 'nm0001068', asCharacter: 'testChar2' },
  ],
  awards: [
    {
      title: '2019 Winner OFTA Film Hall of Fame',
      for: 'Motion Picture',
      image:
        'https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6757_AL_.jpg',
    },
    {
      title: '2019 Winner OFTA Film Hall of Fame',
      for: 'Motion Picture',
      image:
        'https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6757_AL_.jpg',
    },
    {
      title: '2019 Winner OFTA Film Hall of Fame',
      for: 'Motion Picture',
      image:
        'https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6757_AL_.jpg',
    },
  ],
  imdbRating: 4.6,
  moviesappRating: 4.5,
  moviesappReviewCount: 2137,
  description: `After losing his mother during the war, young Mahito moves to his family's estate in the countryside. There, a series of mysterious events lead him to a secluded and ancient tower, home to a mischievous gray heron.`,
};

export default function MoviePage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center md:mt-36 md:flex-row'>
      <div className='mb-8 w-full md:mb-0 md:w-1/5'>
        <Image
          src={testMovieData.poster}
          width={1000}
          height={1463}
          alt={`${testMovieData.title} poster`}
          layout='responsive'
        />
      </div>

      <div className='flex w-full flex-col space-y-4 md:w-1/2 md:items-center'>
        <MovieMainInfo movie={testMovieData} />
        <MovieDescription description={testMovieData.description} />
        <MovieRatings
          imdbRating={testMovieData.imdbRating}
          moviesappRating={testMovieData.moviesappRating}
          moviesappReviewCount={testMovieData.moviesappReviewCount}
        />
        <FullCastContainer actors={testMovieData.actors} />
        <MovieAwardsContainer awards={testMovieData.awards} />
      </div>
    </div>
  );
}
