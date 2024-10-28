import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQuerystore from "../store";
import { useNavigate } from "react-router-dom";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const SearchINput = ({ onSearch }: Props) => {

const SearchINput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const setSearchText = useGameQuerystore((s) => s.setSearchText);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            setSearchText(ref.current.value);

            navigate("/");
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} color="gray.500" />
          <Input
            borderRadius={20}
            placeholder="Search games.."
            variant="fill"
            ref={ref}
            backgroundColor="#262626"
            color="gray.500"
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchINput;
