'use client';

import { Text } from '@/modules/ui/Text/Text';
import { useGetActorById } from '@/modules/actors/useGetActorById/useGetActorById';
import { ActorImage } from '@/modules/actorPage/ActorImage/ActorImage';
import { ActorKnownFor } from '@/modules/actorPage/ActorKnownFor/ActorKnownFor';
import { ActorMainInfo } from '@/modules/actorPage/ActorMainInfo/ActorMainInfo';
import { ActorPageSkeleton } from '@/modules/actorPage/ActorPageSkeleton/ActorPageSkeleton';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';

export default function ActorPage({ params }: { params: { actorId: string } }) {
  const actor = useGetActorById(params.actorId);

  if (actor.isLoading) {
    return <ActorPageSkeleton />;
  }
  if (!actor.isSuccess) {
    console.log(actor.error);
    return <ErrorMessage />;
  }

  const actorData = actor.data;

  return (
    <main className='md:mt-20 md:flex md:min-h-screen md:flex-row md:items-center md:justify-around'>
      <ActorImage name={actorData.name} image={actorData.image} />
      <div className='flex w-full flex-col space-y-4 md:w-1/2'>
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
      </div>
    </main>
  );
}
