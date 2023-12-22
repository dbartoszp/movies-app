'use client';
import { Text } from '@/modules/Text/Text';
import { useGetActorById } from '@/modules/actors/useGetActorById/useGetActorById';

export default function ActorPage({ params }: { params: { actorId: string } }) {
  const actor = useGetActorById(params.actorId);
  if (actor.isLoading) {
    return <Text variant='danger'>TODO skeleton</Text>;
  }
  if (!actor.isSuccess) {
    console.log(actor.error);
    return <Text variant='danger'>TODO error message</Text>;
  }

  const actorData = actor.data;

  return (
    <main>
      <Text>ActorPage</Text>
    </main>
  );
}

// export default function MoviePage({ params }: { params: { movieId: string } }) {
//     const movie = useGetMovieById(params.movieId);
