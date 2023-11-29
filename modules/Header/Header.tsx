"use client";

import { Link } from "../ui/Button/Link";
import Navbar from "../Navbar/Navbar";
import { Text } from "../Text/Text";

// const iconSize = 30;

export const Header = () => {
  //   const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  //   const onMobileToggleMenu = () =>
  //     setIsOpenMobileMenu((prevState) => !prevState);
  return (
    <header className="mb-12">
      <Navbar>
        <Navbar.Group>
          <Navbar.NavbarGroupItem visibility="both">
            <Link href="/">
              <Text>LOGO</Text>
            </Link>
          </Navbar.NavbarGroupItem>
          <Navbar.NavbarGroupItem visibility="both">
            <Link href="/">
              <Text>MOVIES</Text>
            </Link>
          </Navbar.NavbarGroupItem>
          <Navbar.NavbarGroupItem visibility="both">
            <Link href="/">
              <Text>ACCOUNT</Text>
            </Link>
          </Navbar.NavbarGroupItem>
        </Navbar.Group>
      </Navbar>
    </header>
  );
};
