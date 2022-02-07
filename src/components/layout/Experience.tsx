import React from "react";
import {
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
  Center,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdCheckCircle, MdWorkOutline } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import {
  MotionFlex,
  MotionStack,
  AnimationFlex,
  AnimationSpring,
  AnimationTransition,
  showComponent,
} from "../../styles/animation";

const Experience = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:480px)");
  return (
    <>
      <Container
        minWidth={["480px", "767px", "992px", "1200px"]}
        pt="24rem"
        id="experience"
      >
        <MotionFlex
          justify="center"
          initial="hidden"
          animate="visible"
          variants={showComponent}
          
        >
          <VStack>
            <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>
              Experience
            </Heading>
            <Text fontSize={["sm", "md", "md", "md"]} color="brand.tertiary">
              My personal journey
            </Text>

            <Center>
              <Tabs
                isFitted
                variant="enclosed"
                fontSize={["sm", "md", "md", "md"]}
              >
                <TabList mb="1em" pt="6rem">
                  <Tab>
                    <Box px="1rem" color="brand.primary">
                      <FaUserGraduate />
                    </Box>
                    Education
                  </Tab>
                  <Tab>
                    <Box px="1rem" color="brand.primary">
                      <MdWorkOutline />
                    </Box>
                    Work
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <List spacing={6}>
                      <ListItem>
                        <HStack>
                          <ListIcon
                            as={MdCheckCircle}
                            color="brand.secondary"
                          />
                          <Text color="brand.tertiary">[2018-2019]</Text>
                          <Text> ISTEA - Desarrollo de Software.</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon
                            as={MdCheckCircle}
                            color="brand.secondary"
                          />
                          <Text color="brand.tertiary">[2018-2019]</Text>
                          <Text> ISTEA - Desarrollo de Software.</Text>
                        </HStack>
                      </ListItem>
                    </List>
                  </TabPanel>
                  <TabPanel>
                    <List spacing={6}>
                      <ListItem>
                        <HStack>
                          <ListIcon
                            as={MdCheckCircle}
                            color="brand.secondary"
                          />
                          <Text color="brand.tertiary">[2019-2020]</Text>
                          <Text> Accenture - Architect Delivery Associate</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon
                            as={MdCheckCircle}
                            color="brand.secondary"
                          />
                          <Text color="brand.tertiary">[2020-2021]</Text>
                          <Text> SISTRAN - Full Stack Developer.</Text>
                        </HStack>
                      </ListItem>
                      <ListItem>
                        <HStack>
                          <ListIcon
                            as={MdCheckCircle}
                            color="brand.secondary"
                          />
                          <Text color="brand.tertiary">[2021- Now]</Text>
                          {!isNotSmallerScreen ? (
                            <Text>
                              Santander Tec. - Software Dev. Engineer.
                            </Text>
                          ) : (
                            <Text>
                              Santander Tecnología - Software Development
                              Engineer.
                            </Text>
                          )}
                        </HStack>
                      </ListItem>
                    </List>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Center>
          </VStack>
        </MotionFlex>
      </Container>
    </>
  );
};

export default Experience;
