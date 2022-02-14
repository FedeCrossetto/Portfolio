import React, {useState } from "react";
import {
  Text,
  VStack,
  Flex,
  Heading,
  IconButton,
  Link,
  Divider,
  Image,
  Button,
  Container,
  Tooltip,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  Box,
  HStack,
  Textarea,
  Center,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { SiNetlify, SiGmail } from "react-icons/si";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import avatar from "../../assets/fede.png";
import avatar2 from "../../assets/fede2.png";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState('')
  const [values, setValues] = React.useState({
    message: "",
  });


  function handleSubmit(evt: any) {
    evt.preventDefault();
  }

  const goToWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=541159059154&text=" + values.message
    );
  };

  const goToGmail = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?fs=1&to=f.vazquez.crossetto@gmail.com&cc=&su=Contact&body="+ values.message+"&tf=cm"
    );
  };

  function handleChange(evt: any) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
    setInput(evt.target.value);
  }

  const isError = input === ''

  return (
    <>
     {/* --------------------------------------------------------MODAL-------------------------------------------------------- */}
     <Modal
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior="inside"
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader letterSpacing={3}>Contact Me</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <Image
                  src={avatar2}
                  objectFit="contain"
                  bg="brand.secondary"
                  borderRadius="full"
                  boxSize="100px"
                  boxShadow="lg"
                />
              </Center>
              <Flex justifyContent="space-between" p="1rem">
                <VStack alignSelf="center" top="0" mx="0.5rem">
                  <FormControl
                    onSubmit={handleSubmit}
                    // method="GET"
                    isInvalid={isError}
                    isRequired
                  >
                    <HStack>
                      <Textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Write the message you want to send me ..."
                        resize="none"
                        borderRadius="xl"
                        maxLength={200}
                        p="0.5rem"
                        fontSize="xs"
                        cols={50}
                        rows={6}
                      />
                      <VStack>
                        <Button
                          type="submit"
                          boxShadow="lg"
                          borderRadius="lg"
                          p="0.5rem"
                          onClick={goToWhatsapp}
                          h="3.5rem"
                          isDisabled={isError ? true : false}
                        >
                          <Box
                            bg="brand.primary"
                            borderRadius="full"
                            p="0.2rem"
                            // name="whatsapp"
                          >
                            <AiOutlineWhatsApp color="white" size="1.5rem" />
                          </Box>
                        </Button>
                        <Button
                          type="submit"
                          boxShadow="lg"
                          borderRadius="lg"
                          p="0.5rem"
                          onClick={goToGmail}
                          h="3.5rem"
                          isDisabled={isError ? true : false}
                        >
                          <Box bg="white" borderRadius="full" p="0.2rem">
                            <SiGmail color="red" size="1.5rem" />
                          </Box>
                        </Button>
                      </VStack>
                    </HStack>
                    {isError && (
                        <VStack>
                          <FormErrorMessage fontSize="xs">Write some message to send.</FormErrorMessage>
                        </VStack>
                      )}
                  </FormControl>
                </VStack>
              </Flex>
            </ModalBody>

            <ModalFooter>
              {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* --------------------------------------------------------/MODAL-------------------------------------------------------- */}
     
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
            pt={["1rem", "2rem", "2rem", ""]}
            
          >
            <Link href="https://github.com/FedeCrossetto" isExternal>
              <Tooltip label="GitHub" placement="left">
                <IconButton
                  size="lg"
                  _hover={{ color: "brand.secondary" }}
                  icon={<FiGithub />}
                  aria-label="Gitlab"
                  variant="ghost"
                  pos="static"
                ></IconButton>
              </Tooltip>
            </Link>
            <Link
              href="https://app.netlify.com/teams/fede-vazquez-crossetto/overview"
              isExternal
            >
              <Tooltip label="Netlify" placement="left">
                <IconButton
                  size="lg"
                  _hover={{ color: "brand.secondary" }}
                  icon={<SiNetlify />}
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
                  size="lg"
                  _hover={{ color: "brand.secondary" }}
                  icon={<FiLinkedin />}
                  aria-label="Linkedin"
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
                onClick={onOpen}
              >
                Contact Me
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
                      <Button  variant="ghost" >
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
