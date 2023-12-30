'use client';

import { useCreateMoviesList } from '@/modules/lists/hooks/useCreateMoviesList/useCreateMoviesList';
import { Button } from '@/modules/ui/Button/Button';

const testMoviesList = {
  listName: 'TestLista',
  description: 'lista do testowania',
};

export const MyLists = () => {
  const createMoviesList = useCreateMoviesList();

  const handleCreate = () => {
    createMoviesList.mutate({
      listName: testMoviesList.listName,
      description: testMoviesList.description,
    });
  };
  const handleUpdate = () => {};
  const handleDelete = () => {};

  return (
    <div>
      <Button onClick={handleCreate} size='md' variant='green'>
        TEST CREATE MOVIESLIST
      </Button>
      <Button onClick={handleUpdate} size='md' variant='secondary'>
        TEST UPDATE MOVIESLIST
      </Button>
      <Button onClick={handleDelete} size='md' variant='danger'>
        TEST DELETE MOVIESLIST
      </Button>
    </div>
  );
};
