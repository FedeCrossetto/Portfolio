import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { SiNodedotjs, SiReact } from "react-icons/si";
import { FiGitPullRequest, FiDatabase } from "react-icons/fi";

const Skills = () => {
  return (
    <Container minWidth={["480px", "767px", "992px", "1200px"]} pt="14rem">
      <Flex justify="center">
        <VStack>
          <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>Skills</Heading>
          <Text
            fontSize={["sm", "md", "lg", "lg"]}
            color="brand.tertiary"
            pb="6rem"
          >
            My technical level
          </Text>
          <HStack></HStack>
        </VStack>
      </Flex>
      <VStack>
        {/*------------------------------------------------------------ ACORDION ------------------------------------------------------------ */}
        <Accordion allowToggle minWidth={["480px", "767px", "992px", "1200px"]}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box mr="1rem" color="brand.secondary" fontSize="lg">
                  <SiReact />
                </Box>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Frontend Developer
                </Box>
                <AccordionIcon color="brand.secondary" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {/*------------------------------------------------------------ /PROGRESS BAR ------------------------------------------------------------ */}
              <HStack justifyContent="space-between">
                <Text>React.js</Text>
                <Text>90 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={90} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------ PROGRESS BAR ------------------------------------------------------------ */}
              <HStack justifyContent="space-between">
                <Text>Angular</Text>
                <Text>20 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={20} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------ /PROGRESS BAR ------------------------------------------------------------ */}
             <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box mr="1rem" color="brand.secondary" fontSize="lg">
                  <SiNodedotjs />
                </Box>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Backend Developer
                </Box>
                <AccordionIcon color="brand.secondary" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
               {/*------------------------------------------------------------ PROGRESS BAR ------------------------------------------------------------ */}
               <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}
              <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}                <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box mr="1rem" color="brand.secondary" fontSize="lg">
                  <FiDatabase />
                </Box>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Databases
                </Box>
                <AccordionIcon color="brand.secondary" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
               {/*------------------------------------------------------------ PROGRESS BAR ------------------------------------------------------------ */}
               <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}
                <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}
                <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box mr="1rem" color="brand.secondary" fontSize="lg">
                  <FiGitPullRequest />
                </Box>
                <Box flex="1" textAlign="left" fontWeight="semibold">
                  Version Controls
                </Box>
                <AccordionIcon color="brand.secondary" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {/*------------------------------------------------------------ PROGRESS BAR ------------------------------------------------------------ */}
                <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}
                <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}
                <HStack justifyContent="space-between">
                <Text>.NET Core</Text>
                <Text>70 %</Text>
              </HStack>
              <Slider aria-label="slider-ex-1" value={70} colorScheme="purple">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {/*------------------------------------------------------------  /PROGRESS BAR ------------------------------------------------------------ */}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/*------------------------------------------------------------ /ACORDION ------------------------------------------------------------ */}
      </VStack>
    </Container>
  );
};

export default Skills;
