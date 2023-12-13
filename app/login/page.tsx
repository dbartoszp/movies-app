import { LoginForm } from '@/modules/auth/Forms/LoginForm/LoginForm';
import '../globals.css';
import { Text } from '@/modules/Text/Text';
import { RegisterForm } from '@/modules/auth/Forms/RegisterForm/RegisterForm';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
