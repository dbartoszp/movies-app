import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const MovieInfoSkeleton = () => {
  return (
    <>
      <Skeleton width={400} height={30} count={3} />
      <Skeleton width={400} height={100} />
    </>
  );
};
