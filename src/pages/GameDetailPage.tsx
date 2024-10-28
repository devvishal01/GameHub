import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components/ExpandableText";
import { GameAttributes } from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenShot from "../components/GameScreenShot";

export const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={5}
      >
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>

          {/**This is my solution  */}

          {/* <SimpleGrid columns={2}>
        <Box>
          {" "}
          <GameAttributes<Platform>
            titel="Platforms"
            attribute={game.parent_platforms.map((p) => p.platform)}
          />
        </Box>
        <Box>
          {" "}
          <CriticScore titel="Metascore" score={game.metacritic} />
        </Box>
        <Box>
          {" "}
          <GameAttributes<Genre> titel="Genres" attribute={game.genres} />{" "}
        </Box>
        <Box>
          <GameAttributes<Publishers>
            titel="Publisher"
            attribute={game.publishers}
          />
        </Box>
      </SimpleGrid> */}
          {/**Mosh solution  */}

          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game?.id} />
          <GameScreenShot gameId={game?.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};
