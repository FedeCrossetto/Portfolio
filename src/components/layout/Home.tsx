import React, { Fragment } from "react";
import {
  useColorMode,
  Text,
  VStack,
  Flex,
  Heading,
  IconButton,
  Link,
  Divider,
  Center,
  useMediaQuery,
  Image,
  Button,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ArrowDownIcon
} from "@chakra-ui/icons";
import { SiNetlify } from "react-icons/si";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TiArrowRightOutline, TiArrowDownOutline } from "react-icons/ti";
import { BsMouse3 } from "react-icons/bs";
import portfolio from "../../assets/portfolio.png";
import messi from "../../assets/messi.png";

const Home = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");

  return (
    <>
      <Center spacing={6}>
        <Flex
          pt="10rem"
          minWidth={{ base: "480px", sm: "767px", md: "992px", lg: "1200px" }}
        >
          <VStack pt="6rem" px="4rem">
            <Link href="https://github.com/FedeCrossetto" isExternal>
              <IconButton
                size="lg"
                _hover={{ color: "brand.secondary" }}
                icon={<FiGithub />}
                aria-label="Gitlab"
                variant="ghost"
              ></IconButton>
            </Link>
            <Link href="https://app.netlify.com/teams/fede-vazquez-crossetto/overview" isExternal>
              <IconButton
                size="lg"
                _hover={{ color: "brand.secondary" }}
                icon={<SiNetlify />}
                aria-label="Netlify"
                variant="ghost"
              ></IconButton>
            </Link>
            <Link href="https://ar.linkedin.com/in/federico-crossetto/en?trk=people-guest_people_search-card" isExternal>
              <IconButton
                size="lg"
                _hover={{ color: "brand.secondary" }}
                icon={<FiLinkedin />}
                aria-label="Linkedin"
                variant="ghost"
              ></IconButton>
            </Link>
          </VStack>

          <VStack maxW={["", "", "26rem", "26rem"]} pt="6rem">
            <Heading
              fontSize={["3xl", "4xl", "5xl", "6xl"]}
              bgGradient="linear(to-r, brand.primary , brand.secondary)"
              bgClip="text"
              alignSelf={["center", "center", "start", "start"]}
            >
              Hi , I'am Fede
            </Heading>
            <Text
              fontSize={["lg", "xl", "2xl", "3xl"]}
              alignSelf={["center", "center", "start", "start"]}
            >
              Frontend developer
            </Text>
            <Divider variant="solid" />
            <Text
              fontSize="sm"
              fontWeight="light"
              pb="12"
              textAlign={["center", "center", "start", "start"]}
            >
              High level experience in web design and development
              knowledge,producing quality work.
            </Text>
            <Button
              rightIcon={<ArrowForwardIcon />}
              color="brand.primary"
              fontSize="sm"
              variant="outline"
              alignSelf={["center", "center", "start", "start"]}
            >
              Contact Me
            </Button>
            <Link
              href="/#"
              pt={["10rem","10rem","8rem","8rem"]}
              variant="ghost"
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
              alignSelf={["center", "center", "start", "start"]}
            >
              Scroll down
              <ArrowDownIcon mx="2px" />
            </Link>
          </VStack>
          <VStack>
            <Image
              ml="2rem"
              top="0"
              bg="brand.secondary"
              src={messi}
              boxSize="500px"
              display={["none", "none", "flex", "flex"]}
              objectFit="contain"
              borderRadius="full"
              alt="Me"
            ></Image>
          </VStack>
        </Flex>
      </Center>
    </>
  );
};
export default Home;
