import React, { useState, ReactNode } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Text,
  Box,
  Link,
  HStack,
  Stack
  
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const Links = ["Home", "About", "Skills","Services","Portfolio","Contact me"];
  const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
      px={3}
      _hover={{
        color: "brand.secondary",
        textDecoration: "overline",
        textDecorationColor: "brand.secondary",
      }}
      href="#"
    >
      {children}
    </Link>
  );
  return (
    <>
      <Box pos="fixed" >
        <Flex
          py={3}
          width="full"
          bg={isDark ? "brand.dark" : "brand.light"}
          alignItems="flex-end"
          justifyContent="space-between"
          pos="fixed"
          boxShadow='md'
        >
          <Stack alignContent="center" alignItems="center" mb={1.5}>

          <Text pl={6}  letterSpacing={1.5} alignItems="flex-end" >
            Fede
          </Text>
          </Stack>
          <Flex
            alignItems="flex-end"
          >
            <HStack as="nav" pr="2rem">
              <Flex display={["none", "none", "flex", "flex"]}>

              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
                ))}
                </Flex>
              <Flex display={["flex", "flex", "none", "none"]}>
                <IconButton
                  icon={<HamburgerIcon />}
                  aria-label="Open Menu"
                  variant="ghost"
                  // display={["flex", "flex", "none", "none"]}
                  onClick={() => changeDisplay("flex")}
                ></IconButton>
              </Flex>
              <IconButton
                icon={isDark ? <MoonIcon /> : <SunIcon />}
                aria-label="Mode"
                variant="ghost"
                onClick={toggleColorMode}
                my={3}
              ></IconButton>
            </HStack>
          </Flex>
        </Flex>

        {/* BUGER MENU> */}
        <Flex
          w="100vw"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDirection="column"
          display={display}
          bg={isDark ? "brand.dark" : "brand.light"}
        >
          <Flex justify="flex-start">
            <IconButton
              aria-label="Close Menu"
              icon={<CloseIcon />}
              mt={2}
              ml={2}
              size="sm"
              varian="ghost"
              onClick={() => changeDisplay("none")}
            ></IconButton>
          </Flex>
          <Flex flexDir="column" align="center">
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={3} w="100%">
                Home
              </Button>
            </NextLink>
            <NextLink href="/about" passHref>
              <Button as="a" variant="ghost" aria-label="About" my={3} w="100%">
                About
              </Button>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={3}
                w="100%"
              >
                Contact
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Box>
	  
	  
	  
	       {/* <Box mb='5rem' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex justifyContent="start" display={["none", "none", "flex", "flex"]}  >
        <Flex 
         pos='fixed'
         top="1rem" align="center">
           <Flex >
          <Flex>
            <NextLink href="/home" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={3}
                w="100%"
              >
                Fede
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      </Flex>
      <Flex justifyContent="end" >
        <Flex pos="fixed" top="1rem" align="center">
          <Flex display={["none", "none", "flex", "flex"]} >
          <HStack spacing={8} alignItems={'center'} >
            <HStack
           
              as={'nav'}
              spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          </Flex>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            variant="ghost"
            display={["flex", "flex", "none", "none"]}
            onClick={() => changeDisplay("flex")}
          ></IconButton>
          <IconButton
            icon={<MoonIcon />}
            aria-label="Mode"
            variant="ghost"
            onClick={toggleColorMode}
            my={3}
          ></IconButton>
        </Flex> */}

      {/* BURGER MENU. */}
      {/* <Flex
          w="100vw"
          // bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDirection="column"
          display={display}
        >
          <Flex justify="flex-start">
            <IconButton
              aria-label="Close Menu"
              icon={<CloseIcon />}
              mt={2}
              mr={2}
              size="sm"
              varian="ghost"
              onClick={() => changeDisplay("none")}
            ></IconButton>
          </Flex>
          <Flex flexDir="column" align="center">
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={3} w="100%">
                Home
              </Button>
            </NextLink>
            <NextLink href="/about" passHref>
              <Button as="a" variant="ghost" aria-label="About" my={3} w="100%">
                About
              </Button>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={3}
                w="100%"
              >
                Contact
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
      </Box> */}
    </>
  );
};
export default Navbar;
