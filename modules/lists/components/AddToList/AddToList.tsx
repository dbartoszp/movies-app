'use client';

import { Text } from '@/modules/ui/Text/Text';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { SingleListAdd } from './SingleListAdd/SingleListAdd';
import { useGetMoviesListsByUserId } from '../../hooks/useGetListsByUserId/useGetMoviesListsByUserId';

type AddToListProps = {
  movieId: string;
  userId: string;
};

export const AddToList = ({ movieId, userId }: AddToListProps) => {
  const lists = useGetMoviesListsByUserId(userId);

  if (lists.isLoading) return <Text>TODO SKELETON MYLISTS</Text>;
  if (!lists.isSuccess)
    return (
      <ErrorMessage message='Could not fetch your lists. Please come back later!' />
    );
  console.log(lists.data);
  const sortedAndTrimmedlists = Array.isArray(lists.data)
    ? lists.data.sort((a, b) => b.id - a.id)
    : [];

  return (
    <div>
      {sortedAndTrimmedlists.map((list) => (
        <SingleListAdd key={list.id} movieId={movieId} listId={list.id} />
      ))}
    </div>
  );
};
