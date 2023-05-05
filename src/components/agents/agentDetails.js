import { VStack, Heading, Text, Box, Image, HStack } from '@chakra-ui/react';

function AgentDetails({ agent }) {
  return (
    <VStack spacing={4} alignItems="center">
      <Image src={agent.fullPortrait} alt={agent.displayName} w="50%" h="auto" />
      <Text>{agent.description}</Text>
      <Box>
        <Heading mb={"10px"} size="md">Abilities</Heading>
        <VStack spacing={2} alignItems={"start"}>
          {agent.abilities?.map((ability, index) => (
            <HStack key={index}>
              <Image src={ability.displayIcon} alt={ability.displayName} borderRadius={"5px"} bg={"gray"} w="50px" h="50px" />
              <Heading size="sm">{ability.displayName}</Heading>
              <Text>{ability.description}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default AgentDetails;
