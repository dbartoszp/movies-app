'use client';
import * as z from 'zod';
import { RegisterFormSchema } from './RegisterForm.schema';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../../../ui/Button/Button';
import { FormRow } from '../FormRow/FormRow';
import { Text } from '@/modules/ui/Text/Text';

import { useForm } from 'react-hook-form';
import { useSignup } from '@/modules/users/hooks/useSignup/useSignup';

type FormValues = z.infer<typeof RegisterFormSchema>;
export const RegisterForm = () => {
  const signup = useSignup();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(RegisterFormSchema) });

  const onSubmit = handleSubmit(
    ({ firstName, lastName, passwordSignup, emailSignup }) => {
      signup.mutate({
        firstName,
        lastName,
        password: passwordSignup,
        email: emailSignup,
      });
    }
  );

  return (
    <>
      <Text variant='title'>CREATE A NEW ACCOUNT</Text>
      <form onSubmit={onSubmit}>
        <FormRow label='FIRST NAME' id='FIRSTNAME'>
          <input
            className='rounded-sm px-3 py-1 text-dark-blue'
            type='text'
            id='firstName'
            {...register('firstName', {
              required: true,
            })}
          />
          {errors.firstName?.message && (
            <Text variant='danger'>Please input a correct first name</Text>
          )}
        </FormRow>
        <FormRow label='LAST NAME' id='LASTNAME'>
          <input
            className='rounded-sm px-3 py-1 text-dark-blue'
            type='text'
            id='lastName'
            {...register('lastName', {
              required: true,
            })}
          />
          {errors.lastName?.message && (
            <Text variant='danger'>Please input a correct last name</Text>
          )}
        </FormRow>
        <FormRow label='EMAIL' id='EMAIL'>
          <input
            className='rounded-sm px-3 py-1 text-dark-blue'
            type='email'
            id='emailSignup'
            {...register('emailSignup', {
              required: true,
            })}
          />
          {errors.emailSignup?.message && (
            <Text variant='danger'>Please enter a correct email</Text>
          )}
        </FormRow>
        <FormRow label='PASSWORD' id='PASSWORD (min 8 characters)'>
          <input
            className='rounded-sm px-3 py-1 text-dark-blue'
            type='password'
            id='passwordSignup'
            {...register('passwordSignup', {
              required: true,
            })}
          />
          {errors.passwordSignup?.message && (
            <Text variant='danger'>
              Please input a correct password (8 letters minimum)
            </Text>
          )}
        </FormRow>
        <FormRow label='CONFIRM PASSWORD' id='PASSWORDCONFIRM'>
          <input
            className='rounded-sm px-3 py-1 text-dark-blue'
            type='password'
            id='passwordConfirm'
            {...register('passwordConfirm', {
              required: true,
            })}
          />
          {errors.passwordConfirm?.message && (
            <Text variant='danger'>Passwords are not identical</Text>
          )}
        </FormRow>

        <FormRow>
          <Button
            // disabled={login.isLoading}
            variant='green'
            size='lg'
            onClick={onSubmit}
          >
            REGISTER
          </Button>
        </FormRow>
      </form>
    </>
  );
};
