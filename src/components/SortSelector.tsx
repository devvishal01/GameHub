import { Menu, Button } from "@chakra-ui/react";
import { MenuButton } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import { MenuList } from "@chakra-ui/react";
import { MenuItem } from "@chakra-ui/react";
import useGameQuerystore from "../store";

// interface Props {
//   onSelectSortOrder: (sortOrder: string) => void;
//   sortOrder: string;
// }
// const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
const SortSelector = () => {
  // console.log("sort selectore");

  const sortOrder = useGameQuerystore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQuerystore((s) => s.setSortOrder);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentSortOrder ? currentSortOrder?.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
