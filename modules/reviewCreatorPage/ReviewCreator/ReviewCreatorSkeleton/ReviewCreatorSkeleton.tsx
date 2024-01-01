import Skeleton from 'react-loading-skeleton';

export const ReviewCreatorSkeleton = () => {
  return (
    <div className='flex flex-col space-y-10'>
      <Skeleton count={2} height={70} width={250} />
      <Skeleton count={2} height={70} width={250} />
    </div>
  );
};
