import { Box, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaRegSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    // <HStack>
    //   <Switch
    //     colorScheme="green"
    //     isChecked={colorMode === "dark"}
    //     onChange={toggleColorMode}
    //   />
    //   <Text whiteSpace="nowrap">Dark Mode</Text>
    // </HStack>
    <Box
      padding={2}
      borderRadius="50%"
      backgroundColor={colorMode === "dark" ? "green" : "white"}
      cursor="pointer"
    >
      {colorMode === "dark" ? (
        <Text onClick={toggleColorMode}>
          <FaRegSun size={22} />
        </Text>
      ) : (
        <Text onClick={toggleColorMode}>
          <FaMoon size={22} />
        </Text>
      )}
    </Box>
  );
};

export default ColorModeSwitch;
