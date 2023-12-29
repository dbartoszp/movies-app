import { Link } from '@/modules/ui/Button/Link';

type CreateReviewButtonProps = {
  movieId: string;
};

export const CreateReviewButton = ({ movieId }: CreateReviewButtonProps) => {
  return <Link href={`/reviewCreator/${movieId}`}>Review this movie</Link>;
};
