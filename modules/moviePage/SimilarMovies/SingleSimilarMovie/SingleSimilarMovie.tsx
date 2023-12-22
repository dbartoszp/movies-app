import { Text } from '@/modules/Text/Text';
import { Link } from '@/modules/ui/Button/Link';
import Image from 'next/image';

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
      {movie.image && (
        <div className='flex flex-col items-center justify-center text-center'>
          <Link href={`/movie/${movie.id}`}>
            <Image
              alt={`poster of ${movie.title}`}
              src={movie.image}
              height={200}
              width={100}
            />
          </Link>
          <Text variant='title'>{movie.title}</Text>
        </div>
      )}
    </div>
  );
};
