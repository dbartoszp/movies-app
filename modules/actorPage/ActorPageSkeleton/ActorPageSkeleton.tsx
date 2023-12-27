import React from 'react';
import { ActorInfoSkeleton } from './ActorInfoSkeleton/ActorInfoSkeleton';
import { ActorImageSkeleton } from './ActorImageSkeleton/ActorImageSkeleton';

export const ActorPageSkeleton = () => {
	return (
		<div className="md:flex md:min-h-screen md:items-center md:justify-around md:mt-20 md:flex-row">
			<ActorImageSkeleton />
			<div>
				<ActorInfoSkeleton />
			</div>
		</div>
	);
};
