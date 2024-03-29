import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

type UserSignup = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export const signup = async (user: UserSignup) => {
	const { data, error } = await supabase.auth.signUp({
		email: user.email,
		password: user.password,
		options: {
			emailRedirectTo: `${location.origin}/auth/callback`,
			data: {
				firstName: user.firstName,
				lastName: user.lastName,
			},
		},
	});
	if (error) throw new Error(error.message);

	return data;
};
