'use client';
import { Text } from '@/modules/ui/Text/Text';
import { MyReviews } from './MyReviews/MyReviews';
import { MyLists } from './MyLists/MyLists';
import { useState } from 'react';
import { Button } from '@/modules/ui/Button/Button';

type DashboardProps = {
  userId: string;
};

export const Dashboard = ({ userId }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('reviews');

  return (
    <div>
      <Text variant='title'>Dashboard</Text>
      <div className='my-6 flex flex-row justify-center'>
        <Button size='lg' onClick={() => setActiveTab('reviews')}>
          <Text variant={activeTab === 'reviews' ? 'green' : 'default'}>
            REVIEWS
          </Text>
        </Button>
        <Button size='lg' onClick={() => setActiveTab('lists')}>
          <Text variant={activeTab === 'lists' ? 'green' : 'default'}>
            LISTS
          </Text>
        </Button>
      </div>
      <Text variant='title'>Your most recent reviews:</Text>
      <MyReviews userId={userId} limit={3} />
      <MyLists />
    </div>
  );
};
