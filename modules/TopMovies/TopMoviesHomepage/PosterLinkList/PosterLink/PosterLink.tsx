import Image from 'next/image';
import { Link } from '../../../../ui/Button/Link';
import { Text } from '@/modules/ui/Text/Text';

type Movie = {
  id: string;
  image?: string;
  title: string;
};

type PosterLinkProps = {
  movie: Movie;
};

export const PosterLink = ({ movie }: PosterLinkProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Link href={`/movie/${movie.id}`}>
        <Image
          alt={`poster of ${movie.title}`}
          src={movie.image || ''}
          height={300}
          width={200}
        />
      </Link>
      <Text>{movie.title}</Text>
    </div>
  );
};
