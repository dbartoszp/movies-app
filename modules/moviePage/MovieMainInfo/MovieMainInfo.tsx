import { Text } from '@/modules/ui/Text/Text';
import { Link } from '@/modules/ui/Button/Link';

type MovieMainInfoProps = {
  title: string;
  year: string;
  directors: string[] | string;
  trailer: string;
  runtimeStr: string;
};

export const MovieMainInfo = ({
  title,
  year,
  directors,
  trailer,
  runtimeStr,
}: MovieMainInfoProps) => {
  const directorsJoined = Array.isArray(directors)
    ? directors.join(', ')
    : directors;

  return (
    <div className='flex flex-col items-center justify-center space-y-4 md:mt-16 md:flex-row md:items-start md:justify-between md:space-x-24'>
      <div className='flex flex-col space-y-4'>
        <div>
          <Text variant='title'>{`${title} (${year})`}</Text>
          <Text>
            Directed by <strong>{directorsJoined}</strong>
          </Text>
        </div>
        <div className='flex flex-row items-center space-x-24'>
          {trailer && (
            <Link variant='green' size='sm' href={trailer}>
              Watch the trailer
            </Link>
          )}
          <Text variant='subtitle'>{runtimeStr}</Text>
        </div>
      </div>
    </div>
  );
};
