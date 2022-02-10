import React, { ReactElement } from "react";
import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  Image,
  Container,
  Box,
  useMediaQuery,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HiOutlineDownload } from "react-icons/hi";
import MyCV from "../../assets/cv.pdf";



export const About = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");

  return (
    <>
      <Container  minWidth={["540px", "767px", "992px", "1200px"]} pt={["8rem","8rem","18rem","18rem"]} id="about">
        <Flex justify="center">
          <VStack>
            <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>About Me</Heading>
            <Text fontSize={["sm", "md", "md", "md"]} color="brand.tertiary">
              My Introduction
            </Text>
            <Stack
              direction={["column", "column", "row", "row"]}
              align={["center", "center", "start", "start"]}
              p={["2rem","2rem","8rem","8rem"]}
            >
              <Image
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                boxSize={["300px","300px","400px","400px"]}
                ml={["","","2rem","2rem"]}
                alt="Me"
                objectFit="contain"
                borderRadius="xl"
              ></Image>
              <Text
                px={["2rem", "4rem", "6rem", "8rem"]}
                fontSize="sm"
                fontWeight="light"
                textAlign={["center", "center", "start", "start"]}
              >
                Web developer, with extensive knowledge and years of experience
                ,working in web technologies and UI / UX design ,devilering
                quality work. Web developer, with extensive knowledge and years of experience
                ,working in web technologies and UI / UX design ,devilering
                quality work.
                <HStack spacing="24px" justify="center" pt={["2rem","2rem","4rem","4rem"]}>
                  <Box w={["", "", "5vw", "5vw"]}>
                    <Heading fontSize="2xl">03+</Heading>
                    <Text color="brand.tertiary">Completed projects</Text>
                  </Box>
                  <Box w={["", "", "5vw", "5vw"]}>
                    <Heading fontSize="2xl">06+</Heading>
                    <Text color="brand.tertiary">Completed projects</Text>
                  </Box>
                  <Box w={["", "", "5vw", "5vw"]}>
                    <Heading fontSize="2xl">05+</Heading>
                    <Text color="brand.tertiary">Companies worked</Text>
                  </Box>
                </HStack>
                {isNotSmallerScreen ? (
                  <Button
                    as="a"
                    fontSize="sm"
                    rightIcon={<HiOutlineDownload />}
                    mt="3rem"
                    variant="outline"
                    color="brand.primary"
                    href={MyCV}
                    download ="Fede Crossetto CV"
                    pos="static"
                  >
                    Download CV
                  </Button>
                ) : (
                  <Center>
                    <Button
                      as="a"
                      fontSize="sm"
                      rightIcon={<HiOutlineDownload />}
                      mt="3rem"
                      variant="outline"
                      color="brand.primary"
                      href={MyCV}
                      download ="Fede Crossetto CV"
                    >
                      Download CV
                    </Button>
                  </Center>
                )}
              </Text>
            </Stack>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default About;
