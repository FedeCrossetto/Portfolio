import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/navbar/Navbar";
import {Home} from "./components/Home";
import theme from "./theme/theme";
import Skills from "./components/Skills";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Home/>
      <Skills/>
    </ChakraProvider>
  );
}

export default App;
