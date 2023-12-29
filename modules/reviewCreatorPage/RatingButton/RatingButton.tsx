import { Button } from '@/modules/ui/Button/Button';

type RatingButtonProps = {
  rating: number;
  onRating: (rating: number) => void;
  isHighlighted: boolean;
};

export const RatingButton = ({
  onRating,
  isHighlighted = false,
  rating,
}: RatingButtonProps) => {
  const handleClick = () => {
    onRating(rating);
  };

  return (
    <Button
      variant={isHighlighted ? 'green' : 'default'}
      onClick={handleClick}
      size='sm'
    >
      {rating}
    </Button>
  );
};
