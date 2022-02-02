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
            minWidth={{base:"480px" , sm:"767px" , md:"992px" , lg:"1200px"}}
            // width={{ base: "full", md: "auto" }}
            py={3}
            bg={isDark ? "brand.dark" : "brand.light"}
            alignItems="center"
            justifyContent="space-between"
            pos="fixed"
            boxShadow="md"
          >
            <Stack alignContent="center" alignItems="center" right="0">
              <Text pl="2rem" letterSpacing={1.5}>
                Fede
              </Text>
            </Stack>
            <Flex alignItems="flex-center">
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
            minWidth={{base:"480px" , sm:"767px" , md:"992px" , lg:"1200px"}}                  
            pos="fixed"
            top="0"
            left="0"
            flexDirection="column"
            display={display}
            bg={isDark ? "brand.dark" : "brand.light"}
            justifyContent="center"
            justifySelf="center"
            justifyItems="center"
            justify="center"
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
            <Flex flexDir="column" align="center">
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
            </Flex>
          </Flex>
        </Center>
      </Box>
    </>
  );
};
export default Navbar;
