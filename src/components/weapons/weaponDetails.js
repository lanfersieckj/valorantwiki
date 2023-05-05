import React from 'react';
import { Box, Divider, Image, Text, Heading, SimpleGrid, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import WeaponSkinCard from './weaponSkin';

const WeaponDetails = ({ weapon }) => {

    const bgColor = useColorModeValue('gray.100', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'gray.100');

    if (!weapon) {
        return <Text>Weapon not found.</Text>;
    }

    return (
        <VStack justifyContent={'center'} spacing={4} w="80%" m="0 auto">
            <Box bg={bgColor} borderRadius="md" p={5} w="100%">
                <Heading fontSize={'50px'} textAlign="center" color={textColor}>
                    {weapon?.displayName}
                </Heading>
                <Image
                    src={weapon?.displayIcon}
                    alt={`${weapon?.displayName} icon`}
                    // boxSize="150px"
                    m="0 auto"
                    my={5}
                />
                <Divider borderColor={textColor} />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={5}>
                    <VStack alignItems="start" spacing={2}>
                        <Text fontSize="lg" color={textColor}>
                            Category: {weapon?.category?.split('::')[1]}
                        </Text>
                        <Text fontSize="lg" color={textColor}>
                            Price: {weapon?.shopData?.cost}
                        </Text>
                        <Text fontSize="lg" color={textColor}>
                            Wall Penetration: {weapon?.weaponStats?.wallPenetration.split('::')[1]}
                        </Text>
                    </VStack>
                    <VStack alignItems="start" spacing={2}>
                        <Text fontSize="lg" color={textColor}>
                            Fire Rate: {weapon?.weaponStats?.fireRate} rounds/sec
                        </Text>
                        <Text fontSize="lg" color={textColor}>
                            Magazine Size: {weapon?.weaponStats?.magazineSize}
                        </Text>
                        <Text fontSize="lg" color={textColor}>
                            Reload Time: {weapon?.weaponStats?.reloadTimeSeconds}s
                        </Text>
                    </VStack>
                </SimpleGrid>
                <Divider borderColor={textColor} mt={5} />
                <Box mt={5}>
                    <Heading fontSize={'20px'} mb={2} color={textColor}>
                        Damage Ranges:
                    </Heading>
                    {weapon?.weaponStats?.damageRanges.map((range, index) => (
                        <Text key={index} color={textColor}>
                            {range?.rangeStartMeters}-{range?.rangeEndMeters} meters: {range?.bodyDamage} body, {range?.headDamage} head, {range?.legDamage} leg
                        </Text>
                    ))}
                </Box>
            </Box>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                {weapon?.skins?.map((skin) => (
                    !(skin.displayName === `Standard ${weapon.displayName}` || skin.displayName === "Random Favorite Skin" || skin.displayName == "Melee" ) &&
                    <WeaponSkinCard key={skin.uuid} skin={skin} />
                ))}
            </SimpleGrid>
        </VStack>
    );
};

export default WeaponDetails;
