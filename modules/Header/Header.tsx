'use client';

import { Link } from '../ui/Button/Link';
import Navbar from '../Navbar/Navbar';
import { Text } from '../ui/Text/Text';

export const Header = () => {
  return (
    <header className='mb-12'>
      <Navbar>
        <Navbar.Group>
          <Navbar.NavbarGroupItem visibility='both'>
            <Link href='/'>
              <Text>LOGO</Text>
            </Link>
          </Navbar.NavbarGroupItem>
          <Navbar.NavbarGroupItem visibility='both'>
            <Link href='/movies'>
              <Text>MOVIES</Text>
            </Link>
          </Navbar.NavbarGroupItem>
          <Navbar.NavbarGroupItem visibility='both'>
            <Link href='/account'>
              <Text>ACCOUNT</Text>
            </Link>
          </Navbar.NavbarGroupItem>
        </Navbar.Group>
      </Navbar>
    </header>
  );
};
