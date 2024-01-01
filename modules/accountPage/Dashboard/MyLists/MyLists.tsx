'use client';

import { ListCreator } from '@/modules/lists/components/ListCreator/ListCreator';
import { ListPreview } from '@/modules/lists/components/ListPreview/ListPreview';
import { useGetMoviesListsByUserId } from '@/modules/lists/hooks/useGetListsByUserId/useGetMoviesListsByUserId';
import { Link } from '@/modules/ui/Button/Link';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { Modal } from '@/modules/ui/Modal/Modal';
import { useDisclosure } from '@/modules/ui/Modal/useDisclosure/useDisclosure';
import { Text } from '@/modules/ui/Text/Text';
import { MyListsSkeleton } from './MyListsSkeleton/MyListsSkeleton';

type MyListsProps = {
  userId: string;
  limit?: number;
};

export const MyLists = ({ userId, limit = 0 }: MyListsProps) => {
  const lists = useGetMoviesListsByUserId(userId);
  const { isOpen, close, changeOpenState } = useDisclosure();

  return <MyListsSkeleton />;

  if (lists.isLoading) return <MyListsSkeleton />;
  if (!lists.isSuccess)
    return (
      <ErrorMessage message='Could not fetch your lists. Please come back later!' />
    );

  const sortedAndTrimmedlists = Array.isArray(lists.data)
    ? lists.data
        .sort((a, b) => b.id - a.id)
        .slice(0, limit > 0 ? limit : lists.data.length)
    : [];

  return (
    <div className='flex flex-col space-y-2'>
      <Text variant='title'>
        Create a new list, or browse your existing ones!
      </Text>
      <div className='flex items-center justify-center py-8'>
        <Modal
          openVariant='green'
          title='Create a new list'
          openText='Create a list'
          onClose={close}
          open={isOpen}
          onOpenChange={changeOpenState}
        >
          <ListCreator userId={userId} />
        </Modal>
      </div>
      {sortedAndTrimmedlists.length === 0 && (
        <Text variant='danger'>
          You still haven&apos;t created a movies list yet, create one first!
        </Text>
      )}
      <div className='mt-4 flex flex-col space-y-4'>
        {sortedAndTrimmedlists.map((list) => (
          <ListPreview
            key={list.id}
            listName={list.listName}
            description={list.description}
            movieIds={list.movieIds}
            listId={list.id}
          />
        ))}
        {limit > 0 && lists.data.length > sortedAndTrimmedlists.length && (
          <>
            <Text variant='subtitle'>
              ...and {lists.data.length - sortedAndTrimmedlists.length} more!
            </Text>
            <div className='mx-auto pt-2'>
              <Link href='/myLists' variant='green' size='lg'>
                See all your lists
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
