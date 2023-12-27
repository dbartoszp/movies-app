import { Text } from '@/modules/Text/Text';
import React from 'react';

type MovieRatingsProps = {
	imDbRating: string;
	imDbRatingVotes: string;
	//   moviesappRating: number;
	//   moviesappReviewCount: number;
};

export const MovieRatings = ({
	imDbRating,
	imDbRatingVotes, //   moviesappRating,
	//   moviesappReviewCount,
}: MovieRatingsProps) => {
	return (
		<div className="mx-8 mt-6 bg-dark-blue px-10 py-4 md:mx-auto md:w-full">
			<div className="mb-2 border-b border-light-blue-lighter pb-1">
				<Text variant="subtitle">RATINGS</Text>
			</div>
			<div className="mb-3 flex justify-around">
				<Text variant="description">imDB rating:</Text>
				<Text variant="green">{imDbRating}</Text>
			</div>
			<div className="mb-3 flex justify-around">
				<Text variant="description">imDB rating votes:</Text>
				<Text variant="green">{imDbRatingVotes}</Text>
			</div>
			{/* <div className='flex justify-between'>
        <Text variant='description'>moviesApp rating:</Text>
        <Text variant='green'>{moviesappRating}</Text>
      </div>
      <div className='flex justify-between'>
        <Text variant='description'>Review count:</Text>
        <Text variant='green'>{moviesappReviewCount}</Text>
      </div> */}
		</div>
	);
};
