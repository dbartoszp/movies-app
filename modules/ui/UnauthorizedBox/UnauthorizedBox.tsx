import React from 'react';
import { Text } from '../Text/Text';
import { Link } from '@/modules/ui/Button/Link';

export const UnauthorizedBox = () => {
  return (
    <div className='py-40 md:px-96 md:py-64'>
      <div className='flex flex-col items-center justify-center space-y-12 bg-dark-blue py-12'>
        <Text>Please log in before performing that action!</Text>
        <div className='flex'>
          <Link variant='green' size='lg' href='/login'>
            <Text>Go to signup page</Text>
          </Link>
        </div>
      </div>
    </div>
  );
};
