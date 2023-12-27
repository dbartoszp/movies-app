import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const ActorImageSkeleton = () => {
	return (
		<div className="mb-8 w-full md:mb-0 md:w-1/5">
			<Skeleton width={500} height={400} />
		</div>
	);
};
