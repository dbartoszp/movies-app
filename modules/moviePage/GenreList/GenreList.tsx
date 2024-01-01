import { SingleGenreBox } from './SingleGenreBox/SingleGenreBox';

type Genre = {
  key: string;
  value: string;
};

type GenreListProps = {
  genreList: Genre[];
};

export const GenreList = ({ genreList }: GenreListProps) => {
  return (
    <div className='flex flex-wrap justify-center space-x-2 bg-dark-blue px-2 py-3'>
      {genreList.map((genre) => (
        <SingleGenreBox key={genre.key} genre={genre} />
      ))}
    </div>
  );
};
