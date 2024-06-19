import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;

}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading, skeletons } = useGames(gameQuery);

  return (
    <>
      {error && <Text>{error}</Text>}
      <Heading fontSize={"2xl"} margin={10}>
        {gameQuery.genre?.id ? `${gameQuery.genre.name}` : "All Games"}
      </Heading>

      <SimpleGrid
        padding={1}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
      >
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
