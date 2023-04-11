import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const AgentCard = ({ agent }) => {
  return (
    <Box>
        <VStack justifyContent={"center"}>
        <Image boxSize={'200px'} src={agent?.displayIcon} alt={agent?.displayName} />
        <Text> {agent?.displayName} </Text>
        </VStack>
    </Box>
    // <div className="agent-card">
    //   <img src={agent?.displayIcon} alt={agent?.displayName} />
    //   <h2>{agent?.displayName}</h2>
    //   <p>{agent?.description}</p>
    //   <p>Role: {agent?.role?.displayName}</p>
    //   <p>Developer: {agent?.developerName}</p>
    // </div>
  );
};

export default AgentCard;