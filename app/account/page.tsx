import '../globals.css';
import { Text } from '@/modules/Text/Text';
import { LogoutButton } from '@/modules/auth/LogoutButton/LogoutButton';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function AccountPage() {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) {
		redirect('/unauthenticated');
	}

	return (
		<main className="justify-center px-7 sm:mt-48 sm:flex sm:flex-row sm:items-start sm:space-x-12 md:space-x-36">
			<LogoutButton />

			<Text>AccountPage</Text>
		</main>
	);
}