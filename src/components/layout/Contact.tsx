import React from "react";
import {
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  Textarea,
  HStack,
  Image,
  Button,
  FormControl,
  Stack,
} from "@chakra-ui/react";
import whatsapp from "../../assets/whatsapp.png";
import gmail from "../../assets/gmail.png";
import handup from "../../assets/handup.png";
import { AnimationButton, MotionStack } from "../../styles/animation";

export const Contact = () => {
  const [input, setInput] = React.useState("");
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
      "https://mail.google.com/mail/u/0/?fs=1&to=f.vazquez.crossetto@gmail.com&cc=&su=Contact&body=" +
        values.message +
        "&tf=cm"
    );
  };

  function handleChange(evt: any) {
    evt.preventDefault();
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
    setInput(evt.target.value);
  }

  return (
    <>
      <Container
        minWidth={["540px", "767px", "992px", "1200px"]}
        pt={["6rem", "8rem", "8rem", "8rem"]}
        id="contact"
      >
        <Flex justify="center">
          <VStack align="center">
            <Heading>Contact Me</Heading>
            <Text
              fontSize={["sm", "md", "md", "md"]}
              color="brand.tertiary"
              //   pb="6rem"
            >
              Get in Touch
            </Text>

            <Text
              fontSize={["sm", "md", "md", "md"]}
              pt="4em"
              textAlign="center"
              maxW="24rem"
            >
              Get In Touch I am available to work on your projects and bring
              your ideas to life. I am just a click away.
            </Text>
            <HStack pt="2rem">
              <HStack pb="2rem">
                <Stack as="form" direction="row">
                  <Textarea
                    ml={["2rem", "1rem", "0rem", "0rem"]}
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder="Write the message you want to send me ..."
                    resize="none"
                    borderRadius="xl"
                    maxLength={200}
                    p="0.5rem"
                    fontSize="xs"
                    cols={100}
                    rows={8}
                    boxShadow="lg"
                  />
                  <VStack alignSelf="center" spacing="1rem">
                    <MotionStack
                      whileHover="hover"
                      whileTap="tap"
                      variants={AnimationButton}
                    >
                      <Button
                        variant="ghost"
                        type="submit"
                        onClick={goToWhatsapp}
                      >
                        <Image src={whatsapp} />
                      </Button>
                    </MotionStack>
                    <MotionStack
                      whileHover="hover"
                      whileTap="tap"
                      variants={AnimationButton}
                    >
                      <Button
                        type="submit"
                        variant="ghost"
                        onClick={goToGmail}
                      >
                        <Image src={gmail} />
                      </Button>
                    </MotionStack>
                  </VStack>
                </Stack>
              </HStack>
            </HStack>
            <Image h="16rem" src={handup} />
          </VStack>
        </Flex>
      </Container>
    </>
  );
};
