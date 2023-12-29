import { Text } from '@/modules/ui/Text/Text';
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
    <div className='my-6 flex flex-col items-center justify-center md:items-start md:justify-between'>
      <Text variant='title'>{name}</Text>
      <Text variant='green'>{role}</Text>
      <ActorDatesBox birthDate={birthDate} deathDate={deathDate} />
      <div className='mt-4 flex flex-col space-y-2 bg-dark-blue px-6 py-4'>
        <Text variant='subtitle'>BIO:</Text>
        <Text variant='mainInfo'>{summary}</Text>
        <div className='text-center'>
          <Text>{height}</Text>
        </div>
        <Text variant='green'>{awards}</Text>
      </div>
    </div>
  );
};
