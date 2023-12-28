import { Text } from '@/modules/Text/Text';
import { PosterLink } from '@/modules/TopMovies/TopMoviesHomepage/PosterLinkList/PosterLink/PosterLink';

type Movie = {
  id: string;
  resultType: 'Movie';
  image: string;
  title: string;
  description: string;
};
type MoviesListProps = {
  movies: Movie[];
};

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4 md:grid-cols-6'>
      {movies.map((movie) => {
        const posterLinkMovie = {
          id: movie.id,
          image: movie.image,
          title: movie.title,
        };
        return (
          <div className='text-center' key={movie.id}>
            <PosterLink movie={posterLinkMovie} />
            <Text>{movie.title}</Text>
          </div>
        );
      })}
    </div>
  );
};
