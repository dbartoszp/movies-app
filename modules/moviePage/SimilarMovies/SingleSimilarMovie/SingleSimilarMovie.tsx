import { Text } from '@/modules/Text/Text';
import { PosterLink } from '@/modules/TopMovies/TopMoviesHomepage/PosterLinkList/PosterLink/PosterLink';
import { Link } from '@/modules/ui/Button/Link';
import Image from 'next/image';

type SimilarMovie = {
	id: string;
	title: string;
	image?: string;
	imDbRating?: string;
};

type SimilarMovieProps = {
	movie: SimilarMovie;
};

export const SingleSimilarMovie = ({ movie }: SimilarMovieProps) => {
	const posterLinkMovie = {
		id: movie.id,
		title: movie.title,
		image: movie.image,
	};

	return (
		<div>
			{movie.image && (
				<div className="flex flex-col items-center justify-center text-center">
					<PosterLink movie={posterLinkMovie} />

					<Text>{movie.title}</Text>
				</div>
			)}
		</div>
	);
};
