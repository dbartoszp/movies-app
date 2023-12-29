import { Text } from '@/modules/ui/Text/Text';

export const SearchResultsPageEmptyQuery = () => {
  return (
    <div className='mb-48 mt-24 bg-dark-blue py-4 text-center md:mx-96 md:mb-64'>
      <Text variant='title'>Try searching for a movie title first!</Text>
    </div>
  );
};
