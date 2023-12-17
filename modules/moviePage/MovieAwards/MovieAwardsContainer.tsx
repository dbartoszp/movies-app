import { SingleMovieAward } from './SingleMovieAward/SingleMovieAward';

type Award = {
	title: string;
	for: string;
	image: string;
};

type Awards = {
	awards: Award[];
};

export const MovieAwardsContainer = ({ awards }: Awards) => {
	return (
		<>
			{awards.map((award) => {
				<SingleMovieAward
					award={award}
					key={award.title + award.for}
				/>;
			})}
		</>
	);
};
