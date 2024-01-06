import axios from 'axios';
import { useGetAllPopularMoviesReturnSchema } from '../schemas/useGetAllPopularMovies.schema';

const POPULAR_MOVIES_URL = 'https://imdb-api.com/en/API/MostPopularMovies/';


export const getAllPopularMovies = async () => {
  const res = await axios.get(`${POPULAR_MOVIES_URL}${process.env.NEXT_PUBLIC_IMDB_API_KEY}`);
  console.log(res);
  const movies = useGetAllPopularMoviesReturnSchema.safeParse(res.data);

  if (movies.success) {
    return movies.data;
  }
  throw movies.error;
};
