import {
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  Stack,
  HStack
} from "@chakra-ui/react";
import { Carousel } from "./Carousel";
import {BsArrowLeftShort,BsArrowRightShort} from "react-icons/bs";

const Portfolio = () => {
  return (
    <>
      <Container
        minWidth={["540px", "767px", "992px", "1200px"]}
        pt="20rem"
        pb="10rem"
        id="portfolio"
      >
        <Flex justify="center">
          <VStack>
            <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>Portfolio</Heading>
            <Text fontSize={["sm", "md", "md", "md"]} color="brand.tertiary">
              Drag to the sides
            </Text>
            <Stack pt="5rem">
              <HStack>
              <BsArrowLeftShort />
              <Carousel />
              <BsArrowRightShort />
              </HStack>
            </Stack>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Portfolio;
