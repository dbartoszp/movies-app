import { Text } from '@/modules/Text/Text';
import { Link } from '@/modules/ui/Button/Link';
import React from 'react';

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
