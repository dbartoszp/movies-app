import { Text } from '@/modules/Text/Text';

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
    <div>
      {movies.map((movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </div>
  );
};
