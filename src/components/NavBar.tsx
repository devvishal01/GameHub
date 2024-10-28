import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchINput from "./SearchInput";
import { Link } from "react-router-dom";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const NavBar = ({ onSearch }: Props) => {
const NavBar = () => {
  // console.log("navbar");

  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      {/* <SearchINput onSearch={onSearch} /> */}
      <SearchINput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
