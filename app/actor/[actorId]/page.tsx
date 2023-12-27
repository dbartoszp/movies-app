'use client';
import { Text } from '@/modules/Text/Text';
import { ActorImage } from '@/modules/actorPage/ActorImage/ActorImage';
import { ActorKnownFor } from '@/modules/actorPage/ActorKnownFor/ActorKnownFor';
import { ActorMainInfo } from '@/modules/actorPage/ActorMainInfo/ActorMainInfo';
import { useGetActorById } from '@/modules/actors/useGetActorById/useGetActorById';

export default function ActorPage({ params }: { params: { actorId: string } }) {
	const actor = useGetActorById(params.actorId);
	if (actor.isLoading) {
		return <Text variant="danger">TODO skeleton</Text>;
	}
	if (!actor.isSuccess) {
		console.log(actor.error);
		return <Text variant="danger">TODO error message</Text>;
	}

	const actorData = actor.data;

	return (
		<main>
			<ActorImage name={actorData.name} image={actorData.image} />
			<ActorMainInfo
				name={actorData.name}
				role={actorData.role}
				summary={actorData.summary}
				birthDate={actorData.birthDate}
				deathDate={actorData.deathDate}
				awards={actorData.awards}
				height={actorData.height}
			/>
			<ActorKnownFor knownFor={actorData.knownFor || []} />
		</main>
	);
}
