import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/modules/Header/Header';
import { Footer } from '@/modules/Footer/Footer';
import { ReactQueryProvider } from './ReactQueryProvider';

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
		<html lang="en">
			<body className={inter.className}>
				<ReactQueryProvider>
					<Header />
					{children}
					<Footer />
				</ReactQueryProvider>
			</body>
		</html>
	);
}
