type Award = {
	title: string;
	for: string;
	image: string;
};

type SingleMovieAwardProps = {
	award: Award;
};

export const SingleMovieAward = ({ award }: SingleMovieAwardProps) => {
	return <div>{award.title}</div>;
};
