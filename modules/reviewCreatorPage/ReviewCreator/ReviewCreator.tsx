'use client';
import { useState } from 'react';
import { RatingButton } from '@/modules/reviewCreatorPage/RatingButton/RatingButton';
import { useCreateMovieReview } from '@/modules/reviews/hooks/useCreateMovieReview/useCreateMovieReview';
import { Button } from '@/modules/ui/Button/Button';
import { Text } from '@/modules/ui/Text/Text';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';

const MAX_RATING = 10;
const CHARACTER_LIMIT = 100;

type ReviewCreatorProps = {
  movieId: string;
};

export const ReviewCreator = ({ movieId }: ReviewCreatorProps) => {
  const movie = useGetMovieById(movieId);
  const createMovieReview = useCreateMovieReview();
  const [rating, setRating] = useState(0);
  const [writtenReview, setWrittenReview] = useState('');

  const handleSubmitReview = () => {
    createMovieReview.mutate({
      rating,
      writtenReview,
      movieId,
    });
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

  return (
    <>
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
          spellCheck={false}
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
    </>
  );
};
