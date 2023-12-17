import { Text } from '@/modules/Text/Text';
import React from 'react';

type MovieDescriptionProps = {
	description: string;
};

export const MovieDescription = ({ description }: MovieDescriptionProps) => {
	return (
		<div className="px-9 py-6 md:px-56">
			<Text variant="mainInfo">{description}</Text>
		</div>
	);
};
