'use client';
import { Button } from '@/modules/ui/Button/Button';
import { useLogout } from '../user/hooks/useLogout/useLogout';
import { Text } from '@/modules/ui/Text/Text';

export const LogoutButton = () => {
  const logout = useLogout();
  const onLogout = () => {
    logout.mutate();
  };

  return (
    <div>
      <Button variant='danger' size='sm' onClick={onLogout}>
        <Text>Log out</Text>
      </Button>
    </div>
  );
};
