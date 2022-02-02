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

const Home = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");

  return (
    <>
      <Center pt={20} spacing={6}>
        <Flex pt={40}
              minWidth={{base:"480px" , sm:"767px" , md:"992px" , lg:"1200px"}}
              >
          <VStack p={5}>
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

          <VStack marginX={16} alignItems="flex-start" maxW="20rem">
            <Heading
              alignSelf="flex-start"
              fontSize="5xl"
              bgGradient="linear(to-r, brand.primary , brand.secondary)"
              bgClip="text"
            >
              Hi , I'am Fede
            </Heading>
            <Text fontSize="2xl">Frontend developer</Text>
            <Divider variant="solid" />
            <Text fontSize="sm" fontWeight="light" pb="12">
              High level experience in web design and development
              knowledge,producing quality work.
            </Text>
            <Button
              rightIcon={<ArrowForwardIcon />}
              bg="brand.primary"
              fontSize="sm"
            >
              Contact Me
            </Button>
            <Link
              href="/#"
              pt={32}
              alignSelf="flex-start"
              variant="ghost"
              _hover={{ textDecorationColor: "none", boxShadow: "none" ,outline:"none",border:"none"}}
              _visited={{ textDecorationColor: "none", boxShadow: "none",outline:"none",border:"none" }}
              _active={{ textDecorationColor: "none", boxShadow: "none",outline:"none",border:"none" }}
            >
              Scroll down
              <ArrowDownIcon mx="2px" />
            </Link>
          </VStack>
          <VStack>
            <Image
              src="https://github.com/bedimcode/responsive-portfolio-website-Alexa/blob/main/assets/img/perfil.png?raw=true"
              boxSize="450px"
              alt="Me"
            ></Image>
          </VStack>
        </Flex>
      </Center>
    </>
  );
};
export default Home;
