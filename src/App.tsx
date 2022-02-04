import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./components/layout/Home";
import theme from "./theme/theme";
import Skills from "./components/layout/Skills";
import About from "./components/layout/About";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </ChakraProvider>
  );
}

export default App;
