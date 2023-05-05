import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const MapCard = ({ map }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={map.listViewIcon} alt={map.displayName} />
      <Box p="6">
        <Text fontSize="xl" fontWeight="bold">
          {map.displayName}
        </Text>
      </Box>
    </Box>
  );
};

export default MapCard;
