'use client';

import { useGetReviewsByUserId } from '@/modules/reviews/hooks/useGetReviewsByUserId/useGetReviewsByUserId';
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

  const trimmedReviews =
    limit > 0 ? reviews.data.slice(0, limit) : reviews.data;

  return (
    <div>
      {trimmedReviews.map((review) => (
        <ReviewPreview
          key={review.id}
          rating={review.rating}
          writtenReview={review.writtenReview}
          movieId={review.movieId}
          reviewId={review.id}
        />
      ))}
    </div>
  );
};
