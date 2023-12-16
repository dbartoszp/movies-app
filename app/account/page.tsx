import '../globals.css';
import { Text } from '@/modules/Text/Text';
import { LogoutButton } from '@/modules/auth/LogoutButton/LogoutButton';

export default function AccountPage() {
	return (
		<main className="justify-center px-7 sm:mt-48 sm:flex sm:flex-row sm:items-start sm:space-x-12 md:space-x-36">
			<LogoutButton />

			<Text>AccountPage</Text>
		</main>
	);
}
