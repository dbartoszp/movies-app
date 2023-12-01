import React from 'react';
import { Text } from '../Text/Text';
import { Link } from '../ui/Button/Link';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
	return (
		<footer className="absolute h-36 bottom-0 bg-dark-blue w-full">
			<div className="mt-6 text-center flex flex-col space-y-10">
				<div>
					<Text>All about your favourite movies.</Text>
				</div>
				<div className="flex flex-col space-y-3 items-center bg-dark-blue">
					<div className="border-b mb-4">
						<Text>Contact us via:</Text>
					</div>
					<Text>Phone - 123 456 789</Text>
					<Text>Email - bartpom034@student.polsl.pl</Text>
					<div className="flex flex-row space-x-6">
						<Link href="https://www.linkedin.com/in/bartosz-pomierny-b751aa274/">
							<FaLinkedin size={30} />
						</Link>
						<Link href="https://github.com/dbartoszp">
							<FaGithub size={30} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
