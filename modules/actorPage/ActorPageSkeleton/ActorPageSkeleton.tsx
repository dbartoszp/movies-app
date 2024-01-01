import { ActorInfoSkeleton } from './ActorInfoSkeleton/ActorInfoSkeleton';
import { ActorImageSkeleton } from './ActorImageSkeleton/ActorImageSkeleton';

export const ActorPageSkeleton = () => {
  return (
    <div className='md:mt-20 md:flex md:min-h-screen md:flex-row md:items-center md:justify-around'>
      <ActorImageSkeleton />
      <div>
        <ActorInfoSkeleton />
      </div>
    </div>
  );
};
