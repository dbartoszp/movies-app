import { Text } from '@/modules/ui/Text/Text';
import { Link } from '@/modules/ui/Button/Link';
type Actor = {
  name: string;
  id: string;
};

type SingleCastBoxProps = {
  actor: Actor;
};

export const SingleCastBox = ({ actor }: SingleCastBoxProps) => {
  return (
    <Link variant='primary' href={`/actor/${actor.id}`} size='md'>
      <Text>
        <strong>{actor.name}</strong>
      </Text>
    </Link>
  );
};
