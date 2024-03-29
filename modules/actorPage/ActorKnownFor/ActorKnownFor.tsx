import { Text } from '@/modules/ui/Text/Text';
import { KnownForSingleMovie } from './KnownForSingleMovie/KnownForSingleMovie';

type Movie = {
  title: string;
  id: string;
  fullTitle?: string | null | undefined;
  year?: string | null | undefined;
  role?: string | undefined;
  image?: string | undefined;
};

type ActorKnownForProps = {
  knownFor: Movie[];
};
export const ActorKnownFor = ({ knownFor }: ActorKnownForProps) => {
  return (
    <div className='my-6 pt-6 text-center'>
      <div>
        <Text variant='subtitleXL'>Known for:</Text>
      </div>
      <div className='grid grid-cols-2 gap-4 p-4 md:grid-cols-4'>
        {knownFor.map((movie) => (
          <KnownForSingleMovie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            fullTitle={movie.fullTitle || ''}
            year={movie.year || ''}
            role={movie.role || ''}
            image={movie.image || ''}
          />
        ))}
      </div>
    </div>
  );
};
