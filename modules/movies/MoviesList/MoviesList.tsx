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
  return <div>MoviesList</div>;
};
