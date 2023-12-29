import { Text } from '@/modules/ui/Text/Text';
import React from 'react';

type BoxOffice = {
  budget?: string;
  openingWeekendUSA?: string;
  grossUSA?: string;
  cumulativeWorldwideGross?: string;
};

type BoxOfficeProps = {
  boxOffice: BoxOffice;
};

export const BoxOffice = ({ boxOffice }: BoxOfficeProps) => {
  const hasEmptyValue = Object.values(boxOffice).some((value) => value === '');
  if (hasEmptyValue)
    return (
      <div className='flex flex-col items-center justify-center bg-dark-blue py-3'>
        <div className='mx-12 mb-3 border-b border-light-blue'>
          <Text variant='subtitle'>
            Not enough data to display box office stats yet
          </Text>
        </div>
      </div>
    );

  return (
    <div className='flex flex-col bg-dark-blue py-3 pl-8'>
      <div className='mb-3 mr-24 border-b border-light-blue'>
        <Text variant='subtitle'>BOX OFFICE:</Text>
      </div>
      <Text>Budget: {boxOffice.budget || 'Unknown'}</Text>
      <Text>
        US opening weekend: {boxOffice.openingWeekendUSA || 'Unknown'}
      </Text>
      <Text>
        Worldwide gross: {boxOffice.cumulativeWorldwideGross || 'Unknown'}
      </Text>
    </div>
  );
};
