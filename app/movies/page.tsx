import { SearchResultsPage } from '@/modules/Search/SearchResultsPage/SearchResultsPage';
import { Searchbar } from '@/modules/Search/Searchbar/Searchbar';

export default function MoviesPage() {
  return (
    <main>
      <Searchbar />
      <SearchResultsPage />
    </main>
  );
}
