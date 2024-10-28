import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQuerystore from "../store";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number;
// }

// const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
const PlatformSelector = () => {
  // console.log("platefor");

  const { data, error } = usePlatforms();

  const platformID = useGameQuerystore((s) => s.gameQuery.platformID);
  const setPlatformId = useGameQuerystore((s) => s.setPlatformId);

  const selectedPlatform = usePlatform(platformID);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
