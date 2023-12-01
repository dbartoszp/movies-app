import Image from 'next/image';
import { Text } from '../Text/Text';

export function HomepageBanner() {
	return (
		<div className="relative flex justify-center">
			<Image
				src="/images/homepageBanner.jpg"
				width={1600}
				height={923}
				className="w-full md:w-3/4 opacity-90"
				alt="homepageBanner"
				priority={true}
			/>
			<div className="absolute inset-0">
				<div className="absolute bottom-0 left-0 right-0 h-2/4 md:h-1/4 bg-gradient-to-t from-default-blue "></div>
				<div className="absolute top-0 bottom-0 left-0 md:left-[12.5%] w-[12.5%] bg-gradient-to-r from-default-blue "></div>
				<div className="absolute top-0 bottom-0 right-0 md:right-[12.5%] w-[12.5%] bg-gradient-to-l from-default-blue "></div>
			</div>
			<div className="absolute bottom-0 flex justify-center text-center">
				<Text variant="title">
					Rank, browse and make lists.
					<br />
					All about your favourite movies.
				</Text>
			</div>
		</div>
	);
}
