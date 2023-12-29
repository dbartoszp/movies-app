'use client';

import { useGetReviewsByUserId } from '@/modules/reviews/hooks/useGetReviewsByUserId/useGetReviewsByUserId';
import { Link } from '@/modules/ui/Button/Link';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { ReviewPreview } from '@/modules/ui/ReviewPreview/ReviewPreview';
import { Text } from '@/modules/ui/Text/Text';

type MyReviewsProps = {
  userId: string;
  limit?: number;
};

export const MyReviews = ({ userId, limit = 0 }: MyReviewsProps) => {
  const reviews = useGetReviewsByUserId(userId);

  if (reviews.isLoading) return <Text>TODO SKELETON MY REVIEWS</Text>;
  if (!reviews.isSuccess) return <ErrorMessage />;

  const sortedAndTrimmedReviews = reviews.data
    .sort((a, b) => b.id - a.id)
    .slice(0, limit > 0 ? limit : reviews.data.length);

  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex flex-col items-center justify-center space-y-4'>
        {sortedAndTrimmedReviews.map((review) => (
          <ReviewPreview
            key={review.id}
            rating={review.rating}
            writtenReview={review.writtenReview}
            movieId={review.movieId}
            reviewId={review.id}
          />
        ))}
        {(limit > 0 ||
          reviews.data.length - sortedAndTrimmedReviews.length < 0) && (
          <>
            <Text variant='subtitle'>
              ...and {reviews.data.length - sortedAndTrimmedReviews.length}{' '}
              more!
            </Text>
            <div className='mx-auto pt-2'>
              <Link href='/myReviews' variant='green' size='lg'>
                See all your reviews
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
