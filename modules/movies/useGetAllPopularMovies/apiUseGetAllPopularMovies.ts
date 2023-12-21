import axios from 'axios';
import { useGetAllPopularMoviesReturnSchema } from '../useGetAllPopularMovies.schema';

const POPULAR_MOVIES_URL = 'https://imdb-api.com/en/API/MostPopularMovies/';
const IMDB_API_KEY = 'k_2x4eak3e';

export const getAllPopularMovies = async () => {
  const res = await axios.get(`${POPULAR_MOVIES_URL}${IMDB_API_KEY}`);
  console.log(res);
  const movies = useGetAllPopularMoviesReturnSchema.safeParse(res.data);

  if (movies.success) {
    return movies.data;
  }
  throw movies.error;
};
