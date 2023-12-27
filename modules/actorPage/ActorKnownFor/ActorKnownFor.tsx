import { Text } from '@/modules/Text/Text';
import { KnownForSingleMovie } from './KnownForSingleMovie/KnownForSingleMovie';

type Movie = {
	id: string;
	title: string;
	fullTitle: string;
	year: string;
	role: string;
	image: string;
};

type ActorKnownForProps = {
	knownFor: Movie[];
};

export const ActorKnownFor = ({ knownFor }: ActorKnownForProps) => {
	return (
		<div className="bg-dark-blue text-center my-6 pt-6">
			<Text variant="subtitle">KNOWN FOR:</Text>
			<div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-6">
				{knownFor.map((movie) => (
					<KnownForSingleMovie
						key={movie.id}
						id={movie.id}
						title={movie.title}
						fullTitle={movie.fullTitle}
						year={movie.year}
						role={movie.role}
						image={movie.image}
					/>
				))}
			</div>
		</div>
	);
};
