import { Grid, Show, GridItem, Box, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
          // Remove this prop drilling use value from direct store
          // selectedGenreId={gameQuery?.genreId}
          // onSelectGenre={(genre) =>
          //   setGameQuery({ ...gameQuery, genreId: genre.id })
          // }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          {/* Remove this prop drilling use value from direct store */}
          <GameHeading />
          <Flex
            marginBottom={5}
            flexWrap="wrap"
            gap={{
              base: "10px",
              md: "0px",
            }}
          >
            <Box marginRight={5}>
              <PlatformSelector
              // Remove this prop drilling use value from direct store

              // selectedPlatformId={gameQuery.platformID}
              // onSelectPlatform={(platform) =>
              //   setGameQuery({ ...gameQuery, platformID: platform.id })
              // }
              />
            </Box>
            <SortSelector
            // Remove this prop drilling use value from direct store
            // sortOrder={gameQuery.sortOrder}
            // onSelectSortOrder={(sortOrder) =>
            //   setGameQuery({ ...gameQuery, sortOrder })
            // }
            />
          </Flex>
        </Box>
        {/* // Remove this prop drilling use value from direct store */}
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
