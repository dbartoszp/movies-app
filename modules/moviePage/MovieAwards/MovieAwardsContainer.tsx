import { SingleMovieAward } from './SingleMovieAward/SingleMovieAward';

type Award = {
  title: string;
  for: string;
  image: string;
};

type Awards = {
  awards: Award[];
};

type AwardsString = {
  awards: string;
};

export const MovieAwardsContainer = ({ awards }: AwardsString) => {
  return (
    <div className='flex items-center justify-center'>
      <SingleMovieAward award={awards} />
    </div>
  );
};
