'use client';

import { useGetMoviesListByListId } from '@/modules/lists/hooks/useGetSingleListByListId/useGetMoviesListByListId';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { Text } from '@/modules/ui/Text/Text';

type SingleListAdd = {
  listId: number;
  movieId: string;
};

export const SingleListAdd = ({ listId, movieId }: SingleListAdd) => {
  const list = useGetMoviesListByListId(listId);

  if (list.isLoading) return <Text>TODO SKELETON LIST</Text>;
  if (!list.isSuccess) return <ErrorMessage />;

  return <div>SingleListAdd</div>;
};
