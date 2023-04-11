import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import { FullPageDashError } from '@/components/error';
import AgentsList from '@/components/agents/agentList';
import { Heading, VStack } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
        console.log("agents return: ", agents)
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

  //initial testing to see if data is being returned and can be displayed
  //this wil turn into a welcome page and the agent list will be elsewhere
  return (

    <VStack justifyContent={"center"}>
      <Heading fontSize={"50px"}>Agent List</Heading>
      <AgentsList agents={agents.agents}/> 
    </VStack>

  )
}
