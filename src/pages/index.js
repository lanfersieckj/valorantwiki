import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import { FullPageDashError } from '@/components/error';


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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Valorant Wiki</div>      
    </main>
  )
}
