import { MovieImageSkeleton } from './MovieImageSkeleton/MovieImageSkeleton';
import { MovieInfoSkeleton } from './MovieInfoSkeleton/MovieInfoSkeleton';

export const MoviePageSkeleton = () => {
  return (
    <div>
      <MovieImageSkeleton />
      <MovieInfoSkeleton />
    </div>
  );
};
