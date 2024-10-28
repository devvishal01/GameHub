import { Box, HStack, Spacer } from "@chakra-ui/react";
import GenreList from "./GenreList";
import { ImCross } from "react-icons/im";
import { useEffect, useRef } from "react";
import ReactFocusLock from "react-focus-lock";

interface Props {
  isSideBarOpen: boolean;
  setSideBarOpen: (is: boolean) => void;
}

const Sidebar = ({ isSideBarOpen, setSideBarOpen }: Props) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const handleClickOutSide = (e: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
      setSideBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => handleClickOutSide(e));

    return () =>
      document.removeEventListener("mousedown", (e) => handleClickOutSide(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSideBarOpen, boxRef]);

  return (
    <>
      <ReactFocusLock autoFocus={false}>
        <Box
          ref={boxRef}
          position="absolute"
          width="250px"
          zIndex={5}
          top={0}
          padding={3}
          backgroundColor="#262626"
        >
          <HStack>
            <Spacer />
            <ImCross
              onClick={() => setSideBarOpen(!isSideBarOpen)}
              color="white"
            />
          </HStack>
          <GenreList setSideBarOpen={setSideBarOpen} />
        </Box>
      </ReactFocusLock>
    </>
  );
};

export default Sidebar;
