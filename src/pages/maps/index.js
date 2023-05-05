import { useEffect, useState } from "react";
import { FullPageDashError } from '@/components/error';
import { Heading, VStack } from '@chakra-ui/react';
import MapList from "@/components/maps/mapList";

export default function Maps() {

  const [maps, setMaps] = useState([])
  const [pageError, setPageError] = useState(false)
  

  useEffect (() => {
    async function getMaps() {
      try {
        const maps =  await fetch('/api/maps', {
          method: "GET"
        })
          .then(res => res.json())
        if (maps.error) return setPageError(maps.error)
        setMaps(maps)
      } catch (err) {
        console.warn(err)
      }
    }
    getMaps()
  }, [])

  if (pageError) {
    return (
      <FullPageDashError/>
    )
  }

  return (

    <VStack justifyContent={"center"}>
      <Heading fontSize={"50px"}>Map List</Heading>
      <MapList maps={maps.maps}/>
      {/* <WeaponList weapons={weapons.weapons}/>  */}
    </VStack>

  )
}
