import React from 'react';
import { SingleCastBox } from './SingleCastBox/SingleCastBox';
import { Text } from '@/modules/Text/Text';

type Actor = {
	name: string;
	id: string;
};

type FullCastContainerProps = {
	starList: Actor[];
};

export const FullCastContainer = ({ starList }: FullCastContainerProps) => {
	return (
		<div className="space-y-3 bg-dark-blue py-3">
			<div className="mx-16 border-b border-light-blue ">
				<Text variant="subtitle">CAST</Text>
			</div>
			<div className="flex flex-wrap justify-start md:justify-center">
				{starList.map((actor, i) => (
					<SingleCastBox key={actor.id} actor={actor} />
				))}
			</div>
		</div>
	);
};
