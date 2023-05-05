import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

const WelcomePage = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100%"
    >
    <VStack
      alignItems="center"
      justifyContent="center"
      spacing={8}
      p={8}
      borderRadius="lg"
      w="full"
      maxW="md"
      bg={bgColor}
      color={textColor}
    >
      <Heading>Welcome to Valorant Wiki!</Heading>
      <Image
        src="https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png"
        alt="Brimstone"
        borderRadius="full"
        boxSize="150px"
        objectFit="cover"
      />
      <Text textAlign="center">
        This is Brimstone from Valorant, and I&apos;m here to welcome you to the
        ultimate resource for all things Valorant. In this wiki, you&apos;ll find
        comprehensive information on weapons, maps, and agents to keep
        you prepared for any battle.
      </Text>
      <Text textAlign="center">
        Get ready to dive in and enhance your knowledge, soldier!
      </Text>
    </VStack>
    </Flex>
  );
};

export default WelcomePage;