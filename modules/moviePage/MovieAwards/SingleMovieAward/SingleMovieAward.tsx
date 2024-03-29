import { Text } from '@/modules/ui/Text/Text';

type Award = {
  title: string;
  for: string;
  image: string;
};

type SingleMovieAwardProps = {
  award: Award;
};

type SingleMovieAwardStringProps = {
  award: string;
};

export const SingleMovieAward = ({ award }: SingleMovieAwardStringProps) => {
  return <Text variant='green'>{award}</Text>;
};
