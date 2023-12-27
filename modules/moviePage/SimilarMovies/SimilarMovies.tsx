import { Text } from '@/modules/Text/Text';
import { SingleSimilarMovie } from './SingleSimilarMovie/SingleSimilarMovie';

const SIMILAR_MOVIES_COUNT = 4;

type Similars = {
	id: string;
	title: string;
	image?: string;
	imDbRating?: string;
};

type SimilarMoviesProps = {
	similars: Similars[];
};

export const SimilarMovies = ({ similars }: SimilarMoviesProps) => {
	const slicedSimilars = similars.slice(0, SIMILAR_MOVIES_COUNT);

	return (
		<>
			<div className="flex items-center justify-center">
				<Text variant="subtitleXL">You might also like...</Text>
			</div>
			<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
				{slicedSimilars.map((movie) => (
					<SingleSimilarMovie key={movie.id} movie={movie} />
				))}
			</div>
		</>
	);
};
