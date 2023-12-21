import './globals.css';
import 'react-loading-skeleton/dist/skeleton.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/modules/Header/Header';
import { Footer } from '@/modules/Footer/Footer';
import { ReactQueryProvider } from './ReactQueryProvider';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movies-App',
  description: 'Web application for browsing information movies and actors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReactQueryProvider>
          <SkeletonTheme
            baseColor='#14181c'
            highlightColor='rgb(118, 145, 177)'
          >
            <Header />
            {children}
            <Footer />
            <Toaster
              position='top-center'
              gutter={12}
              containerStyle={{ margin: '8px' }}
              toastOptions={{
                success: {
                  duration: 2000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: '16px',
                  maxWidth: '500px',
                  padding: '16px 24px',
                  backgroundColor: '#dedede',
                  color: 'var(--dark-blue)',
                },
              }}
            />
          </SkeletonTheme>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
