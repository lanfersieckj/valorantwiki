import { Box, VStack, Heading, Image, Text, Link } from '@chakra-ui/react';

function MapDetails({ map }) {
  return (
    <VStack spacing={4} alignItems="center">
      <Image src={map.splash} alt={map.displayName} w="80%" h="auto" />
      <Image src={map.displayIcon} alt={map.displayName} w="80%" h="auto" />

    </VStack>
  );
}

export default MapDetails;
