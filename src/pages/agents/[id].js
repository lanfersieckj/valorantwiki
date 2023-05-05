import { useEffect, useState } from "react";
import { FullPageDashError } from '@/components/error';
import { Heading, VStack } from '@chakra-ui/react';
import WeaponList from "@/components/weapons/weaponList";
import { useRouter } from 'next/router';
import WeaponDetails from "@/components/weapons/weaponDetails";
import AgentDetails from "@/components/agents/agentDetails";

export default function Map() {

  const [selectedAgent, setSelectedAgent] = useState([])
  const [pageError, setPageError] = useState(false)

  const router = useRouter();

    const  agentId  = router.query.id;


  useEffect (() => {
    if (!router.isReady) return;
    async function getAgent() {
      try {
        const agent =  await fetch(`/api/agents/${agentId}`, {
          method: "GET"
        })
          .then(res => res.json())
        if (agent.error) return setPageError(agent.error)
        setSelectedAgent(agent.agent)
      } catch (err) {
        console.warn(err)
      }
    }
    getAgent()
  }, [router, agentId])

  if (pageError) {
    return (
      <FullPageDashError/>
    )
  }

  return (

    <VStack ml={"10%"} mr={"10%"}  justifyContent={"center"}>
      <Heading fontSize={"50px"}>{selectedAgent.displayName}</Heading>
      <AgentDetails agent={selectedAgent}/>
    </VStack>

    
  )
}
