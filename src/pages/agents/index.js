import Image from 'next/image'
import { useEffect, useState } from "react";
import { FullPageDashError } from '@/components/error';
import AgentsList from '@/components/agents/agentList';
import { Heading, VStack } from '@chakra-ui/react';

export default function Agents() {

  const [agents, setAgents] = useState([])
  const [pageError, setPageError] = useState(false)
  

  useEffect (() => {
    async function getAgents() {
      try {
        const agents =  await fetch('/api/agents', {
          method: "GET"
        })
          .then(res => res.json())
        if (agents.error) return setPageError(agents.error)
        setAgents(agents)
      } catch (err) {
        console.warn(err)
      }
    }
    getAgents()
  }, [])

  if (pageError) {
    return (
      <FullPageDashError/>
    )
  }

  return (

    <VStack justifyContent={"center"}>
      <Heading fontSize={"50px"}>Agent List</Heading>
      <AgentsList agents={agents.agents}/> 
    </VStack>

  )
}
