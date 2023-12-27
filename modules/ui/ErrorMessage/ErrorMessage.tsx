import { Text } from '@/modules/Text/Text';
import { GoBackButton } from '../GoBackButton/GoBackButton';

export const ErrorMessage = () => {
	return (
		<div className="md:my-80 md:w-1/3 text-center mx-auto bg-dark-blue my-64 p-10 space-y-4">
			<Text variant="danger">
				An unexpected error has occurred. Check back later!
			</Text>
			<GoBackButton />
		</div>
	);
};
