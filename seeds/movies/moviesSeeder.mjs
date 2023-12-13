import fetch from 'node-fetch';
import supabase from '../../services/supabase.mjs';

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const MOVIE_TITLES = [
  'Star Wars: Episode IV - A New Hope',
  'Inception',
  'The Matrix',
  'Interstellar',
];

const formatMovieData = (movieData) => ({
  title: movieData.Title,
  year: parseInt(movieData.Year, 10),
  rated: movieData.Rated,
  releaseDate: new Date(movieData.Released),
  genres: movieData.Genre,
  director: movieData.Director,
  writer: movieData.Writer,
  actors: movieData.Actors.split(', '),
  plot: movieData.Plot,
  language: movieData.Language,
  awards: movieData.Awards,
  poster: movieData.Poster,
  metascore: parseInt(movieData.Metascore, 10),
  imdbRating: parseFloat(movieData.imdbRating),
  imdbID: movieData.imdbID,
  boxOffice: movieData.BoxOffice,
});

const addMovie = async (newMovie) => {
  try {
    const { error } = await supabase.from('Movies').insert([newMovie]);
    if (error) throw error;
  } catch (err) {
    console.error('Error inserting movie: ', err);
  }
};

const fetchMovieData = async (title) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(
        title
      )}`
    );
    const movieData = await response.json();
    if (movieData.Response === 'False') {
      throw new Error(`Movie not found: ${title}`);
    }
    return movieData;
  } catch (err) {
    console.error('Error fetching movie data: ', err);
  }
};

const seedMovies = async () => {
  for (const title of MOVIE_TITLES) {
    try {
      const movieData = await fetchMovieData(title);
      if (movieData) {
        const formattedMovie = formatMovieData(movieData);
        await addMovie(formattedMovie);
      }
    } catch (err) {
      console.error('Error in seeding process: ', err);
    }
  }
};

await seedMovies();
