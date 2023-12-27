import { useQuery } from '@tanstack/react-query';
import { getActorById } from './apiUseGetActorById';

export const useGetActorById = (id: string) => {
	return useQuery({
		queryKey: ['actor'],
		queryFn: () => getActorById(id),
		refetchOnWindowFocus: true,
	});
};
