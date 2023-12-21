import Image from 'next/image';

type MovieImageProps = {
  image: string;
  title: string;
};

export const MovieImage = ({ image, title }: MovieImageProps) => {
  return (
    <div className='mb-8 w-full md:mb-0 md:w-1/5'>
      <Image
        src={image}
        width={600}
        height={1000}
        alt={`${title} poster`}
        layout='responsive'
      />
    </div>
  );
};
