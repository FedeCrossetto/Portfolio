import React, { ReactNode, useState } from 'react';
import { Center, Flex, Heading, Link, Spacer, useColorMode, VStack } from '@chakra-ui/react';
import NextLink from "next/link";
import { createBreakpoints } from '@chakra-ui/theme-tools'

export const Navbar2 = () => {
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
      <VStack p="5" bg="red" fontSize={["lg","lg","xl","2xl"]}

     >

          <Flex  justifyContent="center" >
            <Heading
            ml="8" size="md" fontWeight="semibold" color="brand.primary">Fede_</Heading>
            <Spacer></Spacer>
            {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))}
          </Flex>
      </VStack>
    </>
  );
};

export default Navbar2;