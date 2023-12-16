'use client';
import { useForm } from 'react-hook-form';
import { FormRow } from '../FormRow/FormRow';
import { Text } from '@/modules/Text/Text';
import { Button } from '@/modules/ui/Button/Button';

export const RegisterForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = () => {
		console.log('submitted');
	};

	return (
		<>
			<Text variant="title">CREATE A NEW ACCOUNT</Text>
			<form onSubmit={onSubmit}>
				<FormRow label="FIRST NAME" id="FIRSTNAME">
					<input
						className="rounded-sm px-3 text-dark-blue"
						type="text"
						id="firstName"
						{...register('firstName', {
							required: true,
						})}
					/>
					{errors.email?.message && (
						<Text variant="danger">
							Email or password does not match
						</Text>
					)}
				</FormRow>
				<FormRow label="LAST NAME" id="LASTNAME">
					<input
						className="rounded-sm px-3 text-dark-blue"
						type="text"
						id="lastName"
						{...register('lastName', {
							required: true,
						})}
					/>
					{errors.email?.message && (
						<Text variant="danger">
							Email or password does not match
						</Text>
					)}
				</FormRow>
				<FormRow label="EMAIL" id="EMAIL">
					<input
						className="rounded-sm px-3 text-dark-blue"
						type="email"
						id="emailSignup"
						{...register('emailSignup', {
							required: true,
						})}
					/>
					{errors.email?.message && (
						<Text variant="danger">
							Email or password does not match
						</Text>
					)}
				</FormRow>
				<FormRow label="PASSWORD" id="PASSWORD (min 8 characters)">
					<input
						className="rounded-sm px-3 text-dark-blue"
						type="password"
						id="passwordSignup"
						{...register('passwordSignup', {
							required: true,
						})}
					/>
					{errors.email?.message && (
						<Text variant="danger">
							Email or password does not match
						</Text>
					)}
				</FormRow>
				<FormRow label="CONFIRM PASSWORD" id="PASSWORDCONFIRM">
					<input
						className="rounded-sm px-3 text-dark-blue"
						type="password"
						id="passwordConfirm"
						{...register('passwordConfirm', {
							required: true,
						})}
					/>
					{errors.email?.message && (
						<Text variant="danger">
							Email or password does not match
						</Text>
					)}
				</FormRow>

				<FormRow>
					<Button
						// disabled={login.isLoading}
						variant="green"
						size="lg"
						onClick={onSubmit}
					>
						REGISTER
					</Button>
				</FormRow>
			</form>
		</>
	);
};
