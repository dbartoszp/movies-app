import { Link } from '@/modules/ui/Button/Link';

type CreateReviewButtonProps = {
  movieId: string;
};

export const CreateReviewButton = ({ movieId }: CreateReviewButtonProps) => {
  return (
    <div className='mx-auto'>
      <Link variant='green' size='md' href={`/reviewCreator/${movieId}`}>
        Review this movie
      </Link>
    </div>
  );
};
