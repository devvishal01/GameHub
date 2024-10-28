import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQuerystore from "../store";

// interface Props {
//   gameQuery: GameQuery;
// }

// const GameHeading = ({ gameQuery }: Props) => {
const GameHeading = () => {
  // console.log("Game heading");
  const genreId = useGameQuerystore((s) => s.gameQuery?.genreId);
  const genre = useGenre(genreId);

  const platformID = useGameQuerystore((s) => s.gameQuery?.platformID);
  const platform = usePlatform(platformID);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading
      as="h1"
      marginY={5}
      fontSize={{
        base: "35px",
        md: "5xl",
      }}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
