type Review = {
  id: string;
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
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>Review: {review.writtenReview}</p>
        </div>
      ))}
    </div>
  );
};
