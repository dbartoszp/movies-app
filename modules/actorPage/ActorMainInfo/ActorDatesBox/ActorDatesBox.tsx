import { Text } from '@/modules/ui/Text/Text';

type ActorDatesBoxProps = {
  birthDate: string;
  deathDate?: string | null;
};

export const ActorDatesBox = ({ birthDate, deathDate }: ActorDatesBoxProps) => {
  return (
    <div>
      <Text variant='subtitle'>
        {!deathDate ? `Born ${birthDate}` : `${birthDate} - ${deathDate}`}
      </Text>
    </div>
  );
};
