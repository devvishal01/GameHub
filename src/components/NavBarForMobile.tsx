import { Box, HStack, Image, Spacer } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchINput from "./SearchInput";
import { useState } from "react";
import Sidebar from "./Sidebar";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const NavBar = ({ onSearch }: Props) => {
const NavBarForMobile = () => {
  // console.log("navbar");
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <Box padding="10px">
        <HStack>
          <GiHamburgerMenu
            size={27}
            onClick={() => setSideBarOpen(!isSideBarOpen)}
          />

          <Link to="/">
            <Image src={logo} boxSize="50px" objectFit="cover" />
          </Link>
          <Spacer />

          <ColorModeSwitch />
        </HStack>
        <Box marginTop={3}>
          <SearchINput />
        </Box>
      </Box>
      {isSideBarOpen && (
        <Sidebar
          isSideBarOpen={isSideBarOpen}
          setSideBarOpen={setSideBarOpen}
        />
      )}
    </>
  );
};

export default NavBarForMobile;
