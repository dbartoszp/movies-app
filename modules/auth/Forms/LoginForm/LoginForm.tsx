'use client';
import { Text } from '@/modules/ui/Text/Text';
import { FormRow } from '../FormRow/FormRow';
import { useForm } from 'react-hook-form';
import { Button } from '@/modules/ui/Button/Button';
import { useLogin } from '@/modules/users/hooks/useLogin/useLogin';

export const LoginForm = () => {
  const login = useLogin();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = handleSubmit(({ email, password }) => {
    login.mutate({
      password,
      email,
    });
  });

  return (
    <>
      <Text variant='title'>LOGIN</Text>
      <form onSubmit={onSubmit}>
        <FormRow label='EMAIL' id='EMAIL'>
          <input
            className='rounded-sm px-3 py-1 text-dark-blue'
            type='email'
            id='email'
            {...register('email', {
              required: true,
            })}
          />
        </FormRow>
        <FormRow label='PASSWORD' id='PASSWORD'>
          <input
            className='rounded-sm px-3 py-1 text-dark-blue'
            type='password'
            id='password'
            {...register('password', {
              required: true,
            })}
          />
          {(errors.email?.message || errors.password?.message) && (
            <Text variant='danger'>Email or password does not match</Text>
          )}
        </FormRow>
        <FormRow>
          <Button variant='green' size='lg' onClick={onSubmit}>
            SIGN IN
          </Button>
        </FormRow>
      </form>
    </>
  );
};
