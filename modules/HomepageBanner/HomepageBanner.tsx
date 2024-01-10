import Image from 'next/image';
import { Text } from '../ui/Text/Text';

export function HomepageBanner() {
  return (
    <>
      <div className='relative mx-auto flex items-center justify-center'>
        <Image
          src='/images/homepageBanner.jpg'
          width={1600}
          height={923}
          className='w-full opacity-90 md:w-3/5'
          alt='homepageBanner'
          priority={true}
        />
        <div className='absolute inset-0'>
          <div className='absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-default-blue md:h-1/4 '></div>
          <div className='absolute bottom-0 left-0 top-0 w-[20%] bg-gradient-to-r from-default-blue md:left-[20%] '></div>
          <div className='absolute bottom-0 right-0 top-0 w-[20%] bg-gradient-to-l from-default-blue md:right-[20%] '></div>
        </div>
      </div>
      <div className=' flex flex-col justify-center text-center'>
        <Text variant='subtitle'>
          <span className='text-xs'>
            Author: Wes Anderson /Imperial - Cinepix/ press material
          </span>
        </Text>
        <Text variant='title'>
          Rank, browse and make lists.
          <br />
          All about your favourite movies.
        </Text>
      </div>
    </>
  );
}
