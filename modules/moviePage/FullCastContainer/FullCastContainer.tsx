import React from 'react';
import { SingleCastBox } from './SingleCastBox/SingleCastBox';
import { Text } from '@/modules/Text/Text';

type Actor = {
	name: string;
	id: string;
	asCharacter: string;
};

type FullCastContainerProps = {
	actors: Actor[];
};

export const FullCastContainer = ({ actors }: FullCastContainerProps) => {
	return (
		<div className="bg-dark-blue py-3 space-y-3">
			<div className="mx-16 border-b border-light-blue ">
				<Text variant="subtitle">CAST</Text>
			</div>
			<div className="flex flex-wrap justify-start">
				{actors.map((actor, i) => (
					<SingleCastBox key={actor.id} actor={actor} />
				))}
			</div>
		</div>
	);
};
