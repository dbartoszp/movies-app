import { Text } from '@/modules/ui/Text/Text';
import { GoBackButton } from '../GoBackButton/GoBackButton';

type ErrorMessageProps = {
  message?: string;
};

export const ErrorMessage = ({
  message = 'An unexpected error has occurred. Check back later!',
}: ErrorMessageProps) => {
  return (
    <div className='mx-auto my-64 space-y-4 bg-dark-blue p-10 text-center md:my-80 md:w-1/3'>
      <Text variant='danger'>{message}</Text>
      <GoBackButton />
    </div>
  );
};
