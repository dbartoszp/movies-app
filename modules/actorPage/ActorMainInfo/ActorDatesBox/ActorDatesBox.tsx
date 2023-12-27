import { Text } from '@/modules/Text/Text';

type ActorDatesBoxProps = {
	birthDate: string;
	deathDate?: string;
};

export const ActorDatesBox = ({ birthDate, deathDate }: ActorDatesBoxProps) => {
	return (
		<div>
			<Text variant="subtitle">
				{!deathDate
					? `Born ${birthDate}`
					: `${birthDate} - ${deathDate}`}
			</Text>
		</div>
	);
};
