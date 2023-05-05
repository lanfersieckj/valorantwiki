import { useEffect, useState } from "react";
import { FullPageDashError } from '@/components/error';
import { Heading, VStack } from '@chakra-ui/react';
import WeaponList from "@/components/weapons/weaponList";
import { useRouter } from 'next/router';
import WeaponDetails from "@/components/weapons/weaponDetails";
import MapDetails from "@/components/maps/mapDetails";

export default function Map() {

  const [selectedMap, setSelectedMap] = useState([])
  const [pageError, setPageError] = useState(false)

  const router = useRouter();

    const  mapId  = router.query.id;


  useEffect (() => {
    if (!router.isReady) return;
    async function getMap() {
      try {
        const map =  await fetch(`/api/maps/${mapId}`, {
          method: "GET"
        })
          .then(res => res.json())
        if (map.error) return setPageError(weapon.error)
        setSelectedMap(map.map)
      } catch (err) {
        console.warn(err)
      }
    }
    getMap()
  }, [router])

  if (pageError) {
    return (
      <FullPageDashError/>
    )
  }

  return (

    <VStack justifyContent={"center"}>
      <Heading fontSize={"50px"}>{selectedMap.displayName}</Heading>
      <MapDetails map={selectedMap}/>
    </VStack>

    
  )
}
