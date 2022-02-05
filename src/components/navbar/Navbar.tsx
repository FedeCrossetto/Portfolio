import React, { useState} from "react";
import {
  useColorMode,
  Flex,
  IconButton,
  Text,
  Link,
  HStack,
  VStack,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as LinkScroll} from "react-scroll";


export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const Links = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Portfolio", href: "portfolio" },
  ];

  return (
    <>
        <Container minWidth={["480px", "767px", "992px", "1200px"]} h="3rem">
          <Flex
            minWidth={["480px", "767px", "992px", "1200px"]}
            py={1}
            bg={isDark ? "brand.dark" : "brand.light"}
            alignItems="center"
            justifyContent="space-between"
            pos="fixed"
            // boxShadow="md"
          >
            <HStack alignContent="center" fontSize="xl" >
              <LinkScroll to="home" spy={true} smooth={true} duration={1000}>
                <Link                
                  letterSpacing={1.5}
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  Fede
                </Link>
              </LinkScroll>
              <Text
                color={[
                  "brand.primary",
                  "brand.secondary",
                  "brand.primary",
                  "brand.secondary",
                ]}
                fontSize="3xl"
              >
                _
              </Text>
            </HStack>
            <Flex alignItems="flex-center">
              <HStack as="nav">
                <Flex display={["none", "none", "flex", "flex"]}>
                  {Links.map((link) => (
                    <LinkScroll
                      to={link.href}
                      spy={true}
                      smooth={true}
                      // offset={50} Es para llevar mas abajo del componente.
                      duration={1000}
                    >
                      {" "}
                      <Link
                        px={3}
                        _hover={{
                          color: "brand.secondary",
                          textDecoration: "overline",
                          textDecorationColor: "brand.secondary",
                        }}
                        key={link.name}
                      >
                        {link.name}
                      </Link>
                    </LinkScroll>
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
                  pr="2rem"
                ></IconButton>
              </HStack>
            </Flex>
          </Flex>

          {/* BUGER MENU> */}
          <Flex
            minWidth={{ base: "480px", sm: "767px", md: "992px", lg: "1200px" }}
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
            <VStack align="center">
              {Links.map((link) => (
                <LinkScroll
                  to={link.href}
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  {" "}
                  <Link
                    variant="ghost"
                    aria-label="Home"
                    w="100%"
                    key={link.name}
                  >
                    {link.name}
                  </Link>
                </LinkScroll>
              ))}
            </VStack>
          </Flex>
        </Container>
    </>
  );
};
export default Navbar;

