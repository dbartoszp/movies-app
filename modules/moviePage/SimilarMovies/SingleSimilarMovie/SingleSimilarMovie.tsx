import { Text } from '@/modules/Text/Text';

type SimilarMovie = {
  id: string;
  title: string;
  image?: string;
  imDbRating?: string;
};

type SimilarMovieProps = {
  movie: SimilarMovie;
};

export const SingleSimilarMovie = ({ movie }: SimilarMovieProps) => {
  return (
    <div>
      <Text>{movie.title}</Text>
    </div>
  );
};
