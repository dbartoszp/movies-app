import { MovieMainInfo } from '@/modules/moviePage/MovieMainInfo/MovieMainInfo';
import { MovieRatings } from '@/modules/moviePage/MovieRatings/MovieRatings';

const testMovieData = {
	poster: 'https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
	title: 'The Boy and the Heron',
	year: '2023',
	director: 'Hayao Miyazaki',
	length: 124,
	trailer: 'https://www.youtube.com/watch?v=t5khm-VjEu4',
	cast: 'Soma Santoki, Masaki Suda',
	awards: 'Huge Award1, Great Award2',
	imdbRating: 4.6,
	moviesappRating: 4.5,
	moviesappReviewCount: 2137,
};

export default function MoviePage() {
	return (
		<div className="flex min-h-screen flex-col">
			<MovieMainInfo movie={testMovieData} />
			<MovieRatings
				imdbRating={testMovieData.imdbRating}
				moviesappRating={testMovieData.moviesappRating}
				moviesappReviewCount={testMovieData.moviesappReviewCount}
			/>
		</div>
	);
}
