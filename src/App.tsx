import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      padding={{ sm: "0 20px", lg: " 24px 40px" }}
      templateAreas={{
        base: `
        "nav "
        "main"
      `,
        lg: `
        "nav nav"
        "aside main"
      `,
      }}
      templateColumns={{ base: "1fr", lg: "300px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            onGenreSelect={(genre) => {
              setGameQuery({ ...gameQuery, genre });
              console.log(genre);
            }}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} marginX={1}>
          <PlatformSelector
            onPlatformSelect={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector 
          onSelectOrder={
            (sortOrder) => 
              setGameQuery({ ...gameQuery, sortOrder })
              } selectedOrder={gameQuery.sortOrder}  />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
