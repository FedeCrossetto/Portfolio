import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Text,
    Button,
    ModalCloseButton,
    useDisclosure,
    Container,
  } from '@chakra-ui/react'
import React from "react";

 export const ModalForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <>
    {/* <Button onClick={onOpen}>Open Modal</Button> */}

<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Text fontWeight='bold' mb='1rem'>
        You can scroll the content behind the modal
      </Text>
      
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  );
};
