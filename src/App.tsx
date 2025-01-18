import { Box, Container, Toolbar } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
const App = () => {
  return (
    <Box component="div" display="flex" width="100vw">
      <NavBar />
      <Container
        maxWidth="xl"
        disableGutters
      >
        <Toolbar />
        <Hero/>
      </Container>
    </Box>
  );
};

export default App;
