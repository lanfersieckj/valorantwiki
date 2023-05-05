import { Wrap, Skeleton } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import WeaponCard from './weaponCard';

const WeaponList = ({ weapons, weaponsLoading }) => {

  return (
    <Wrap justify={"center"} spacing={"40px"}>
      {weaponsLoading ? (
        Array(18)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} height="300px" width="500px" />
          ))
      ) : (
        weapons?.map((weapon) => (
          <Link key={weapon.uuid} href={`/weapons/${weapon.uuid}`}>
              <WeaponCard weapon={weapon} />
          </Link>
        ))
      )}
    </Wrap>
  );
};

export default WeaponList;