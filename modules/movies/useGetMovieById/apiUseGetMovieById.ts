import axios from 'axios';
import { useGetMovieReturnSchema } from '../schemas/useGetMovie.schema';

const SEARCH_MOVIE_BY_ID_URL = 'https://imdb-api.com/en/API/Title/';
const IMDB_API_KEY = 'k_2x4eak3e';

export const getMovieById = async (id: string) => {
  const res = await axios.get(`${SEARCH_MOVIE_BY_ID_URL}${IMDB_API_KEY}/${id}`);
  const movie = useGetMovieReturnSchema.safeParse(res.data);

  if (movie.success) {
    return movie.data;
  }
  throw movie.error;
};
