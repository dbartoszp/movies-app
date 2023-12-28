import React from 'react';
import { PosterLinkSkeleton } from './PosterLinkSkeleton/PosterLinkSkeleton';

export const PosterLinkListSkeleton = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4 md:grid-cols-6'>
      <PosterLinkSkeleton />
      <PosterLinkSkeleton />
      <PosterLinkSkeleton />
      <PosterLinkSkeleton />
      <PosterLinkSkeleton />
      <PosterLinkSkeleton />
    </div>
  );
};
