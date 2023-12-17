import { Text } from '@/modules/Text/Text';
import React from 'react';

type MovieRatingsProps = {
	imdbRating: number;
	moviesappRating: number;
	moviesappReviewCount: number;
};

export const MovieRatings = ({
	imdbRating,
	moviesappRating,
	moviesappReviewCount,
}: MovieRatingsProps) => {
	return (
		<>
			<div className="mt-6 mx-8 px-10 py-4 bg-dark-blue">
				<div className="border-b border-light-blue-lighter pb-1 mb-2">
					<Text variant="subtitle">RATINGS</Text>
				</div>
				<div className="flex justify-between mb-3">
					<Text variant="description">imDB rating:</Text>
					<Text variant="green">{imdbRating}</Text>
				</div>
				<div className="flex justify-between">
					<Text variant="description">moviesApp rating:</Text>
					<Text variant="green">{moviesappRating}</Text>
				</div>
				<div className="flex justify-between">
					<Text variant="description">Review count:</Text>
					<Text variant="green">{moviesappReviewCount}</Text>
				</div>
			</div>
		</>
	);
};
