import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const AgentCard = ({ agent }) => {
  return (
    // <Box>
    //     <VStack justifyContent={"center"}>
    //     <Image boxSize={'200px'} src={agent?.displayIcon} alt={agent?.displayName} />
    //     <Text> {agent?.displayName} </Text>
    //     </VStack>
    // </Box>

    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image boxSize={'200px'} src={agent?.displayIcon} alt={agent?.displayName} />
      <Box p="6">
        <Text fontSize="xl" fontWeight="bold">
          {agent?.displayName}
        </Text>
      </Box>
    </Box>
  );
};

export default AgentCard;