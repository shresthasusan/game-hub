import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        <li>Games</li>
        {games.map((game, index) => (
          <li key={game.id}>
            {index + 1}. {game.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
