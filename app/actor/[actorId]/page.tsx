'use client';
import { Text } from '@/modules/Text/Text';
import { ActorImage } from '@/modules/actorPage/ActorImage/ActorImage';
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
			<Text>ActorPage</Text>
		</main>
	);
}
