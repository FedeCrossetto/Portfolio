import React from "react";
import { HStack, Image } from "@chakra-ui/react";

const Cards = () => {
  return (
    <>
      <HStack>
        <Image
          // boxSize="140px"
          w="140px"
          h="280px"
          objectFit="cover"
          src="https://media.istockphoto.com/vectors/rabbit-logo-vector-id1151157309?k=20&m=1151157309&s=612x612&w=0&h=DLq-5feLhJ7BJJjAuN-5fuD9aYBGNhHcXIqkrLRXJfs="
          alt="Dan Abramov"
          borderRadius="xl"
          boxShadow="dark-lg"
        />
        <Image
           w="140px"
           h="280px"
          objectFit="cover"
          src="https://media.istockphoto.com/vectors/squirrel-illustration-vector-template-vector-id1190323845?k=20&m=1190323845&s=612x612&w=0&h=gUL3FX5RVyKsF8TAlkNfuORkcakB828JEcoWUroYM58="
          alt="Dan Abramov"
          borderRadius="xl"
        />
        { <Image
          w="140px"
          h="280px"
          objectFit="cover"
          src="https://media.istockphoto.com/vectors/vector-illustration-killer-whale-gradient-colorful-style-vector-id1259738586?k=20&m=1259738586&s=612x612&w=0&h=uBfYV3QeIvF-OeTPYd6nDUzLcBsj6EnZKxNb3Pvgj9w="
          alt="Dan Abramov"
          borderRadius="xl"
        />
       /* <Image
          boxSize="200px"
          src="https://media.istockphoto.com/vectors/vector-illustration-phoenix-gradient-colorful-style-vector-id1321419763?k=20&m=1321419763&s=612x612&w=0&h=lOtgso0mFRNO-Bw2mdEw9wLbdOrpHEdgNrMPwJWIqKI="
          alt="Dan Abramov"
          borderRadius="xl"
        />
        <Image
          boxSize="200px"
          src="https://media.istockphoto.com/vectors/vector-illustration-pegasus-gradient-colorful-style-vector-id1322607137?k=20&m=1322607137&s=612x612&w=0&h=idpm5iL-K5MeQvkpnqEdHGuzSYZL8OD16bc7_u8cUN4="
          alt="Dan Abramov"
          borderRadius="xl"
        />
        <Image
          boxSize="200px"
          src="https://media.istockphoto.com/vectors/vector-illustration-caribou-gradient-colorful-style-vector-id1262580589?k=20&m=1262580589&s=612x612&w=0&h=wJn2dOk2hIb72A_DNejAYfG49MUYgimK-dZI4eFN2fk="
          alt="Dan Abramov"
          borderRadius="xl"
        /> */}
      </HStack>
    </>
  );
};

export default Cards;
