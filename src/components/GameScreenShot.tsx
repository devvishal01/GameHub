import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}
const GameScreenShot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const screenShots = data?.results;

  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={2}
      >
        {screenShots?.map((s) => (
          <Image src={s.image} key={s.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenShot;
