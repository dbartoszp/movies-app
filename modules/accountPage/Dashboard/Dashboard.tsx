'use client';

import { useCreateMovieReview } from '@/modules/reviews/hooks/useCreateMovieReview/useCreateMovieReview';
import { useDeleteMovieReview } from '@/modules/reviews/hooks/useDeleteMovieReview/useDeleteMovieReview';
import { Button } from '@/modules/ui/Button/Button';

const testMovieReview = {
  movieId: 'tt12747748',
  writtenReview: 'pretty darn good',
  rating: 6,
};

export const Dashboard = () => {
  const createMovieReview = useCreateMovieReview();
  const deleteMovieReview = useDeleteMovieReview();
  const handleAddReview = () => {
    createMovieReview.mutate({
      rating: testMovieReview.rating,
      movieId: testMovieReview.movieId,
      writtenReview: testMovieReview.writtenReview,
    });
  };

  const handleDeleteReview = () => {
    deleteMovieReview.mutate(11);
  };

  return (
    <div>
      <Button size='lg' variant='green' onClick={handleAddReview}>
        test add review
      </Button>
      <Button size='lg' variant='danger' onClick={handleDeleteReview}>
        test delete review
      </Button>
    </div>
  );
};
