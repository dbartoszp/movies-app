import Skeleton from 'react-loading-skeleton';

export const MyListsSkeleton = () => {
  return (
    <div className='mt-6 flex flex-col space-y-6'>
      <Skeleton width={300} height={100} />
      <Skeleton width={300} height={100} />
      <Skeleton width={300} height={100} />
    </div>
  );
};
