import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { Text } from '../Text/Text';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { HiMiniTrash } from 'react-icons/hi2';
import { Button } from '../Button/Button';
import { useDeleteMovieReview } from '@/modules/reviews/hooks/useDeleteMovieReview/useDeleteMovieReview';
import { Link } from '../Button/Link';
import { MouseEvent } from 'react';

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

  const handleDeleteReview = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteReview.mutate(reviewId);
  };

  if (movie.isLoading) return <Text>TODO REVIEWPREVIEW SKELETON</Text>;
  if (!movie.isSuccess) return <ErrorMessage />;

  return (
    <div className='w-11/12'>
      <div className='flex flex-row justify-between bg-dark-blue p-2'>
        <div className='flex flex-col space-y-2 p-3'>
          <Link href={`/movie/${movieId}`}>
            <div className='flex flex-row justify-between'>
              <Text>{movie.data.fullTitle}</Text>
            </div>
            <Text variant={rating > 4 ? 'green' : 'danger'}>
              Rated <strong>{rating}/10</strong>
            </Text>
            <div className='overflow-none break-all italic'>
              <Text variant='subtitle'>&quot;{writtenReview}&quot;</Text>
            </div>
          </Link>
        </div>
        <Button onClick={handleDeleteReview}>
          <Text variant='danger'>
            <HiMiniTrash size={30} />
          </Text>
        </Button>
      </div>
    </div>
  );
};
