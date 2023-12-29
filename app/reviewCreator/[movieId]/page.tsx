'use client';

import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { RatingButton } from '@/modules/reviewCreatorPage/RatingButton/RatingButton';
import { useCreateMovieReview } from '@/modules/reviews/hooks/useCreateMovieReview/useCreateMovieReview';
import { Button } from '@/modules/ui/Button/Button';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { Text } from '@/modules/ui/Text/Text';
import { useState } from 'react';

const MAX_RATING = 10;

export default function ReviewCreatorPage({
  params,
}: {
  params: { movieId: string };
}) {
  const movie = useGetMovieById(params.movieId);
  const createMovieReview = useCreateMovieReview();
  const [rating, setRating] = useState(0);
  const [writtenReview, setWrittenReview] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitReview = () => {
    createMovieReview.mutate({
      rating,
      writtenReview,
      movieId: params.movieId,
    });
    setIsSubmitted(true);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  const handleWrittenReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setWrittenReview(event.target.value);
  };

  if (movie.isLoading) return <Text>TODO SKELETON REVIEW CREATOR</Text>;
  if (!movie.isSuccess) return <ErrorMessage />;

  if (isSubmitted) return <Text>Review submitted!</Text>;

  return (
    <main className='bg-dark-blue p-6'>
      <Text variant='title'>
        Create a review for <strong>{movie.data.fullTitle}</strong>
      </Text>
      <Text>Select your rating from 1 to 10:</Text>
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <RatingButton
          isHighlighted={rating === index + 1}
          key={index}
          onRating={() => handleRatingChange(index + 1)}
          rating={index + 1}
        />
      ))}
      <Text>Write your review:</Text>
      <textarea
        value={writtenReview}
        onChange={handleWrittenReviewChange}
        className='w-full rounded-lg bg-light-blue-lighter p-2 text-dark-blue'
      />
      <Text variant='subtitleXL'>Summary:</Text>
      <Text>
        {movie.data.fullTitle} - {rating}/10
      </Text>
      <Text variant='subtitle'>{writtenReview}</Text>
      <Button variant='green' size='lg' onClick={handleSubmitReview}>
        Submit your review!
      </Button>
    </main>
  );
}
