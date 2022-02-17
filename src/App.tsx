import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./components/layout/Home";
import theme from "./theme/theme";
import Skills from "./components/layout/Skills";
import About from "./components/layout/About";
import Experience from "./components/layout/Experience";
import Portfolio from "./components/layout/Portfolio";
import { Carousel } from "./components/layout/Carousel";
import { Contact } from "./components/layout/Contact";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact/>
    </ChakraProvider>
  );
}

export default App;
