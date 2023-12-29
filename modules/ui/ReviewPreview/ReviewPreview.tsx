import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { Text } from '../Text/Text';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { HiMiniTrash } from 'react-icons/hi2';
import { Button } from '../Button/Button';
import { useDeleteMovieReview } from '@/modules/reviews/hooks/useDeleteMovieReview/useDeleteMovieReview';

type ReviewPreviewProps = {
  rating: number;
  writtenReview: string;
  movieId: string;
  reviewId: number;
};

export const ReviewPreview = ({
  rating,
  writtenReview,
  movieId,
  reviewId,
}: ReviewPreviewProps) => {
  const movie = useGetMovieById(movieId);
  const deleteReview = useDeleteMovieReview();

  const handleDeleteReview = () => {
    deleteReview.mutate(reviewId);
  };

  if (movie.isLoading) return <Text>TODO REVIEWPREVIEW SKELETON</Text>;
  if (!movie.isSuccess) return <ErrorMessage />;

  return (
    <div>
      <div className='flex flex-row justify-between'>
        <Text>{movie.data.fullTitle}</Text>
        <Button onClick={handleDeleteReview}>
          <Text variant='danger'>
            <HiMiniTrash />
          </Text>
        </Button>
      </div>
      <Text variant={rating > 4 ? 'green' : 'danger'}>
        Rated <strong>{rating}/10</strong>
      </Text>
      <div className='italic'>
        <Text variant='subtitle'>&quot;{writtenReview}&quot;</Text>
      </div>
    </div>
  );
};
