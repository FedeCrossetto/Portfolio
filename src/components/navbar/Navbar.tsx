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
  Stack,
  Center,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const Links = [
    "Home",
    "About",
    "Skills",
    "Services",
    "Portfolio",
    "Contact me",
  ];

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
       <Box>
        <Center h="3rem">
          <Flex
            minWidth={["480px","767px","992px","1200px"]}
            py={1}
            bg={isDark ? "brand.dark" : "brand.ligth"}
            alignItems="center"
            justifyContent="space-between"
            pos="fixed"
            // boxShadow="md"
          >
            <HStack alignContent="center" fontSize="xl" px="3rem">
              <Text pl="1.5rem" letterSpacing={1.5} >
                Fede
              </Text>
              <Text color={["brand.primary","brand.secondary","brand.primary","brand.secondary"]} fontSize="3xl">_</Text>
            </HStack>
            <Flex alignItems="flex-center">
              <HStack as="nav" >
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
                ></IconButton>
              </HStack>
            </Flex>
          </Flex>

          {/* BUGER MENU> */}
          <Flex
            minWidth={{base:"480px" , sm:"767px" , md:"992px" , lg:"1200px"}}                  
            pos="fixed"
            top="0"
            left="0"
            flexDirection="column"
            display={display}
            bg={isDark ? "brand.dark" : "brand.light"}
            justifyContent="center"
            justifySelf="center"
          >
            <Flex justify="flex-start">
              <IconButton
                aria-label="Close Menu"
                icon={<CloseIcon />}          
                size="sm"
                varian="ghost"
                onClick={() => changeDisplay("none")}          
              ></IconButton>
            </Flex>
            <VStack  align="center">
              <NextLink href="/" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Home"                
                  w="100%"
                >
                  Home
                </Button>
              </NextLink>
              <NextLink href="/about" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="About"
                  w="100%"
                >
                  About
                </Button>
              </NextLink>
              <NextLink href="/contact" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Contact"
                  w="100%"
                >
                  Contact
                </Button>
              </NextLink>
            </VStack>
          </Flex>
        </Center>
        </Box>
    </>
  );
};
export default Navbar;
