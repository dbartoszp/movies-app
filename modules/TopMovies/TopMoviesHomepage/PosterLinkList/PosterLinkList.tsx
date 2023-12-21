import React from 'react';
import { PosterLink } from './PosterLink/PosterLink';

type IDPoster = {
  id: string;
  image: string;
  title: string;
};

type PosterLinkListProps = {
  IDPosters: IDPoster[];
};

export const PosterLinkList = ({ IDPosters }: PosterLinkListProps) => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4 md:grid-cols-6'>
      {IDPosters.map((movie) => (
        <PosterLink key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
