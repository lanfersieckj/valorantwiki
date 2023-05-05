import { useEffect, useState } from "react";
import { FullPageDashError } from '@/components/error';
import { Heading, VStack } from '@chakra-ui/react';
import WeaponList from "@/components/weapons/weaponList";
import { useRouter } from 'next/router';
import WeaponDetails from "@/components/weapons/weaponDetails";

export default function Weapon() {

  const [selectedWeapon, setSelectedWeapon] = useState([])
  const [pageError, setPageError] = useState(false)

  const router = useRouter();

    const  weaponId  = router.query.id;


  useEffect (() => {
    if (!router.isReady) return;
    async function getWeapon() {
      try {
        const weapon =  await fetch(`/api/weapons/${weaponId}`, {
          method: "GET"
        })
          .then(res => res.json())
        if (weapon.error) return setPageError(weapon.error)
        setSelectedWeapon(weapon.weapon)
      } catch (err) {
        console.warn(err)
      }
    }
    getWeapon()
  }, [router])

  if (pageError) {
    return (
      <FullPageDashError/>
    )
  }

  return (

    <VStack justifyContent={"center"}>
      {/* <Heading fontSize={"50px"}>{selectedWeapon.displayName}</Heading> */}
      <WeaponDetails weapon={selectedWeapon}/>
      {/* <WeaponList weapons={selectedWeapon.weapons}/>  */}
    </VStack>

    
  )
}
