import { Wrap } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import AgentCard from './agentCard';

const AgentsList = ({ agents }) => {
  return (
    <Wrap justify={"center"} spacing={"40px"}>
      {agents?.map((agent) => (
        <Link key={agent.uuid} href={`/agents/${agent.uuid}`}>
          <AgentCard agent={agent} />
        </Link>
      ))}
    </Wrap>
  );
};

export default AgentsList;