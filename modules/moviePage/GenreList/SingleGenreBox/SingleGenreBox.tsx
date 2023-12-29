import { Text } from '@/modules/ui/Text/Text';

type Genre = {
  key: string;
  value: string;
};

type SingleGenreBoxProps = {
  genre: Genre;
};

export const SingleGenreBox = ({ genre }: SingleGenreBoxProps) => {
  return <Text variant='green'>{genre.value}</Text>;
};
