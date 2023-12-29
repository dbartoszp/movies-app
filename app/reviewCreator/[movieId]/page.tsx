'use client';

import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { RatingButton } from '@/modules/reviewCreatorPage/RatingButton/RatingButton';
import { ReviewSubmitted } from '@/modules/reviewCreatorPage/ReviewSubmitted/ReviewSubmitted';
import { useCreateMovieReview } from '@/modules/reviews/hooks/useCreateMovieReview/useCreateMovieReview';
import { Button } from '@/modules/ui/Button/Button';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { Text } from '@/modules/ui/Text/Text';
import { useState } from 'react';

const MAX_RATING = 10;
const CHARACTER_LIMIT = 100;

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

  if (isSubmitted) return <ReviewSubmitted />;

  return (
    <main className='flex flex-col space-y-6 p-6 md:mx-auto md:mt-32 md:w-1/2 md:space-y-8'>
      <Text variant='title'>
        Create a review for <strong>{movie.data.fullTitle}</strong>
      </Text>
      <div className=' flex flex-col items-center justify-center bg-dark-blue p-4'>
        <Text>Select your rating from 1 to 10:</Text>
        <div className='mt-4'>
          {Array.from({ length: MAX_RATING }, (_, index) => (
            <RatingButton
              isHighlighted={rating === index + 1}
              key={index}
              onRating={() => handleRatingChange(index + 1)}
              rating={index + 1}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col space-y-2'>
        <Text>Write your review:</Text>
        <textarea
          maxLength={CHARACTER_LIMIT}
          value={writtenReview}
          onChange={handleWrittenReviewChange}
          className='h-36 w-full resize-none bg-dark-blue p-4'
        />
      </div>
      <Text variant='subtitle'>
        {CHARACTER_LIMIT - writtenReview.length} characters left
      </Text>
      <Text variant='subtitleXL'>Summary:</Text>
      <div>
        <Text>
          {movie.data.fullTitle} - <strong>{rating}/10</strong>
        </Text>
        {writtenReview !== '' && (
          <div className='overflow-none break-words italic'>
            <Text variant='subtitle'>&quot;{writtenReview}&quot;</Text>
          </div>
        )}
      </div>
      {rating !== 0 && writtenReview.trim() !== '' ? (
        <Button variant='green' size='lg' onClick={handleSubmitReview}>
          Submit your review!
        </Button>
      ) : (
        <Text variant='danger'>
          Please rate the movie and write the review first!
        </Text>
      )}
    </main>
  );
}
