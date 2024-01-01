'use client';

import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { SingleListAdd } from './SingleListAdd/SingleListAdd';
import { useGetMoviesListsByUserId } from '../../hooks/useGetListsByUserId/useGetMoviesListsByUserId';
import { MyListsSkeleton } from '@/modules/accountPage/Dashboard/MyLists/MyListsSkeleton/MyListsSkeleton';

type AddToListProps = {
  movieId: string;
  userId: string;
};

export const AddToList = ({ movieId, userId }: AddToListProps) => {
  const lists = useGetMoviesListsByUserId(userId);

  if (lists.isLoading) return <MyListsSkeleton />;
  if (!lists.isSuccess)
    return (
      <ErrorMessage message='Could not fetch your lists. Please come back later!' />
    );
  console.log(lists.data);
  return (
    <div className='mt-4 flex flex-col space-y-2'>
      {lists.data.map((list) => (
        <SingleListAdd key={list.id} movieId={movieId} listId={list.id} />
      ))}
    </div>
  );
};
