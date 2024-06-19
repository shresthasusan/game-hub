import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const Header = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" fontSize={"6xl"} marginY={1}>
      {gameQuery?.platform?.name || null} {gameQuery.genre?.name} Games
    </Heading>
  );
};

export default Header;
