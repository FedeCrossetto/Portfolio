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
      <Center pt={20} spacing={6}>
        <Flex
          pt={40}
          minWidth={{ base: "480px", sm: "767px", md: "992px", lg: "1200px" }}
        >
          <VStack p="3rem">
            <IconButton
              size="lg"
              _hover={{ color: "brand.secondary" }}
              icon={<FiGithub />}
              aria-label="Gitlab"
              variant="ghost"
            ></IconButton>
            <IconButton
              size="lg"
              _hover={{ color: "brand.secondary" }}
              icon={<SiNetlify />}
              aria-label="Netlify"
              variant="ghost"
            ></IconButton>
            <IconButton
              size="lg"
              _hover={{ color: "brand.secondary" }}
              icon={<FiLinkedin />}
              aria-label="Linkedin"
              variant="ghost"
            ></IconButton>
          </VStack>

          <VStack 
            alignSelf={["center", "center", "start", "start"]}
          >
            <Heading
              fontSize={["2xl", "3xl", "4xl", "5xl"]}
              bgGradient="linear(to-r, brand.primary , brand.secondary)"
              bgClip="text"
              alignSelf={["center", "center", "start", "start"]}
            >
              Hi , I'am Fede
            </Heading>
            <Text fontSize={["md", "lg", "xl", "2xl"]}
                   alignSelf={["center", "center", "start", "start"]}>Frontend developer</Text>
            <Divider variant="solid" />
            <Text fontSize="sm"
             fontWeight="light"
              pb="12"
              textAlign={["center", "center", "start", "start"]}>
              High level experience in web design and development
              knowledge,producing quality work.
            </Text>
            <Button
              rightIcon={<ArrowForwardIcon />}
              color="brand.primary"
              fontSize="sm"
              variant="outline"
            >
              Contact Me
            </Button>
            <Link
              href="/#"
              pt={32}
            
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
              boxSize="350px"
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
