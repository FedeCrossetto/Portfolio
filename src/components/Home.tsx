import React, { Fragment } from "react";
import {
  useColorMode,
  Text,
  HStack,
  VStack,
  Box,
  Stack,
  Flex,
  Heading,
  IconButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon} from "@chakra-ui/icons";
import { BsLinkedin } from "react-icons/bs/";
import { FiGithub,FiLinkedin} from "react-icons/fi";


export const Home = () => {
  return (
    <>
    <Box pt={20}>
      <Flex pt={20} align="start">
        <VStack p={5} >
          <Flex>
          </Flex>
          <IconButton ml={2} icon={<FiGithub/>}  aria-label="Mode" variant="ghost"></IconButton>
          <IconButton ml={2} icon={<FiLinkedin/>}  aria-label="Mode" variant="ghost"></IconButton>
          <IconButton ml={2} icon={<FiLinkedin/>}  aria-label="Mode" variant="ghost"></IconButton>
        </VStack>
      </Flex>
    </Box>
    </>
  );
};
export default Home;
