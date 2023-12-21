import Image from 'next/image';
import { Link } from '../../../../ui/Button/Link';

type Movie = {
  id: string;
  image: string;
  title: string;
};

type PosterLinkProps = {
  movie: Movie;
};

export const PosterLink = ({ movie }: PosterLinkProps) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <Image
        className='w-1/3'
        alt={`poster of ${movie.title}`}
        src={movie.image}
        height={2222}
        width={1482}
      />
    </Link>
  );
};
