'use client';
import { useState } from 'react';
import { useCreateMoviesList } from '../../hooks/useCreateMoviesList/useCreateMoviesList';
import { Text } from '@/modules/ui/Text/Text';
import { Button } from '@/modules/ui/Button/Button';

type ListCreatorProps = {
  userId: string;
};

const LIST_TITLE_LIMIT = 20;
const LIST_DESCRIPTION_LIMIT = 20;

export const ListCreator = ({ userId }: ListCreatorProps) => {
  const createMoviesList = useCreateMoviesList();
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCreateMoviesList = () => {
    createMoviesList.mutate({ listName, description: listDescription });
    setIsSubmitted(true);
  };

  const handleListNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setListName(event.target.value);
  };
  const handleListDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setListDescription(event.target.value);
  };

  return (
    <div className='flex flex-col space-y-4'>
      {isSubmitted ? (
        <Text variant='green'>
          Your movies list has been created. You can close this modal now.
        </Text>
      ) : (
        <>
          <Text variant='title'>Title of your list: (20 characters max)</Text>
          <textarea
            maxLength={LIST_TITLE_LIMIT}
            value={listName}
            onChange={handleListNameChange}
            className='h-10 w-full resize-none bg-dark-blue p-1'
          />
          <Text variant='title'>
            Brief description of your list: (20 characters max)
          </Text>
          <textarea
            maxLength={LIST_DESCRIPTION_LIMIT}
            value={listDescription}
            onChange={handleListDescriptionChange}
            className='h-10 w-full resize-none bg-dark-blue p-1'
          />
          <Text variant='subtitleXL'>Summary:</Text>
          <Text variant='title'>
            <strong>
              {listName.trim() !== '' ? listName : 'Your list name goes here'}
            </strong>
          </Text>
          <div className='italic'>
            <Text variant='subtitle'>
              &quot;
              {listDescription.trim() !== ''
                ? listDescription
                : 'Your list description goes here'}
              &quot;
            </Text>
          </div>
          {listName.trim() !== '' && listDescription.trim() !== '' ? (
            <Button variant='green' size='md' onClick={handleCreateMoviesList}>
              Submit your list
            </Button>
          ) : (
            <Text variant='danger'>
              Please input a name and a brief description of this list first!
            </Text>
          )}
        </>
      )}
    </div>
  );
};
