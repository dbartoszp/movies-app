import axios from 'axios';
import { useGetAllPopularMoviesReturnSchema } from '../useGetAllPopularMovies.schema';

const POPULAR_MOVIES_URL = 'https://imdb-api.com/en/API/MostPopularMovies/';
const IMDB_API_KEY = 'k_2x4eak3e';

export const getLimitedPopularMoviesIDPoster = async () => {
  const res = await axios.get(`${POPULAR_MOVIES_URL}${IMDB_API_KEY}`);
  const movies = useGetAllPopularMoviesReturnSchema.safeParse(res.data);
  console.log(movies);

  if (movies.success) {
    const firstTenMovies = movies.data.items.slice(0, 10);

    const moviesIDPosters = firstTenMovies.map((movie) => ({
      id: movie.id,
      image: movie.image,
      title: movie.title,
    }));
    return moviesIDPosters;
  }
  throw movies.error;
};
