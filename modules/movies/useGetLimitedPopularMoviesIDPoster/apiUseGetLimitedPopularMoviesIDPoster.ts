import axios from 'axios';
import { useGetAllPopularMoviesReturnSchema } from '../schemas/useGetAllPopularMovies.schema';

const POPULAR_MOVIES_URL = 'https://imdb-api.com/en/API/MostPopularMovies/';

const MOVIE_LIMIT = 6;

export const getLimitedPopularMoviesIDPoster = async () => {
  const res = await axios.get(
    `${POPULAR_MOVIES_URL}${process.env.NEXT_PUBLIC_IMDB_API_KEY}`
  );
  const movies = useGetAllPopularMoviesReturnSchema.safeParse(res.data);

  if (movies.success) {
    const firstTenMovies = movies.data.items.slice(0, MOVIE_LIMIT);

    const moviesIDPosters = firstTenMovies.map((movie) => ({
      id: movie.id,
      image: movie.image,
      title: movie.title,
    }));
    return moviesIDPosters;
  }
  throw movies.error;
};
