import {
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Cards from "./Cards";

const Portfolio = () => {
  return (
    <>
      <Container minWidth={["480px", "767px", "992px", "1200px"]} pt="20rem" id="portfolio">
        <Flex justify="center">
          <VStack>
            <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>Portfolio</Heading>
            <Text
              fontSize={["sm", "md", "md", "md"]}
              color="brand.tertiary"
              pb="6rem"
            >
              Some recent works
            </Text>   
          <Tabs colorScheme="purple" >
            <TabList >
              <Tab fontWeight="bold" fontSize="sm" >ALL</Tab>
              <Tab fontWeight="bold" fontSize="sm">WEB DEVELOPMENT</Tab>
              <Tab fontWeight="bold" fontSize="sm">LANDING</Tab>
              <Tab fontWeight="bold" fontSize="sm">E-COMMERCE</Tab>
              <Tab fontWeight="bold" fontSize="sm">E-LEARNING</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
              <Cards/>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
              <Cards/>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
              <Cards/>
              </TabPanel>
            </TabPanels>
          </Tabs>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Portfolio;
