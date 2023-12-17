import { Text } from '@/modules/Text/Text';
import { Link } from '@/modules/ui/Button/Link';
import Image from 'next/image';
import React from 'react';

type MovieMainInfoProps = {
	title: string;
	year: number;
	director: string;
	trailer: string;
	poster: string;
	length: number;
};

export const MovieMainInfo = ({ movie }: MovieMainInfoProps) => {
	return (
		<div className="flex md:space-x-24 md:mt-16 md:flex-row flex-col justify-center items-center space-y-4">
			<div className="flex flex-col space-y-4">
				<div>
					<Text variant="title">{`${movie.title} (${movie.year})`}</Text>
					<Text>
						Directed by <strong>{movie.director}</strong>
					</Text>
				</div>
				<div className="flex flex-row items-center space-x-24">
					<Link variant="green" size="sm" href={movie.trailer}>
						Watch the trailer
					</Link>
					<Text>{movie.length} mins</Text>
				</div>
			</div>
		</div>
	);
};
