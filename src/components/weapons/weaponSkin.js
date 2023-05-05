import { VStack, Text, Image } from "@chakra-ui/react";

const WeaponSkinCard = ({ skin }) => {
    return (
      <VStack
        borderWidth={1}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        p={4}
      >
        <Image
          src={skin.displayIcon}
          alt={skin.displayName}
          width="100%"
          height="auto"
        />
        <Text fontWeight="bold" fontSize="lg">
          {skin.displayName}
        </Text>
      </VStack>
    );
  };

  export default WeaponSkinCard;