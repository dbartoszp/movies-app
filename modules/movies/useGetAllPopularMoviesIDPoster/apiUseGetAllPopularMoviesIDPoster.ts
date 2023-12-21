import axios from 'axios';
import { useGetAllPopularMoviesReturnSchema } from '../schemas/useGetAllPopularMovies.schema';

const POPULAR_MOVIES_URL = 'https://imdb-api.com/en/API/MostPopularMovies/';
const IMDB_API_KEY = 'k_2x4eak3e';

export const getAllPopularMoviesIDPoster = async () => {
  const res = await axios.get(`${POPULAR_MOVIES_URL}${IMDB_API_KEY}`);
  const movies = useGetAllPopularMoviesReturnSchema.safeParse(res.data);
  console.log(movies);

  if (movies.success) {
    console.log('IDposters:', movies.data.items);
    const moviesIDPosters = movies.data.items.map((movie) => ({
      id: movie.id,
      image: movie.image,
    }));
    console.log('IDposters:', moviesIDPosters);
    return moviesIDPosters;
  }
  throw movies.error;
};
