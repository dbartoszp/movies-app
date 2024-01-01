import { Text } from '../ui/Text/Text';
import { Link } from '../ui/Button/Link';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='mt-6 h-36 w-full bg-dark-blue'>
      <div className='flex flex-col space-y-10 pt-6 text-center'>
        <div>
          <Text>All about your favourite movies.</Text>
        </div>
        <div className='flex flex-col items-center space-y-3 bg-dark-blue'>
          <div className='mb-4 border-b'>
            <Text>Contact us via:</Text>
          </div>
          <Text>Phone - 123 456 789</Text>
          <Text>Email - bartpom034@student.polsl.pl</Text>
          <div className='flex flex-row space-x-6'>
            <Link href='https://www.linkedin.com/in/bartosz-pomierny-b751aa274/'>
              <FaLinkedin size={process.env.ICON_SIZE} />
            </Link>
            <Link href='https://github.com/dbartoszp'>
              <FaGithub size={process.env.ICON_SIZE} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
