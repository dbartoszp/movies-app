import { ReviewPreview } from '@/modules/ui/ReviewPreview/ReviewPreview';
import { Text } from '@/modules/ui/Text/Text';

type Review = {
  id: number;
  userId: string;
  movieId: string;
  rating: number;
  writtenReview: string;
  createdAt: string;
};

type LatestReviewsProps = {
  reviews: Review[];
};

export const LatestReviews: React.FC<LatestReviewsProps> = ({ reviews }) => {
  if (reviews.length === 0) return;

  return (
    <div className='flex flex-col items-center space-y-2'>
      <Text variant='subtitleXL'>Latest reviews:</Text>
      <div className='mx-auto flex w-3/4 flex-col space-y-4'>
        {reviews.map((review) => (
          <ReviewPreview
            key={review.id}
            rating={review.rating}
            writtenReview={review.writtenReview}
            movieId={review.movieId}
            reviewId={review.id}
            date={review.createdAt}
          />
        ))}
      </div>
    </div>
  );
};
