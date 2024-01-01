import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { login } from './apiUseLogin';

type User = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (user: User) => login(user),
    onSuccess: () => {
      toast.success('Succesfully logged in!');
      router.push('/account');
      router.refresh();
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided credentials are incorrect');
    },
  });
};
