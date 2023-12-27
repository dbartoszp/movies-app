import { MovieImageSkeleton } from './MovieImageSkeleton/MovieImageSkeleton';
import { MovieInfoSkeleton } from './MovieInfoSkeleton/MovieInfoSkeleton';

export const MoviePageSkeleton = () => {
	return (
		<div className="md:flex md:min-h-screen md:items-center md:justify-around md:mt-20 md:flex-row">
			<MovieImageSkeleton />
			<div>
				<MovieInfoSkeleton />
			</div>
		</div>
	);
};
