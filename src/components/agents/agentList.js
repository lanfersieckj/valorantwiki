import { Wrap } from '@chakra-ui/react';
import React from 'react';
import AgentCard from './AgentCard';

const AgentsList = ({ agents }) => {
    console.log("agentList: ", agents)
  return (
    <Wrap justify={"center"} spacing={"40px"}>
      {agents?.map((agent) => (
        <AgentCard key={agent?.uuid} agent={agent} />
      ))}
    </Wrap>
  );
};

export default AgentsList;