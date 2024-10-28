import { Box, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import NavBarForMobile from "../components/NavBarForMobile";

const Layout = () => {
  return (
    <>
      <Show above="lg">
        <NavBar />
      </Show>
      <Show below="lg">
        <NavBarForMobile />
      </Show>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
