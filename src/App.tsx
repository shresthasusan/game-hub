import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid padding={{ sm:  "0 20px", lg:" 24px 40px" }} 
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
    >
      <GridItem  area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
