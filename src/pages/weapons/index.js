import { useEffect, useState } from "react";
import { FullPageDashError } from '@/components/error';
import { Heading, VStack } from '@chakra-ui/react';
import WeaponList from "@/components/weapons/weaponList";

export default function Weapons() {

  const [weapons, setWeapons] = useState([])
  const [weaponsLoading, setWeaponsLoading] = useState(true)
  const [pageError, setPageError] = useState(false)
  

  useEffect (() => {
    async function getWeapons() {
      try {
        const weapons =  await fetch('/api/weapons', {
          method: "GET"
        })
          .then(res => res.json())
        if (weapons.error) return setPageError(weapons.error)
        setWeapons(weapons)
        setWeaponsLoading(false)
      } catch (err) {
        console.warn(err)
      }
    }
    getWeapons()
  }, [])

  if (pageError) {
    return (
      <FullPageDashError/>
    )
  }

  return (

    <VStack justifyContent={"center"}>
      <Heading fontSize={"50px"}>Weapon List</Heading>
      <WeaponList weapons={weapons.weapons} weaponsLoading={weaponsLoading}/> 
    </VStack>

  )
}
