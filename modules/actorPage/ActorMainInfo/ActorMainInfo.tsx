import { Text } from '@/modules/Text/Text';
import { ActorDatesBox } from './ActorDatesBox/ActorDatesBox';

type ActorMainInfoProps = {
	name: string;
	summary: string;
	birthDate: string;
	deathDate?: string;
	awards: string;
	height: string;
	role: string;
};

export const ActorMainInfo = ({
	name,
	summary,
	deathDate,
	birthDate,
	awards,
	height,
	role,
}: ActorMainInfoProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Text variant="title">{name}</Text>
			<Text variant="green">{role}</Text>
			<ActorDatesBox birthDate={birthDate} deathDate={deathDate} />
		</div>
	);
};
