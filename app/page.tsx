'use client';
import './globals.css';
import { HomepageBanner } from '@/modules/HomepageBanner/HomepageBanner';
import { Link } from '@/modules/ui/Button/Link';
import { Text } from '@/modules/Text/Text';
import { Button } from '@/modules/ui/Button/Button';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1'>
        <HomepageBanner />
        <div className='mt-12 flex justify-center md:mt-6'>
          <Link variant='green' size='lg' href='/account'>
            <Text>Create an account now!</Text>
          </Link>
        </div>
      </main>
    </div>
  );
}
