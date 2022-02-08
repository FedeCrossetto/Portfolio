import React, { useState} from "react";
import {
  useColorMode,
  Flex,
  IconButton,
  Link,
  HStack,
  VStack,
  Container,
  Image,
  useMediaQuery,
  Grid,
  Center,
  Tooltip
} from "@chakra-ui/react";
import { HamburgerIcon,MoonIcon, SunIcon,SmallCloseIcon } from "@chakra-ui/icons";
import { FaSlideshare } from "react-icons/fa";
import { BsBarChart ,BsTelephone} from "react-icons/bs";
import { HiOutlineHome ,HiCode } from "react-icons/hi";
import { RiContactsLine  } from "react-icons/ri";
import { Link as LinkScroll ,animateScroll as scroll} from "react-scroll";
import logoo from "../../assets/logoo.png";
import {
  MotionFlex,
  showToggleMode,
} from "../../styles/animation";




export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");

  const Links = [
    { name: "Home", href: "home" , icon:<HiOutlineHome /> },
    { name: "About", href: "about", icon:<RiContactsLine /> },
    { name: "Skills", href: "skills", icon:<BsBarChart /> },
    { name: "Experience", href: "experience",icon:<HiCode />  },
    { name: "Portfolio", href: "portfolio",icon:<FaSlideshare /> },
    { name: "Contact me", href: "contactme", icon:<BsTelephone /> },
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
          bottom={isNotSmallerScreen ? "" : "0"}
        >
          <HStack alignContent="center" fontSize="xl">
            <Link
              letterSpacing={1.5}
              _hover={{
                textDecoration: "none",
              }}
              onClick={() => scroll.scrollToTop()}
              ml={["", "1.5rem", "", "3.5rem"]}
              pb={["1rem", "1rem", "", ""]}
            >
              <Image h="4rem" src={logoo} />
            </Link>
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
                      <Tooltip
                        label="Auto start"
                        placement="bottom"
                        fontSize="sm"
                      >
                        {link.name}
                      </Tooltip>
                    </Link>
                  </LinkScroll>
                ))}
              </Flex>
              <MotionFlex
                pr="1rem"
                whileTap="tap"
                whileHover="hover"
                variants={showToggleMode}

              >
                <IconButton
                  icon={isDark ? <MoonIcon /> : <SunIcon />}
                  aria-label="Mode"
                  variant="ghost"
                  onClick={toggleColorMode}

                  _hover={{
                    textDecorationColor: "none",
                    boxShadow: "none",
                    outline: "none",
                    border: "none",
                  }}
                  _visited={{
                    textDecorationColor: "none",
                    boxShadow: "none",
                    outline: "none",
                    border: "none",
                  }}
                  _active={{
                    textDecorationColor: "none",
                    boxShadow: "none",
                    outline: "none",
                    border: "none",
                  }}
                ></IconButton>
              </MotionFlex>
              <MotionFlex display={["flex", "flex", "none", "none"]}>
                <IconButton
                  icon={
                    display === "none" ? <HamburgerIcon /> : <SmallCloseIcon />
                  }
                  aria-label="Open Menu"
                  variant="ghost"
                  mr="1rem"
                  onClick={
                    display === "none"
                      ? () => changeDisplay("flex")
                      : () => changeDisplay("none")
                  }
                ></IconButton>
              </MotionFlex>
            </HStack>
          </Flex>
        </Flex>

        {/* BUGER MENU> */}
        <Center>
          <Flex
            minWidth={{ base: "480px", sm: "767px", md: "992px", lg: "1200px" }}
            pos="fixed"
            bottom="4.5rem"
            width="100%"
            flexDirection="column"
            display={display}
            bg={isDark ? "brand.dark" : "brand.light"}
          >
            <Grid
              alignContent="center"
              templateColumns="repeat(3 ,1fr)"
              gap={12}
              py="1rem"
              justifyContent="center"
              display={["grid", "grid", "none", "none"]}
            >
              {Links.map((link) => (
                <VStack alignContent="center" fontWeight="bold" fontSize="xl">
                  <LinkScroll
                    to={link.href}
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    <Link
                      variant="ghost"
                      aria-label="Home"
                      w="100%"
                      key={link.name}
                      alignContent="center"
                      justifyContent="center"
                    >
                      <Center>{link.icon}</Center>
                    </Link>
                  </LinkScroll>
                </VStack>
              ))}
            </Grid>
          </Flex>
        </Center>
      </Container>
    </>
  );
};
export default Navbar;

