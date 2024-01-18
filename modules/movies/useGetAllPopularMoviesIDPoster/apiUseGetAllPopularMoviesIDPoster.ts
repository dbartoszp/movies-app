import axios from 'axios';
import { useGetAllPopularMoviesReturnSchema } from '../schemas/useGetAllPopularMovies.schema';

const POPULAR_MOVIES_URL = 'https://tv-api.com/en/API/MostPopularMovies/';

export const getAllPopularMoviesIDPoster = async () => {
  const res = await axios.get(
    `${POPULAR_MOVIES_URL}${process.env.NEXT_PUBLIC_IMDB_API_KEY}`
  );
  const movies = useGetAllPopularMoviesReturnSchema.safeParse(res.data);

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
