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
  Container,
  Stack,
  HStack,
  Tooltip,
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
     <Container minWidth={["480px", "767px", "992px", "1200px"]} pt={["2rem","4rem","8rem","10rem"]} id="home">
        <Flex
          justify="center"
        >
          
          <VStack  mr={["1rem","1rem","4rem","4rem"]} mt={["4rem","3rem","2rem",""]}>
            <Link href="https://github.com/FedeCrossetto" isExternal>
            <Tooltip label='GitHub' placement='left'>
              <IconButton
                size="xl"
                _hover={{ color: "brand.secondary" }}
                icon={<FiGithub />}
                aria-label="Gitlab"
                variant="ghost"
              ></IconButton>
                </Tooltip>
            </Link>
            <Link href="https://app.netlify.com/teams/fede-vazquez-crossetto/overview" isExternal>
            <Tooltip label='Netlify' placement='left'>
              <IconButton
                size="lg"
                _hover={{ color: "brand.secondary" }}
                icon={<SiNetlify />}
                aria-label="Netlify"
                variant="ghost"
              ></IconButton>
              </Tooltip>
            </Link>
            <Link href="https://ar.linkedin.com/in/federico-crossetto/en?trk=people-guest_people_search-card" isExternal>
            <Tooltip label='Linkedin' placement='left'>
              <IconButton
                size="lg"
                _hover={{ color: "brand.secondary" }}
                icon={<FiLinkedin />}
                aria-label="Linkedin"
                variant="ghost"
              ></IconButton>
                   </Tooltip>
            </Link>
          </VStack>

          <VStack maxW={["", "", "26rem", "26rem"]} >  
          <Image
              ml="2rem"
              top="0"
              bg="brand.secondary"
              src={messi}
              boxSize="250px"
              display={["flex", "flex","none", "none"]}
              objectFit="contain"
              borderRadius="full"
              alt="Me"
            ></Image>     
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
              py={["10rem","10rem","8rem","8rem"]}

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
      </Container>
    </>
  );
};
export default Home;
