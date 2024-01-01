import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const ListInfoSkeleton = () => {
  return (
    <div className='flex flex-row items-center justify-center p-2 pb-4  md:min-h-screen'>
      <div className='mt-12 flex flex-col space-y-12 bg-dark-blue px-6 py-4 md:px-36 md:py-12'>
        <div className='flex flex-row items-center justify-between'>
          <div className='mb-7 flex flex-col space-y-4'>
            <div>
              <Skeleton height={70} width={300} />
              <Skeleton height={50} width={300} />
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-6'>
          <Skeleton height={50} width={300} count={7} />
        </div>
      </div>
    </div>
  );
};
