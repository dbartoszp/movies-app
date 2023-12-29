import { useQuery } from '@tanstack/react-query';
import { getReviewsByUserId } from './apiUseGetReviewsByUserId';

export const useGetReviewsByUserId = (userId: string) => {
  return useQuery({
    queryKey: ['movieReview'],
    queryFn: () => getReviewsByUserId(userId),
    refetchOnWindowFocus: true,
  });
};
