import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Heading fontSize={"2xl"} margin={10}>
        Popular Games
      </Heading>

      <SimpleGrid
        padding={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
      >
        {games.map((game) => (
            <GameCard key={game.id} game={game} />
        ))}
        { loading && Skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
        )
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
