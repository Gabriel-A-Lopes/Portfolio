import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Hero from "./sections/Hero";
import Stack from "./sections/Stack";

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <Hero/>
      <Stack/>
    </ChakraProvider>
  )
}

export default App
