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
    <div>
      {IDPosters.map((movie) => (
        <PosterLink movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
