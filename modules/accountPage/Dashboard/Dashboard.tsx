import { Text } from '@/modules/ui/Text/Text';
import { MyReviews } from './MyReviews/MyReviews';
import { MyLists } from './MyLists/MyLists';

type DashboardProps = {
  userId: string;
};

export const Dashboard = async ({ userId }: DashboardProps) => {
  return (
    <div>
      <Text variant='title'>Your most recent reviews:</Text>
      <MyReviews userId={userId} limit={3} />
      <MyLists />
    </div>
  );
};
