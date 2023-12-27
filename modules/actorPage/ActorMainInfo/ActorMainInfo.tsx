import { Text } from '@/modules/Text/Text';
import { ActorDatesBox } from './ActorDatesBox/ActorDatesBox';

type ActorMainInfoProps = {
	name: string;
	summary: string;
	birthDate: string;
	deathDate?: string | null;
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
		<div className="flex flex-col items-center justify-center my-6">
			<Text variant="title">{name}</Text>
			<Text variant="green">{role}</Text>
			<ActorDatesBox birthDate={birthDate} deathDate={deathDate} />
			<div className="py-4 mt-4 bg-dark-blue px-6 space-y-2 flex flex-col">
				<Text variant="subtitle">BIO:</Text>
				<Text variant="mainInfo">{summary}</Text>
				<div className="text-center">
					<Text>{height}</Text>
				</div>
				<Text variant="green">{awards}</Text>
			</div>
		</div>
	);
};
