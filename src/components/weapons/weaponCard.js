import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const WeaponCard = ({ weapon }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={weapon.displayIcon} alt={weapon.displayName} />
      <Box p="6">
        <Text fontSize="xl" fontWeight="bold">
          {weapon.displayName}
        </Text>
      </Box>
    </Box>
  );
};

export default WeaponCard;
