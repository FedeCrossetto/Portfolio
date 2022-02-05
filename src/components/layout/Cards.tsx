import React from "react";
import { HStack, Image } from "@chakra-ui/react";

const Cards = () => {
  return (
    <>
      <HStack direction="row">
        <Image
          boxSize="200px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          borderRadius="xl"
        />
        <Image
          boxSize="200px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          borderRadius="xl"
        />
        <Image
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          borderRadius="xl"
        />
      </HStack>
    </>
  );
};

export default Cards;
