import axios from 'axios';
import { useGetMovieReturnSchema } from '../schemas/useGetMovie.schema';

const SEARCH_MOVIE_BY_ID_URL = 'https://tv-api.com/en/API/Title/';

export const getMovieById = async (id: string) => {
  const res = await axios.get(
    `${SEARCH_MOVIE_BY_ID_URL}${process.env.NEXT_PUBLIC_IMDB_API_KEY}/${id}`
  );
  const movie = useGetMovieReturnSchema.safeParse(res.data);

  if (movie.success) {
    return movie.data;
  }
  throw movie.error;
};
