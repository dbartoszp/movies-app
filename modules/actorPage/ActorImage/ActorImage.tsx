import Image from 'next/image';

type ActorImageProps = {
	image: string;
	name: string;
};

export const ActorImage = ({ image, name }: ActorImageProps) => {
	return (
		<div className="mx-auto mb-8 w-2/5 md:mb-0 md:w-1/5">
			<Image
				src={image}
				width={300}
				height={500}
				alt={`${name}`}
				layout="responsive"
			/>
		</div>
	);
};
