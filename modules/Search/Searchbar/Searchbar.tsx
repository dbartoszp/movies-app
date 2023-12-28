'use client';
import { FormRow } from '@/modules/auth/Forms/FormRow/FormRow';
import { useQueryString } from '@/modules/navigation/hooks/useQueryString/useQueryString';
import { Button } from '@/modules/ui/Button/Button';
import { useForm } from 'react-hook-form';

export const Searchbar = () => {
  const { register, handleSubmit } = useForm();
  const { createQueryString, pushQueryStringRouter } = useQueryString();

  const onSubmit = handleSubmit(({ input }) => {
    pushQueryStringRouter(createQueryString([{ name: 'query', value: input }]));
  });

  return (
    <div className='t-24 mb-6 flex flex-col items-center justify-center pt-16 text-left'>
      <form onSubmit={onSubmit} className='flex flex-col'>
        <FormRow id='searchResults' label='SEARCH A MOVIE'>
          <input
            className='rounded-sm px-6 py-3 text-dark-blue shadow-md'
            type='text'
            placeholder='Enter search term'
            {...register('input')}
          />
        </FormRow>
        <Button variant='green' size='lg' onClick={onSubmit}>
          Search
        </Button>
      </form>
    </div>
  );
};
