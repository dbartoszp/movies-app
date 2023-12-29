import { LoginForm } from '@/modules/auth/Forms/LoginForm/LoginForm';
import { Text } from '@/modules/ui/Text/Text';
import { RegisterForm } from '@/modules/auth/Forms/RegisterForm/RegisterForm';

export default function Home() {
  return (
    <main className='justify-center px-7 sm:mt-48 sm:flex sm:flex-row sm:items-start sm:space-x-12 md:space-x-36'>
      <div className='pt-12 sm:pt-0'>
        <LoginForm />
      </div>
      <div className='mt-12'>
        <Text variant='title'>Or...</Text>
      </div>
      <div className='mt-12 sm:mt-0'>
        <RegisterForm />
      </div>
    </main>
  );
}
