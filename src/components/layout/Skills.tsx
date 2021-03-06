import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";

import { SiNodedotjs, SiReact } from "react-icons/si";
import { FiGitPullRequest, FiDatabase } from "react-icons/fi";

const Skills = () => {
  return (
    <Container minWidth={["540px", "767px", "992px", "1200px"]} pt="14rem" id="skills">
      <Flex justify="center">
        <VStack>
          <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>Skills</Heading>
          <Text
            fontSize={["sm", "md", "md", "md"]}
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
        <Accordion allowToggle minWidth={["480px", "570px", "670px", "970px"]}>
          <AccordionItem>
            <h2>
              <AccordionButton mx="1rem" >
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
              <HStack justifyContent="space-between" mt="0.8rem">
                <Text >React.js</Text>
                {/* <Text>90 %</Text> */}
              </HStack>
              <Progress value={100} size='xs' colorScheme='purple' />
            <HStack justifyContent="space-between" mt="0.8rem">
                <Text>Angular</Text>
                {/* <Text>30 %</Text> */}
              </HStack>
              <Progress value={100} size='xs' colorScheme='purple' />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2 >
              <AccordionButton mx="1rem">
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
               <HStack justifyContent="space-between" mt="0.8rem">
                <Text>.NET Core</Text>
                {/* <Text>70 %</Text> */}
              </HStack>
              <Progress value={100} size='xs' colorScheme='purple' />
               <HStack justifyContent="space-between" mt="0.8rem">
                <Text>JS [Express.JS & Node.JS]</Text>
                {/* <Text>50 %</Text> */}
              </HStack>
              <Progress value={100} size='xs' colorScheme='purple' />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton mx="1rem">
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
               <HStack justifyContent="space-between" mt="0.8rem">
                <Text>SQL Server</Text>
                {/* <Text>90 %</Text> */}
              </HStack>
              <Progress value={100} size='xs' colorScheme='purple' />
                <HStack justifyContent="space-between" mt="0.8rem">
                <Text>Oracle</Text>
                {/* <Text>65 %</Text> */}
              </HStack>
              <Progress value={100} size='xs' colorScheme='purple' />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton mx="1rem">
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
                <HStack justifyContent="space-between" mt="0.8rem">
                <Text>Git</Text>
                {/* <Text>95 %</Text> */}
              </HStack>
              <Progress value={100} size='xs' colorScheme='purple' />
                <HStack justifyContent="space-between" mt="0.8rem">
                <Text>TFS</Text>
                {/* <Text>90 %</Text> */}
              </HStack>
              <Progress value={100} size='xs' colorScheme='purple' />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/*------------------------------------------------------------ /ACORDION ------------------------------------------------------------ */}
      </VStack>
    </Container>
  );
};

export default Skills;
