'use client';
import { Button } from '@/modules/ui/Button/Button';
import { Text } from '@/modules/ui/Text/Text';
import { useLogout } from '@/modules/users/hooks/useLogout/useLogout';

export const LogoutButton = () => {
  const logout = useLogout();
  const onLogout = () => {
    logout.mutate();
  };

  return (
    <div>
      <Button size='sm' onClick={onLogout}>
        <Text variant='danger'>Log out</Text>
      </Button>
    </div>
  );
};
