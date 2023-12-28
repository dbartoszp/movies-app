import { Text } from '@/modules/Text/Text';
import { PosterLink } from '@/modules/TopMovies/TopMoviesHomepage/PosterLinkList/PosterLink/PosterLink';

type KnownForSingleMovieProps = {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  role: string;
  image: string;
};

export const KnownForSingleMovie = ({
  id,
  title,
  fullTitle,
  year,
  role,
  image,
}: KnownForSingleMovieProps) => {
  const movie = { id, title, image };

  return (
    <div>
      <PosterLink movie={movie} />
      <Text>
        as <strong>{role}</strong>
      </Text>
    </div>
  );
};
