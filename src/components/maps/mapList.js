import { Wrap } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import MapCard from './mapCard';

const MapList = ({ maps }) => {
  return (
    <Wrap justify={"center"} spacing={"40px"}>
      {maps?.map((map) => (
        <Link key={map.uuid} href={`/maps/${map.uuid}`}>
          <MapCard map={map} />
        </Link>
      ))}
    </Wrap>
  );
};

export default MapList;