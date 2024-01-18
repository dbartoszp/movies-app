import axios from 'axios';
import { useGetMoviesByTitleReturnSchema } from '../schemas/useGetMoviesByTitle.schema';

const SEARCH_MOVIE_BY_TITLE_URL = 'https://tv-api.com/en/API/SearchMovie/';

const responseIfEmptyQuery = {
  searchType: 'Movie',
  expression: null,
  results: [],
  errorMessage: null,
};

export const getMoviesByTitle = async (title: string) => {
  console.log(title);
  if (title.trim() === '') return responseIfEmptyQuery;
  const res = await axios.get(
    `${SEARCH_MOVIE_BY_TITLE_URL}${process.env.NEXT_PUBLIC_IMDB_API_KEY}/${title}`
  );
  const movies = useGetMoviesByTitleReturnSchema.safeParse(res.data);
  console.log(movies);

  if (movies.success) {
    return movies.data;
  }
  throw movies.error;
};
