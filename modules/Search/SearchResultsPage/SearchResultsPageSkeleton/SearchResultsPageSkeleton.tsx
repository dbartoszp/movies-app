import { PosterLinkListSkeleton } from '@/modules/TopMovies/TopMoviesHomepage/PosterLinkList/PosterLinkListSkeleton/PosterLinkListSkeleton';

export const SearchResultsPageSkeleton = () => {
  return (
    <div className='bg-dark-blue md:mx-24 md:my-12 md:p-6'>
      <PosterLinkListSkeleton />
    </div>
  );
};
