import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Show,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQuerystore from "../store";
import { useNavigate } from "react-router-dom";

interface Props {
  //   onSelectGenre: (genre: Genre) => void;
  //   selectedGenreId?: number;
  setSideBarOpen?: (id: boolean) => void;
}

// const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
const GenreList = ({ setSideBarOpen }: Props) => {
  // console.log("Genere");

  const { data, isLoading, error } = useGenres();

  const navigate = useNavigate();

  const genreId = useGameQuerystore((s) => s.gameQuery.genreId);
  const setGenreID = useGameQuerystore((s) => s.setGenreID);

  if (isLoading) return <Spinner />;

  if (error) return null;
  return (
    <>
      <Show above="lg">
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
      </Show>
      <Show below="lg">
        <Heading fontSize="2xl" marginBottom={3} color="white">
          Genres
        </Heading>
      </Show>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => {
                  setGenreID(genre.id);
                  setSideBarOpen?.(false);
                  navigate("/");
                }}
                variant="link"
                fontSize="large"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
