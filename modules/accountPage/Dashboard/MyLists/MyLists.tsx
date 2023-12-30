'use client';

import { useAddToMoviesList } from '@/modules/lists/hooks/updateMoviesList/useAddToMoviesList/useAddToMoviesList';
import { useCreateMoviesList } from '@/modules/lists/hooks/useCreateMoviesList/useCreateMoviesList';
import { useDeleteMoviesList } from '@/modules/lists/hooks/useDeleteMoviesList/useDeleteMoviesList';
import { Button } from '@/modules/ui/Button/Button';

const testMoviesList = {
  listName: 'TestLista',
  description: 'lista do testowania',
  id: 2,
};

export const MyLists = () => {
  const createMoviesList = useCreateMoviesList();
  const deleteMoviesList = useDeleteMoviesList();
  const addToMoviesList = useAddToMoviesList();

  const handleCreate = () => {
    createMoviesList.mutate({
      listName: testMoviesList.listName,
      description: testMoviesList.description,
    });
  };
  const handleUpdateAdd = () => {
    addToMoviesList.mutate({
      listId: testMoviesList.id,
      movieIdToAdd: 'tt9663764',
    });
  };
  const handleUpdateDelete = () => {};
  const handleDelete = () => {
    deleteMoviesList.mutate(testMoviesList.id);
  };

  return (
    <div>
      <Button onClick={handleCreate} size='md' variant='green'>
        TEST CREATE MOVIESLIST
      </Button>
      <Button onClick={handleUpdateAdd} size='md' variant='secondary'>
        TEST UPDATE ADD TO MOVIESLIST
      </Button>
      <Button onClick={handleUpdateDelete} size='md' variant='secondary'>
        TEST UPDATE DELETE FROM MOVIESLIST
      </Button>
      <Button onClick={handleDelete} size='md' variant='danger'>
        TEST DELETE MOVIESLIST
      </Button>
    </div>
  );
};
