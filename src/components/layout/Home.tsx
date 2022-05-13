import {
  Text,
  VStack,
  Heading,
  IconButton,
  Link,
  Divider,
  Image,
  Button,
  Container,
  Tooltip,
  Stack
} from "@chakra-ui/react";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
import {SiVercel,SiWhatsapp } from "react-icons/si";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import avatar from "../../assets/fede.png";
import {
  MotionFlex,
  MotionStack,
  AnimationFade,
  AnimationButton,
  showComponent,
  BouncingElement,
} from "../../styles/animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Container
        minWidth={["540px", "767px", "992px", "1200px"]}
        pt={["1rem", "4rem", "8rem", "10rem"]}
        id="home"
      >
        <MotionFlex
          justify="center"
          initial="hidden"
          animate="visible"
          variants={showComponent}
        >
          <VStack
            pr={["1rem", "1rem", "4rem", "4rem"]}
            pt={["10rem", "8rem", "2rem", ""]}
          >
            <Link href="https://github.com/FedeCrossetto" isExternal>
              <Tooltip label="GitHub" placement="left">
                <IconButton
                  fontSize="2xl"
                  _hover={{ color: "brand.secondary" }}
                  icon={<FiGithub />}
                  aria-label="Gitlab"
                  variant="ghost"
                  pos="static"
                ></IconButton>
              </Tooltip>
            </Link>
            <Link
              href="https://vercel.com/fedevazquezcrossetto-gmailcom"
              isExternal
            >
              <Tooltip label="Vercel" placement="left">
                <IconButton
                  fontSize="2xl"
                  _hover={{ color: "brand.secondary" }}
                  icon={<SiVercel />}
                  aria-label="Netlify"
                  variant="ghost"
                  pos="static"
                ></IconButton>
              </Tooltip>
            </Link>
            <Link
              href="https://ar.linkedin.com/in/federico-crossetto/en?trk=people-guest_people_search-card"
              isExternal
            >
              <Tooltip label="Linkedin" placement="left">
                <IconButton
                  fontSize="2xl"
                  _hover={{ color: "brand.secondary" }}
                  icon={<FiLinkedin />}
                  aria-label="Linkedin"
                  variant="ghost"
                  pos="static"
                ></IconButton>
              </Tooltip>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=541159059154&text="
              isExternal
            >
              <Tooltip label="Whatsapp" placement="left">
                <IconButton
                  fontSize="2xl"
                  _hover={{ color: "brand.secondary" }}
                  icon={<SiWhatsapp />}
                  aria-label="Whatsapp"
                  variant="ghost"
                  pos="static"
                ></IconButton>
              </Tooltip>
            </Link>
          </VStack>

          <VStack maxW={["", "", "26rem", "26rem"]}>
            <Image
              // ml="2rem"
              top="0"
              // bg="brand.secondary"
              src={avatar}
              boxSize="250px"
              display={["flex", "flex", "none", "none"]}
              objectFit="contain"
              borderRadius="full"
              alt="Me"
            ></Image>
            <Heading
              fontSize={["3xl", "4xl", "5xl", "6xl"]}
              bgGradient="linear(to-t, brand.primary , brand.secondary)"
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
            <MotionStack
              whileHover="hover"
              whileTap="tap"
              variants={AnimationButton}
              alignSelf={["center", "center", "start", "start"]}
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                color="brand.primary"
                fontSize="sm"
                variant="outline"
                onClick={() => scroll.scrollToBottom()}      
              > 
              View Portfolio
              </Button>
            </MotionStack>

            <MotionStack
              initial="hidden"
              animate="visible"
              variants={AnimationFade}
              justifyContent="center"
              alignSelf={["center", "center", "start", "start"]}
              pt={["6rem", "6rem", "10rem", "10rem"]}
            >
              <Link
                href="/#"
                pt={["3rem", "2rem", "3rem", "0.5rem"]}
                variant="ghost"
                _hover={{
                  textDecorationColor: "none",
                  boxShadow: "none",
                  outline: "none",
                  border: "none",
                }}
              >
                <Stack>
                  <motion.span
                    transition={BouncingElement}
                    animate={{
                      y: ["50%", "-50%"],
                    }}
                  >
                    <LinkScroll
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={1200}
                      offset={100}
                    >
                      <Button variant="ghost">
                        <Text>Scroll down</Text>
                        <ArrowDownIcon
                          alignSelf="center"
                          justifyContent="center"
                        />
                      </Button>
                    </LinkScroll>
                  </motion.span>
                </Stack>
              </Link>
            </MotionStack>
          </VStack>
          <VStack>
            <Image
              ml="2rem"
              top="0"
              src={avatar}
              boxSize="500px"
              display={["none", "none", "flex", "flex"]}
              objectFit="contain"
              borderRadius="full"
              alt="Me"
            ></Image>
          </VStack>
        </MotionFlex>
      </Container>
    </>
  );
};
export default Home;
