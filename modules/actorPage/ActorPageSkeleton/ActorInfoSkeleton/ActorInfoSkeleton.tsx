import Skeleton from 'react-loading-skeleton';

export const ActorInfoSkeleton = () => {
  return (
    <>
      <Skeleton width={400} height={30} count={3} />
      <Skeleton width={400} height={100} />
    </>
  );
};
