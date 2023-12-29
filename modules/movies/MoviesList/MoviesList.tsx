import { Text } from '@/modules/ui/Text/Text';
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
  const validMovies = movies.filter(
    (movie) => movie.id && movie.image && movie.title
  );

  return (
    <div className='grid grid-cols-3 gap-4 p-4 md:grid-cols-6'>
      {validMovies.map((movie) => {
        const posterLinkMovie = {
          id: movie.id,
          image: movie.image,
          title: movie.title,
        };
        return (
          <div className='text-center' key={movie.id}>
            <PosterLink movie={posterLinkMovie} />
          </div>
        );
      })}
    </div>
  );
};
