import '../globals.css';

import { Text } from '@/modules/Text/Text';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function Unauthenticated() {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) {
		redirect('/');
	}
	return <Text>Please log in before performing that action!</Text>;
}
