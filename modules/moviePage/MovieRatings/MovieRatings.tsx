import { Text } from '@/modules/ui/Text/Text';

type MovieRatingsProps = {
  imDbRating: string;
  imDbRatingVotes: string;
  moviesappRating: number;
  moviesappReviewCount: number;
};

export const MovieRatings = ({
  imDbRating,
  imDbRatingVotes,
  moviesappRating,
  moviesappReviewCount,
}: MovieRatingsProps) => {
  return (
    <div className='mx-8 mt-6 bg-dark-blue px-10 py-4 md:mx-auto md:w-full'>
      <div className='mb-2 border-b border-light-blue-lighter pb-1'>
        <Text variant='subtitle'>RATINGS</Text>
      </div>
      <div className='mb-3 flex justify-around'>
        <Text variant='description'>imDB average rating:</Text>
        <Text variant='green'>{imDbRating}</Text>
      </div>
      <div className='mb-3 flex justify-around'>
        <Text variant='description'>imDB rating votes:</Text>
        <Text variant='green'>{imDbRatingVotes || 'No votes yet'}</Text>
      </div>
      {moviesappReviewCount > 0 ? (
        <>
          {' '}
          <div className='flex justify-between'>
            <Text variant='description'>moviesApp average rating:</Text>
            <Text variant='green'>{moviesappRating}</Text>
          </div>
          <div className='flex justify-between'>
            <Text variant='description'>moviesApp rating votes:</Text>
            <Text variant='green'>{moviesappReviewCount}</Text>
          </div>
        </>
      ) : (
        <Text variant='green'>Be the first one to review this movie!</Text>
      )}
    </div>
  );
};
