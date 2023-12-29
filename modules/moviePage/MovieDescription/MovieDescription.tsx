import { Text } from '@/modules/ui/Text/Text';
import React from 'react';

type MovieDescriptionProps = {
  description?: string | null;
};

export const MovieDescription = ({
  description = 'No description available for this movie.',
}: MovieDescriptionProps) => {
  return (
    <div className='px-9 py-6'>
      <Text variant='mainInfo'>{description}</Text>
    </div>
  );
};
