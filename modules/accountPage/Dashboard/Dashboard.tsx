'use client';

import { useCreateMovieReview } from '@/modules/reviews/hooks/useCreateMovieReview/useCreateMovieReview';
import { Button } from '@/modules/ui/Button/Button';

const testMovieReview = {
  movieId: 'tt12747748',
  writtenReview: 'pretty darn good',
  rating: 6,
};

export const Dashboard = () => {
  const createMovieReview = useCreateMovieReview();
  const handleClick = () => {
    createMovieReview.mutate({
      rating: testMovieReview.rating,
      movieId: testMovieReview.movieId,
      writtenReview: testMovieReview.writtenReview,
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>testaddreview</Button>
    </div>
  );
};
