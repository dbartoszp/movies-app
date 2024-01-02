import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { Text } from '../Text/Text';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { HiMiniTrash } from 'react-icons/hi2';
import { useDeleteMovieReview } from '@/modules/reviews/hooks/useDeleteMovieReview/useDeleteMovieReview';
import { Link } from '../Button/Link';
import { MouseEvent } from 'react';
import { ReviewPreviewSkeleton } from './ReviewPreviewSkeleton/ReviewPreviewSkeleton';
import { formatDate } from '@/modules/reviews/utils/formatDate';

type ReviewPreviewProps = {
  rating: number;
  writtenReview: string;
  movieId: string;
  reviewId: number;
  date: string;
};

export const ReviewPreview = ({
  rating,
  writtenReview,
  movieId,
  reviewId,
  date,
}: ReviewPreviewProps) => {
  const movie = useGetMovieById(movieId);
  const deleteReview = useDeleteMovieReview();
  const formattedDate = formatDate(date);

  const handleDeleteReview = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    deleteReview.mutate(reviewId);
  };

  if (movie.isLoading) return <ReviewPreviewSkeleton />;
  if (!movie.isSuccess) return <ErrorMessage />;

  return (
    <div className='w-full'>
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
            <Text variant='description'>
              <span className='text-xs'>{formattedDate}</span>
            </Text>
          </Link>
        </div>
        <div
          onClick={handleDeleteReview}
          className='my-auto cursor-pointer hover:bg-light-blue'
        >
          <span className='text-red-500'>
            <HiMiniTrash size={30} />
          </span>
        </div>
      </div>
    </div>
  );
};
