import { Text } from '@/modules/Text/Text';
import { SingleSimilarMovie } from './SingleSimilarMovie/SingleSimilarMovie';

const SIMILAR_MOVIES_COUNT = 4;

type Similars = {
  id: string;
  title: string;
  image?: string;
  imDbRating?: string;
};

type SimilarMoviesProps = {
  similars: Similars[];
};

export const SimilarMovies = ({ similars }: SimilarMoviesProps) => {
  return (
    <div>
      <Text variant='subtitle'>You might also like...</Text>
      {similars.map((movie) => (
        <SingleSimilarMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
